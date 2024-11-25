import React, { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { LiaTimesSolid } from "react-icons/lia"

interface ImageModalProps {
  isOpen: boolean
  images: string[]
  currentIndex: number
  onClose: () => void
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, images, currentIndex, onClose }) => {
  if (!isOpen) return null // Render nothing if isOpen is false
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000] bg-opacity-95">
      <div className="w-full max-w-xl rounded-lg bg-[#151515] p-4 text-white">
        <div className="mb-4 flex w-full items-center">
          <h2 className=" w-full text-center text-[#FFFFFF99]">Altima Elite</h2>
          <LiaTimesSolid onClick={onClose} className="cursor-pointer" />
        </div>
        <Swiper
          initialSlide={currentIndex}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Image ${index + 1}`} className="h-auto w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
        <h2 className=" w-full text-center text-[#FFFFFF99]">Swipe to show more image</h2>
      </div>
    </div>
  )
}

export default ImageModal
