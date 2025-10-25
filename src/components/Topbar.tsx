import Link from "next/link";
import Container from "./common/Container";
import { Clock, Phone, Smartphone } from "lucide-react";
import { memo } from "react";

function Topbar() {
  return (
    <div className="bg-indigo-500 text-gray-100 text-base">
      <Container className="flex items-center justify-between py-2">
        <Link href="tel:+9025826623830" className="flex items-center gap-2">
          <Phone className="w-4 h-4" /> <span>0258 266 23 83</span>
        </Link>
        <Link href="tel:+905532660171" className="flex items-center gap-2">
          <Smartphone className="w-4 h-4" /> <span>0553 266 01 71</span>
        </Link>
        <div className="items-center gap-2 hidden md:flex">
          <Clock className="w-4 h-4" /> <span>Pts-Cts: 09:00 - 17:00</span>
        </div>
      </Container>
    </div>
  );
}

export default memo(Topbar);
