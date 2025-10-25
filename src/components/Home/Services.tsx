"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
} from "../../hooks/useScrollAnimation";
import {
  BookOpenText,
  PenLine,
  Globe,
  Languages,
  HeartHandshake,
  Brain,
} from "lucide-react";

const Services: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  const services = [
    {
      icon: BookOpenText,
      title: "Eğitimler",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: ["lorem 1", "lorem 2", "lorem 3"],
      color: "from-pink-500 to-rose-500",
      delay: 0,
    },
    {
      icon: PenLine,
      title: "Yayınlar",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: ["lorem 1", "lorem 2", "lorem 3"],
      color: "from-blue-500 to-cyan-500",
      delay: 0.1,
    },
    {
      icon: Globe,
      title: "Danışmanlık",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: ["lorem 1", "lorem 2", "lorem 3"],
      color: "from-green-500 to-emerald-500",
      delay: 0.2,
    },
    {
      icon: Languages,
      title: "Doğrulama & Tercüme",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: ["lorem 1", "lorem 2", "lorem 3"],
      color: "from-purple-500 to-violet-500",
      delay: 0.3,
    },
    {
      icon: HeartHandshake,
      title: "Uluslararası İşbirliği",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: ["lorem 1", "lorem 2", "lorem 3"],
      color: "from-orange-500 to-amber-500",
      delay: 0.4,
    },
    {
      icon: Brain,
      title: "Profesyonel Eğitmenler",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: ["lorem 1", "lorem 2", "lorem 3"],
      color: "from-red-500 to-pink-500",
      delay: 0.5,
    },
  ];

  const ServiceCard: React.FC<{
    service: (typeof services)[0];
    index: number;
  }> = ({ service, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: service.delay }}
        whileHover={{
          y: -10,
          rotateX: 5,
          rotateY: 5,
          scale: 1.02,
        }}
        className="group relative bg-white rounded-3xl p-8 pb-0 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
        />

        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}
        >
          <service.icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
          {service.description}
        </p>
      </motion.div>
    );
  };

  return (
    <section
      id="services"
      className="pt-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.h2
              // @ts-expect-error
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Mevcut
              <span className="block bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Hizmetlerimiz
              </span>
            </motion.h2>
          </div>
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
