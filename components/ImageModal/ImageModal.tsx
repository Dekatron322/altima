import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";


const ImageCarousel = () => {
  const images = [
    '/Frame 48095435.png',
    '/4.png',
    '/3.png',
    '/2.png',
    '/1.png', // Add more image paths here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-xl overflow-hidden">
      <div className="flex w-full transition-transform duration-500" style={{
        transform: `translateX(-${currentIndex * 100}%)`,
      }}>
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            width={732}
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
        className="absolute left-2  top-1/2 transform -translate-y-1/2 bg-[#FF3B30] text-white p-2 rounded-full"
      >
        <GoChevronLeft className='text-xl'/>

      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FF3B30] text-white p-2 rounded-full"
      >
        <GoChevronRight className='text-xl'/>

      </button>
    </div>
  );
};

export default ImageCarousel;
