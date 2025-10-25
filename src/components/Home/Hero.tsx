"use client";
import React, { memo, useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Container from "../common/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";

const motionVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  stagger: {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  },
};

const heroSlides = [
  {
    title:
      "Bilimsel kanıtlara dayalı uygulamalarla, ruh sağlığı hizmetinizin kalitesini artırın",
    text: "Mental Health Çalışmalarına Hoş Geldiniz.",
    img: "https://demo.exptheme.com/mentis/wp-content/uploads/2017/11/Depositphotos_25723681_original-1170x780.jpg",
  },
  {
    title: "Otizm Tanı, Tedavi ve Destek Hizmetleri",
    text: "Uzmanlar için tasarlanmış modern uygulamalarla yanınızdayız.",
    img: "/home/autism-day-awareness-collage-style-with-people.jpg",
  },
];

function Hero() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      5500
    );
    return () => clearInterval(id);
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setIndex((i) => (i + 1) % heroSlides.length);

  // Parallax motion values
  const mvx = useMotionValue(0);
  const mvy = useMotionValue(0);
  const sx = useSpring(mvx, { stiffness: 80, damping: 20, mass: 0.5 });
  const sy = useSpring(mvy, { stiffness: 80, damping: 20, mass: 0.5 });

  // Parallax depth factors
  const bgX = useTransform(sx, (v: number) => v * -20);
  const bgY = useTransform(sy, (v: number) => v * -20);
  const fgX = useTransform(sx, (v: number) => v * 10);
  const fgY = useTransform(sy, (v: number) => v * 10);

  return (
    <section id="ana-sayfa" className="relative h-[68vh] sm:h-[78vh]">
      <AnimatePresence mode="wait">
        {heroSlides.map(
          (s, i) =>
            i === index && (
              <motion.div
                key={i}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <motion.img
                    style={{ x: bgX, y: bgY }}
                    src={s.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <Container className="relative h-full flex items-center">
                  <motion.div
                    key={`${i}-content`}
                    className="max-w-2xl text-white"
                    initial="hidden"
                    animate="show"
                    variants={motionVariants.stagger}
                    style={{ x: fgX, y: fgY }}
                  >
                    <motion.h1
                      variants={motionVariants.fadeUp}
                      className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight"
                    >
                      {s.title}
                    </motion.h1>
                    <motion.p
                      variants={motionVariants.fadeUp}
                      className="mt-4 text-base sm:text-lg text-white/90"
                    >
                      {s.text}
                    </motion.p>
                    <motion.div
                      variants={motionVariants.fadeUp}
                      className="mt-8 flex items-center gap-4"
                    >
                      <a
                        href="#hakkimizda"
                        className="rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold"
                      >
                        Bizi Tanıyın
                      </a>
                      <a
                        href="#hizmetler"
                        className="rounded-full border border-white/50 text-white px-6 py-3 text-sm font-semibold"
                      >
                        Kurslar
                      </a>
                    </motion.div>
                  </motion.div>
                </Container>
              </motion.div>
            )
        )}
      </AnimatePresence>
      <div className="absolute inset-x-0 bottom-6">
        <Container className="flex justify-between">
          <button
            onClick={prev}
            className="inline-flex items-center justify-center rounded-full bg-white/90 hover:bg-white w-10 h-10 shadow"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="inline-flex items-center justify-center rounded-full bg-white/90 hover:bg-white w-10 h-10 shadow"
          >
            <ChevronRight />
          </button>
        </Container>
      </div>
    </section>
  );
}

export default memo(Hero);
