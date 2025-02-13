import { motion } from "framer-motion"
import { SetStateAction, useEffect, useState } from "react"
import { GoChevronLeft, GoChevronRight } from "react-icons/go"

const ImageCarousel = () => {
  const images = [
    "/Web.1901.png",
    "/accsensys.24.png",
    "/accsensys.23.png",
    "/accsensys.22.png",
    "/accsensys.20.png",
    "/accsensys.19.png",
    "/accsensys.18.png",
    "/accsensys.14.png",
    "/accsensys.13.png",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [thumbStartIndex, setThumbStartIndex] = useState(0) // Track the starting index of visible thumbnails
  const visibleThumbnails = 8 // Number of thumbnails to show at once

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change slides every 3 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [images.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentIndex(index)
  }

  const scrollThumbnails = (direction: string) => {
    if (direction === "prev") {
      setThumbStartIndex((prev) => Math.max(0, prev - 1))
    } else {
      setThumbStartIndex((prev) => Math.min(images.length - visibleThumbnails, prev + 1))
    }
  }

  return (
    <div className="w-full xl:max-w-xl">
      {/* Main Carousel */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex w-full transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              width={645}
              height={555}
              alt={`Image ${index + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full flex-shrink-0"
            />
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

      {/* Thumbnail Preview */}
      <div className="mt-4 flex items-center justify-between">
        {/* Scroll Left Button */}

        {/* Visible Thumbnails */}
        <div className="flex flex-1 gap-2 overflow-hidden ">
          {images.slice(thumbStartIndex, thumbStartIndex + visibleThumbnails).map((image, index) => {
            const actualIndex = thumbStartIndex + index
            return (
              <motion.div
                key={actualIndex}
                onClick={() => goToSlide(actualIndex)}
                className={`h-30 w-40 cursor-pointer overflow-hidden rounded-lg border-2 ${
                  currentIndex === actualIndex ? "border-[#FF3B30]" : "border-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <img src={image} alt={`Thumbnail ${actualIndex + 1}`} className="h-full w-full object-cover" />
              </motion.div>
            )
          })}
        </div>

        {/* Scroll Right Button */}
      </div>
    </div>
  )
}

export default ImageCarousel
