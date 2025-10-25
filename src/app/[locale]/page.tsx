import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="bg-red-200">
      Main
      <h1>{t("title")}</h1>
      <h2>{t("about")}</h2>
    </div>
  );
}
