"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
} from "../../hooks/useScrollAnimation";
import { useCountUp } from "../../hooks/useCountUp";
import { Award, Users, Lightbulb, Target } from "lucide-react";
import { useTranslations } from "next-intl";

const About: React.FC = () => {
  const { ref, controls, inView } = useScrollAnimation();
  const t = useTranslations("Counter");

  const stats = [
    { icon: Award, end: 5, label: t("countries"), suffix: "+" },
    { icon: Users, end: 100, label: t("projects"), suffix: "+" },
    { icon: Lightbulb, end: 1000, label: t("people"), suffix: "+" },
    // { icon: Target, end: 95, label: "Success Rate", suffix: "%" },
  ];

  const StatCard: React.FC<{ stat: (typeof stats)[0]; index: number }> = ({
    stat,
    index,
  }) => {
    const { count, startCounting } = useCountUp({
      end: stat.end,
      duration: 2.5,
      startOnInView: true,
    });

    React.useEffect(() => {
      if (inView) {
        setTimeout(() => startCounting(), index * 200);
      }
    }, [inView, startCounting, index]);

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{
          y: -10,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center group cursor-pointer"
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow"
        >
          <stat.icon className="w-8 h-8 text-white" />
        </motion.div>
        <motion.div className="text-4xl font-bold text-gray-900 mb-2">
          {count}
          {stat.suffix}
        </motion.div>
        <div className="text-gray-600 font-medium">{stat.label}</div>
      </motion.div>
    );
  };

  return (
    <section id="about" className="pt-4 bg-white">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.h2
              //  @ts-expect-error
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              {t("title")}
              <span className="block bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                {t("subtitle")}
              </span>
            </motion.h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
