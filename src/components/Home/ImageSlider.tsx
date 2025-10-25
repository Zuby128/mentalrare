"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const ImageSlider: React.FC = () => {
  const images = [
    {
      id: "1",
      image: "https://mentalrare.com/media/media/ados.jpg",
      title: "ADOS Eğitimi",
    },
    {
      id: "2",
      image: "https://mentalrare.com/media/media/ddddd.png",
      title: "Psikoloji Eğitimi",
    },
    {
      id: "3",
      image: "https://mentalrare.com/media/media/Dbt.png",
      title: "DBT Eğitimi",
    },
    {
      id: "4",
      image: "https://mentalrare.com/media/media/ados.jpg",
      title: "ADOS Eğitimi",
    },
    {
      id: "5",
      image: "https://mentalrare.com/media/media/ddddd.png",
      title: "Psikoloji Eğitimi",
    },
    {
      id: "6",
      image: "https://mentalrare.com/media/media/Dbt.png",
      title: "DBT Eğitimi",
    },
  ];

  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Create multiple copies of images for infinite looping
  const loopedImages = [...images, ...images, ...images];
  const imageWidth = 360; // Width of each image card
  const gapWidth = 32; // Gap between cards
  const totalWidth = (imageWidth + gapWidth) * images.length; // Width of one full set of images

  // Auto-scroll effect
  useEffect(() => {
    if (isDragging) return;

    const interval = setInterval(() => {
      setPosition((prev) => {
        // Move left by 1 pixel
        let newPosition = prev - 1;
        // Reset position when reaching the end of one set
        if (Math.abs(newPosition) >= totalWidth) {
          return newPosition + totalWidth; // Jump back to the start of the next set
        }
        return newPosition;
      });
    }, 16); // ~60fps for smooth animation

    return () => clearInterval(interval);
  }, [isDragging, totalWidth]);

  // Handle drag end to snap to the nearest valid position
  const handleDragEnd = (_: any, info: any) => {
    setIsDragging(false);
    setPosition((prev) => {
      let newPos = prev + info.offset.x;
      // Ensure position stays within bounds for seamless looping
      if (Math.abs(newPos) >= totalWidth) {
        newPos = newPos % totalWidth;
      }
      // Snap to nearest image
      const nearestImage =
        Math.round(newPos / (imageWidth + gapWidth)) * (imageWidth + gapWidth);
      return nearestImage;
    });
  };

  return (
    <section
      className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      aria-label="Eğitim Slider"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Kanıta Dayalı
          </span>{" "}
          Vaka Odaklı Eğitimler
        </h2>

        <div className="overflow-hidden" ref={sliderRef}>
          <motion.div
            className="flex gap-8 cursor-grab active:cursor-grabbing select-none"
            style={{
              transform: `translateX(${position}px)`,
            }}
            animate={{ x: position }}
            drag="x"
            dragConstraints={{
              left: -totalWidth * 1.5,
              right: totalWidth * 0.5,
            }}
            dragElastic={0.2}
            dragMomentum={true}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            transition={{ type: "tween", ease: "linear" }}
          >
            {loopedImages.map((item, i) => (
              <motion.div
                key={`${item.id}-${i}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] rounded-lg overflow-hidden bg-white"
                style={{
                  boxShadow:
                    "8px 8px 20px rgba(0,0,0,0.15), -2px 0 10px rgba(0,0,0,0.05)",
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                role="group"
                aria-label={item.title}
              >
                <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                  <img
                    src={item.image}
                    alt={item.title || `Eğitim Kitabı ${item.id}`}
                    className="w-full h-full object-cover pointer-events-none select-none"
                    draggable={false}
                    loading="lazy"
                  />
                  <div
                    className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/20 to-transparent"
                    style={{
                      boxShadow: "inset 2px 0 4px rgba(0,0,0,0.3)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/5 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className={`mx-auto mt-8 md:mt-12 lg:mt-16 px-8 bg-gradient-to-r from-indigo-500 to-purple-500  text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all`}
      >
        Tümünü Göster
      </motion.button>
    </section>
  );
};

export default ImageSlider;
