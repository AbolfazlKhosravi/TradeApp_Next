import { ThemeSwitcher } from "@/common/ThemeSwitcher/ThemeSwitcher";
import React from "react";

function Header() {
  return (
    <header className="w-full">
      <div className="container"><ThemeSwitcher/></div>
    </header>
  );
}

export default Header;
