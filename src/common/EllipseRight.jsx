"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import EllipseRightSVG from "/public/EllipseRight.svg";
import { useTheme } from "next-themes";

function EllipseRight() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);
   if(!mounted) return null
    return (
      <div className=" absolute bottom-0  right-0">
        {theme === "dark" && (
          <Image
            height={100}
            width={100}
            src={EllipseRightSVG}
            alt="EllipseRight"
            className="w-full h-full"
          />
        )}
      </div>
    );
}

export default EllipseRight