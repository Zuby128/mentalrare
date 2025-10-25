"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { CalendarDays, User, Users, ArrowRight } from "lucide-react";

const Courses: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const courses = [
    {
      title: "3DI",
      trainer: "İbrahim Selçuk ESİN",
      startDate: "22-08-2025",
      endDate: "23-08-2025",
      color: "from-indigo-500 to-purple-500",
      image: "https://mentalrare.com/media/media/wwww_CAZGjTl.jpg",
    },
    {
      title: "ADOS2",
      trainer: "Onur Burak DURSUN",
      startDate: "22-08-2025",
      endDate: "23-08-2025",
      color: "from-pink-500 to-rose-500",
      image: "https://mentalrare.com/media/media/wwww_CAZGjTl.jpg",
    },
    {
      title: "EMDR Training",
      trainer: ["Mehmet KARADAĞ", "Serkan ÖZGÜN"],
      startDate: "22-08-2025",
      endDate: "23-08-2025",
      color: "from-emerald-500 to-teal-500",
      image: "https://mentalrare.com/media/media/wwww_CAZGjTl.jpg",
    },
    {
      title: "Temel İstatistik ve Araştırma Becerileri Eğitimi",
      trainer: "Ali Evren TUFAN",
      startDate: "22-08-2025",
      endDate: "23-08-2025",
      color: "from-blue-500 to-cyan-500",
      image: "https://mentalrare.com/media/media/wwww_CAZGjTl.jpg",
    },
  ];

  // sonsuz görünüm için diziyi 2 kere çoğalt
  const loopedCourses = [...courses, ...courses];

  return (
    <section
      id="courses"
      className="container mx-auto py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Güncel{" "}
            <span className="block bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Eğitimlerimiz
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Uzman eğitmenler eşliğinde düzenlenen profesyonel eğitim
            programları.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <motion.div
            ref={carouselRef}
            className="flex cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{
              left: -((loopedCourses.length / 2) * 330),
              right: 0,
            }}
            whileTap={{ cursor: "grabbing" }}
          >
            {loopedCourses.map((course, i) => (
              <motion.div
                key={i}
                className="
                  flex-shrink-0 
                  w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%]
                  mr-6 rounded-3xl overflow-hidden bg-white shadow-md border border-gray-100
                "
                whileHover={{ scale: 1.03 }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={
                      course.image ||
                      "https://mentalrare.com/media/media/wwww_CAZGjTl.jpg"
                    }
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-30`}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between h-[270px]">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {course.title}
                    </h3>

                    {/* Trainer */}
                    <div className="flex items-center text-gray-600 mb-3 text-sm">
                      {Array.isArray(course.trainer) ? (
                        <>
                          <Users className="w-4 h-4 mr-2 text-gray-500" />
                          <span>{course.trainer.join(", ")}</span>
                        </>
                      ) : (
                        <>
                          <User className="w-4 h-4 mr-2 text-gray-500" />
                          <span>{course.trainer}</span>
                        </>
                      )}
                    </div>

                    {/* Dates */}
                    <div className="flex items-center text-gray-500 text-xs mb-6">
                      <CalendarDays className="w-4 h-4 mr-2" />
                      <span>
                        {course.startDate} – {course.endDate}
                      </span>
                    </div>
                  </div>

                  {/* Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${course.color} text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all`}
                  >
                    Kayıt Ol <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`mx-auto mt-8 md:mt-12 lg:mt-16 px-8 bg-gradient-to-r from-indigo-500 to-purple-500  text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all`}
          >
            Tüm Kursları Göster
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
