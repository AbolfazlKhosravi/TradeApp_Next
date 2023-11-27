// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import Loading from "../Loading";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setTheme(systemTheme);
    if (systemTheme === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [systemTheme, setTheme]);

  useEffect(() => {
    if (theme === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [theme]);

  return (
    <div className="w-10 h-10 flex-row-center-center rounded-lg bg-default-100">
      {!mounted ? (
        <span className="text-primary-500">
          <Loading width="30" heigh="30" color="text-primary-500" />
        </span>
      ) : (
        <button
          className="w-full h-full flex-row-center-center text-default-800"
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {!isDark ? <MoonIcon /> : <SunIcon />}
        </button>
      )}
    </div>
  );
}
