import React, { useState } from "react";
import { motion } from "framer-motion";
import FadeInOnScroll from "./FadeInOnScroll";
import video1 from "./Videos/video.MP4";
import webinar1 from "./Img/webinar1.JPG";
import webinar2 from "./Img/webinar2.JPG";
import webinar3 from "./Img/webinar3.JPG";

function HighLights() {
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <section id="highlights" className="bg-gray-100 py-16 ">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeInOnScroll>
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-8 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Highlights From Our Previous Webinars
          </h2>
        </FadeInOnScroll>

        {/* 2x2 Grid: Video & Image 1 (top), Image 2 & Image 3 (bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 items-stretch">
          {/* Video: top left */}
          <FadeInOnScroll>
            <div className="relative group rounded-xl overflow-hidden shadow-lg">
              <video
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                controls
                autoPlay
                muted
                loop
              >
                <source src={video1} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/24 opacity-0 group-hover:opacity-100 transition duration-400 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Webinar Video Highlight</span>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Image 1: top right */}
          <FadeInOnScroll>
            <div
              className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => openModal(webinar1)}
            >
              <img
                src={webinar1}
                alt="Webinar Highlight 1"
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-400 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Highlight 1</span>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Image 2: bottom left */}
          <FadeInOnScroll>
            <div
              className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => openModal(webinar2)}
            >
              <img
                src={webinar2}
                alt="Webinar Highlight 2"
                className="w-full h-[200px] md:h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-400 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Highlight 2</span>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Image 3: bottom right */}
          <FadeInOnScroll >
            <div
              className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => openModal(webinar3)}
            >
              <img
                src={webinar3}
                alt="Webinar Highlight 3"
                className="w-full h-[200px] md:h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-400 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Highlight 3</span>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={closeModal}>
          <motion.div
            className="relative max-w-4xl w-full p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Selected Webinar Highlight" className="w-full h-auto rounded-2xl shadow-2xl" />
            <button
              className="absolute top-3 right-3 bg-white text-gray-800 rounded-full p-2 hover:bg-gray-100 transition"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default HighLights;