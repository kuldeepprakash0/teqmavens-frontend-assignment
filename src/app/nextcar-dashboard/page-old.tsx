import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NextCarDashboard() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-black transition-colors duration-300 dark:bg-zinc-950 dark:text-white">
      <Header />

      <section className="flex flex-1 items-center justify-center px-6 py-20">
        <div className="rounded-2xl border border-gray-200 bg-white p-10 shadow-lg transition-colors duration-300 dark:border-zinc-700 dark:bg-zinc-900">
          <h2 className="text-center text-4xl font-bold">
            Dashboard Content
          </h2>

          <p className="mt-4 text-center text-gray-600 dark:text-zinc-400">
            This page will contain the Figma dashboard implementation.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}