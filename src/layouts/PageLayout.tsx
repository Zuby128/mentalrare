import React, { memo } from "react";

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen">
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-20 sm:py-24"></div>
      <div>{children}</div>
    </div>
  );
}

export default memo(PageLayout);
