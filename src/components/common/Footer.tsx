"use client";
import React, { memo } from "react";
import Container from "./Container";
import { Calendar } from "lucide-react";

function Footer() {
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
          <p className="mt-3 text-sm text-gray-400">
            Otizm tanı, tedavi ve eğitimlerinde güvenilir ortağınız.
          </p>
          <div className="mt-4 text-sm">Tel: (+90)000 000 00 00</div>
        </div>
        <div>
          <h4 className="font-semibold text-white">Faydalı Linkler</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#hakkimizda" className="hover:underline">
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="#projeler" className="hover:underline">
                Projeler
              </a>
            </li>
            <li>
              <a href="#teklif" className="hover:underline">
                Teklif Al
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Referanslar
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Çalışma Saatleri</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-400">
            <li>Yaz (May–Kas): Pts–Cts 09:00–18:00</li>
            <li>Kış (Ara–Nis): Pts–Cts 09:00–17:00</li>
            <li>Pazar: Kapalı</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Randevu</h4>
          <p className="mt-3 text-sm text-gray-400">
            Takvimde size uygun bir zaman seçin, arayalım.
          </p>
          <a
            href="#teklif"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2.5 text-sm font-semibold"
          >
            Randevu Oluştur <Calendar className="w-4 h-4" />
          </a>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-400">
        © 2025 Lorem. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

export default memo(Footer);
