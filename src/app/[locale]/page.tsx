"use client";
import Hero from "@/components/Home/Hero";
import { useTranslations } from "next-intl";
import { memo } from "react";

function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="w-full min-h-screen">
      <Hero />
      Main
      <h1>{t("title")}</h1>
      <h2>{t("about")}</h2>
    </div>
  );
}

export default memo(Home);
