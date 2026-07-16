import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-black transition-colors duration-300 dark:bg-zinc-950 dark:text-white">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-1 items-center justify-center px-6 py-20">
        <div className="max-w-3xl text-center">
          <p className="mb-4 font-semibold uppercase tracking-widest text-red-500">
            Frontend Developer Assignment
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Pixel Perfect Dashboard
            <span className="text-red-500"> using Next.js</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-zinc-400">
            This project recreates the provided Figma design using Next.js,
            Tailwind CSS, and TypeScript with responsive layouts, reusable
            components, and Light/Dark theme support.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "Next.js",
              "Tailwind CSS",
              "Responsive",
              "Dark Mode",
              "TypeScript",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm transition-colors duration-300 dark:border-zinc-700 dark:bg-zinc-900"
              >
                {item}
              </span>
            ))}
          </div>

          <Link
            href="/nextcar-dashboard"
            className="mt-10 inline-flex rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-red-700"
          >
            View Dashboard →
          </Link>
        </div>
      </section>

      {/* Assignment Overview */}
      <section className="border-y border-gray-200 bg-gray-100 py-16 transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="mb-10 text-center text-3xl font-bold">
            Assignment Overview
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Pixel-perfect Figma implementation",
              "Responsive across all devices",
              "Light & Dark Theme Support",
              "Reusable Component Architecture",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-zinc-700 dark:bg-zinc-950"
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}