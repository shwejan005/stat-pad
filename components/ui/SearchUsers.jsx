"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect, useState } from "react";

export default function SearchUsers() {
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState(query);

  // debounce input to avoid frequent querying
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(query), 300);
    return () => clearTimeout(handler);
  }, [query]);

  const results = useQuery(api.users.searchUsersByUsername, debounced ? { keyword: debounced } : "skip");

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search by username..."
        className="border border-purple-200/60 px-4 py-2 rounded-2xl min-w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {results?.length > 0 && (
        <ul className="mt-4 space-y-2">
          {results.map((user) => (
            <li key={user._id} className="border rounded p-2">
              <div className="font-semibold">@{user.username}</div>
              <img src={user.image} alt={user.username} className="h-10 rounded-full mt-1" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
