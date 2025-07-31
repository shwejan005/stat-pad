import clerkAppearance from "@/lib/clerkAppearance";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header () {
  return (
    <nav className="flex justify-between items-center px-12 py-4 border-b border-white/10">
      <h1 className="text-2xl font-bold tracking-tight text-white">DevDuel</h1>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal" appearance={clerkAppearance}>
            <button className="text-sm px-5 py-2 rounded-2xl bg-purple-600 border border-purple-600 text-white transition-all duration-600 hover:bg-transparent hover:border hover:border-purple-700 hover:text-purple-300 hover:cursor-pointer">Get Started</button>
          </SignInButton>
        </SignedOut>
      </div>

    </nav>
  );
}
