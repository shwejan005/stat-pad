'use client';

import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import { SignedIn, SignedOut, useClerk, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const [open, setOpen] = useState(false);

  const userData = useQuery(api.users.getUserByClerkId, user ? { clerkId: user.id } : 'skip');

  const avatarUrl =
    userData?.image || user?.imageUrl || 'https://api.dicebear.com/9.x/lorelei/svg?seed=Emery';
  const username = userData?.username || user?.username || 'User';

  return (
    <nav className="flex justify-between items-center px-12 py-4 border-b border-white/10">
      <Link href="/" className="text-2xl font-bold tracking-tight text-purple-600">
        StatPad
      </Link>

      <div className="relative">
        <SignedIn>
          <button onClick={() => setOpen((prev) => !prev)} className="flex items-center gap-2 hover:cursor-pointer">
            <Image
              src={avatarUrl}
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full"
              unoptimized
            />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl text-sm text-black z-50">
              <div className="px-4 py-3 border-b border-gray-200">
                <p className="font-semibold">{username}</p>
              </div>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </div>
          )}
        </SignedIn>

        <SignedOut>
          <div className="space-x-5">
            <Link
              href="/sign-in"
              className="text-sm px-6 py-2.5 rounded-2xl border border-purple-700/80 text-white transition-all duration-600 hover:bg-purple-600 hover:border-purple-600 hover:cursor-pointer"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="text-sm px-6 py-2.5 rounded-2xl bg-purple-600 border border-purple-600 text-white transition-all duration-600 hover:bg-transparent hover:border hover:border-purple-700 hover:text-purple-300 hover:cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
        </SignedOut>
      </div>
    </nav>
  );
}
