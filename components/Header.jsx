import Link from "next/link";

export default function Header () {
  return (
    <nav className="flex justify-between items-center px-12 py-4 border-b border-white/10">
      <h1 className="text-2xl font-bold tracking-tight text-white">DevDuel</h1>
      <div>
        <Link
          href="/sign-up"
          className="text-sm px-6 py-2.5 rounded-2xl bg-purple-600 border border-purple-600 text-white transition-all duration-600 hover:bg-transparent hover:border hover:border-purple-700 hover:text-purple-300"
        >
          Get Started
        </Link>
      </div>

    </nav>
  );
}
