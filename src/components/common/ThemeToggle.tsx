"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center rounded-full bg-zinc-800 p-1 shadow-lg">
      {/* Light */}
      <button
        onClick={() => setTheme("light")}
        className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
          theme === "light"
            ? "bg-zinc-700 text-white shadow-md"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        <Sun size={18} />
      </button>

      {/* Dark */}
      <button
        onClick={() => setTheme("dark")}
        className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
          theme === "dark"
            ? "bg-zinc-700 text-white shadow-md"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        <Moon size={18} />
      </button>
    </div>
  );
}