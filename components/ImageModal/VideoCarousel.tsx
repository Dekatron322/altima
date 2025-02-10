import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { GoChevronLeft, GoChevronRight } from "react-icons/go"

const VideoCarousel = () => {
  const videos = ["/1 (1).mp4", "/2 (1).mp4", "/3 (1).mp4"]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [durations, setDurations] = useState<number[]>([]) // Store durations of videos

  // Function to handle video metadata load
  const handleLoadedMetadata = (index: number, e: React.SyntheticEvent<HTMLVideoElement>) => {
    const videoElement = e.target as HTMLVideoElement
    const duration = videoElement.duration * 1000 // Convert duration to milliseconds
    setDurations((prevDurations) => {
      const newDurations = [...prevDurations]
      newDurations[index] = duration
      return newDurations
    })
  }

  useEffect(() => {
    if (durations.length === 0 || !durations[currentIndex]) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
    }, durations[currentIndex]) // Use the duration of the current video

    return () => clearInterval(interval) // Cleanup on unmount
  }, [currentIndex, durations, videos.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  return (
    <div className="relative overflow-hidden xl:max-w-xl">
      <div
        className="flex w-full transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full flex-shrink-0"
          >
            <video
              src={video}
              width={10000} // Set your desired width
              height={600} // Set your desired height
              controls={false}
              autoPlay
              muted
              loop
              className="w-full"
              onLoadedMetadata={(e) => handleLoadedMetadata(index, e)} // Get video duration
            />
          </motion.div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-[#FF3B30] p-2 text-white"
      >
        <GoChevronLeft className="text-xl" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-[#FF3B30] p-2 text-white"
      >
        <GoChevronRight className="text-xl" />
      </button>
    </div>
  )
}

export default VideoCarousel
