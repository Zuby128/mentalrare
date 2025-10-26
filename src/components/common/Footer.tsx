"use client";
import React, { memo } from "react";
import Container from "./Container";
import { Calendar, Instagram, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-gray-950 text-gray-300 ">
      <Container className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a
            href="#ana-sayfa"
            className="text-2xl font-extrabold tracking-tight text-white"
          >
            MENTAL & RARE WORKS
          </a>
          <p className="mt-3 text-sm text-gray-400">{t("subtitle")}</p>
          <div className="mt-4 text-sm flex justify-start items-center">
            <Phone size={16} className="mr-2" />
            <Link
              href="tel:00905444444444"
              target="_blank"
              rel="noopener noreferrer"
            >
              (+90)000 000 00 00
            </Link>
          </div>
          <div className="mt-4 text-sm flex justify-start items-center">
            <Instagram size={16} className="mr-2" />
            <Link
              href="https://instagram.com/metalrareworks"
              rel="noopener noreferrer"
            >
              @mentalrareworks
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-white">{t("quickLinks")}</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#hakkimizda" className="hover:underline">
                {t("about")}
              </a>
            </li>
            <li>
              <a href="#projeler" className="hover:underline">
                {t("courses")}
              </a>
            </li>
            <li>
              <a href="#teklif" className="hover:underline">
                {t("services")}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">{t("time")}</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-400">
            <li>{t("working")}</li>
            <li>{t("holiday")}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">{t("appointment")}</h4>
          <p className="mt-3 text-sm text-gray-400">{t("choose")}</p>
          <a
            href="#teklif"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2.5 text-sm font-semibold"
          >
            {t("makeapp")} <Calendar className="w-4 h-4" />
          </a>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-400">
        © 2025 Lorem
      </div>
    </footer>
  );
}

export default memo(Footer);
