"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import EllipseLeftSVG from "/public/EllipseLeft.svg";
import { useTheme } from "next-themes";
function EllipseLeft() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
 if(!mounted) return null
  return (
    <div className=" absolute top-0 left-0 ">
      {theme === "dark" && (
        <Image
          height={100}
          width={100}
          src={EllipseLeftSVG}
          alt="EllipseRight"
          className="w-full h-full"
        />
      )}
    </div>
  );
}

export default EllipseLeft;
