import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logo.png";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 text-gray-900 backdrop-blur-md transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-white max-w-[1894px] mx-auto w-full">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            className="bg-zinc-950/80"
            src={logo}
            alt="Frontend Assignment Logo"
            width={130}
            height={59}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-red-500"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="transition-colors duration-300 hover:text-red-500"
          >
            About
          </Link>

          <Link
            href="/nextcar-dashboard"
            className="rounded-lg bg-red-600 px-5 py-2 text-white transition-all duration-300 hover:bg-red-700"
          >
            Dashboard
          </Link>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}