"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PartnersSlider: React.FC = () => {
  const partners = [
    {
      id: "1",
      name: "WPS Publish",
      logo: "https://ecom-cdn.wpspublish.com/prod/media/logo/stores/1/wps_Standard_Logo_RGB.jpg.webp",
    },
    {
      id: "2",
      name: "Parents Plus",
      logo: "https://www.parentsplus.ie/wp/wp-content/uploads/2025/08/logo11.png",
    },
  ];

  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  // Sonsuz döngü için çok sayıda kopya
  const loopedPartners = [...partners, ...partners, ...partners, ...partners];
  const cardWidth = 220;
  const gapWidth = 24;
  const totalWidth = (cardWidth + gapWidth) * partners.length;

  // Otomatik sonsuz kaydırma
  useEffect(() => {
    if (isDragging) return;

    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev - 0.8;
        if (Math.abs(newPosition) >= totalWidth) {
          return 0;
        }
        return newPosition;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [isDragging, totalWidth]);

  return (
    <section className="pt-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Güvenilir{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Çözüm Ortaklarımız
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Birlikte çalıştığımız değerli kurumlar
          </p>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 cursor-grab active:cursor-grabbing items-center"
            style={{
              x: position + dragOffset,
            }}
          >
            {loopedPartners.map((partner, i) => (
              <motion.div
                key={`${partner.id}-${i}`}
                className="flex-shrink-0 w-[200px] h-[120px] bg-white rounded-xl border-2 border-gray-100 p-6 flex items-center justify-center transition-all"
                whileHover={{
                  scale: 1.05,
                  borderColor: "#818CF8",
                  boxShadow: "0 10px 30px rgba(99, 102, 241, 0.15)",
                  transition: { duration: 0.2 },
                }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain pointer-events-none select-none grayscale hover:grayscale-0 transition-all duration-300"
                  draggable={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSlider;
