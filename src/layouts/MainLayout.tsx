import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import React from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="mx-auto container">{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
