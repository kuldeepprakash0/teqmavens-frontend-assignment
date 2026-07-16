import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
      <div className="max-w-2xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
          Error 404
        </p>

        <h1 className="text-6xl font-extrabold md:text-8xl">404</h1>

        <h2 className="mt-6 text-3xl font-bold md:text-4xl">
          Page Not Found
        </h2>

        <p className="mt-4 text-zinc-400">
          Sorry, the page you're looking for doesn't exist or has been moved.
          You can return to the homepage or continue to the dashboard.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-red-600 px-6 py-3 font-medium transition hover:bg-red-700"
          >
            Go Home
          </Link>

          <Link
            href="/nextcar-dashboard"
            className="rounded-lg border border-zinc-700 px-6 py-3 font-medium transition hover:border-red-500 hover:text-red-500"
          >
            View Dashboard
          </Link>
        </div>

        <div className="mt-12 text-sm text-zinc-500">
          Frontend Assignment • Next.js • Tailwind CSS
        </div>
      </div>
    </main>
  );
}