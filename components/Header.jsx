import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header () {
  return (
    <nav className="flex justify-between items-center px-12 py-4 border-b border-white/10">
      <h1 className="text-2xl font-bold tracking-tight text-white">StatPad</h1>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <div className="space-x-5">
            <Link href='/sign-in' className="text-sm px-6 py-2.5 rounded-2xl border border-purple-700/80 text-white transition-all duration-600 hover:bg-purple-600 hover:border-purple-600 hover:cursor-pointer">
              Sign In
            </Link>
            <Link href='/sign-up' className="text-sm px-6 py-2.5 rounded-2xl bg-purple-600 border border-purple-600 text-white transition-all duration-600 hover:bg-transparent hover:border hover:border-purple-700 hover:text-purple-300 hover:cursor-pointer">
              Sign Up
            </Link>
          </div>
        </SignedOut>

      </div>
    </nav>
  );
}
