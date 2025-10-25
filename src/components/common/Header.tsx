"use client";
import React, { memo, useState } from "react";
import LocaleSwitcher from "../LocaleSwitcher";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

const nav = [
  { label: "Ana Sayfa", href: "#ana-sayfa" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Hizmetler", href: "#hizmetler", hasDropdown: true },
  { label: "Takımımız", href: "#projeler" },
  { label: "İletişim", href: "#iletisim" },
];

const services = [
  { label: "Training", href: "#hizmetler/training" },
  { label: "Publishing", href: "#hizmetler/publishing" },
  { label: "Counseling", href: "#hizmetler/counseling" },
  {
    label: "Validation & Translation",
    href: "#hizmetler/validation-translation",
  },
  {
    label: "International Collaboration",
    href: "#hizmetler/international-collaboration",
  },
];

function Header() {
  const t = useTranslations("HomePage");
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-50 backdrop-blur border-b border-gray-100">
      <Container className="flex items-center justify-between py-4">
        <Image
          src="/logo/mentalrare_logo.png"
          width={100}
          height={70}
          alt="metra logo"
        ></Image>

        <div className="flex md:hidden">
          <LocaleSwitcher />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-md border px-2.5 py-2"
        >
          <span className="sr-only">Menüyü aç</span>☰
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) =>
            n.hasDropdown ? (
              <div
                key={n.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={n.href}
                  className="text-sm font-medium text-gray-900 hover:text-indigo-500 transition flex items-center gap-1"
                >
                  {n.label}
                  <ChevronDown className="w-4 h-4" />
                </Link>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-gray-900 hover:text-indigo-500 transition"
              >
                {n.label}
              </Link>
            )
          )}
          <Link
            href={`https://wa.me/+905532660171`}
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-gray-100 px-4 py-2 text-sm font-semibold"
          >
            İletişime Geç <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>

        <div className="hidden md:flex">
          <LocaleSwitcher />
        </div>
      </Container>

      {/* Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden border-t border-gray-100"
          >
            <Container className="py-4 flex flex-col gap-3">
              {nav.map((n) =>
                n.hasDropdown ? (
                  <div key={n.href} className="flex flex-col gap-2">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="text-sm font-medium text-gray-700 flex items-center justify-between"
                    >
                      {n.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-4 flex flex-col gap-2 overflow-hidden"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => {
                                setOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="text-sm text-gray-600 hover:text-indigo-600"
                            >
                              {service.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-gray-700"
                  >
                    {n.label}
                  </Link>
                )
              )}
              <a
                href="#teklif"
                onClick={() => setOpen(false)}
                className="inline-flex w-max items-center gap-2 rounded-full bg-indigo-500 text-white px-4 py-2 text-sm font-semibold"
              >
                İletişime Geç <ArrowRight className="w-4 h-4" />
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default memo(Header);
