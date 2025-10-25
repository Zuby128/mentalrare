import React from "react";
import LocaleSwitcher from "../LocaleSwitcher";

function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <LocaleSwitcher />
    </div>
  );
}

export default Header;
