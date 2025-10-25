import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Tüm path'leri yakala (static dosyalar hariç)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
