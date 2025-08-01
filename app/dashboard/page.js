'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const styles = [
  'adventurer', 'adventurer-neutral', 'avataaars', 'avataaars-neutral', 'big-ears',
  'big-ears-neutral', 'big-smile', 'bottts', 'bottts-neutral', 'croodles',
  'croodles-neutral', 'fun-emoji', 'icons', 'identicon', 'initials', 'lorelei',
  'lorelei-neutral', 'micah', 'miniavs', 'notionists', 'notionists-neutral',
  'open-peeps', 'personas', 'pixel-art', 'pixel-art-neutral', 'rings', 'shapes',
  'thumbs', 'user',
];

const names = [
  'Aiden', 'Nova', 'Pixel', 'Shadow', 'Zara', 'Blaze', 'Echo', 'Luna',
  'Atlas', 'Sky', 'Phoenix', 'Ash', 'Kai', 'Rex', 'Nexus'
];

function Avatar() {
  const [seed, setSeed] = useState('Aiden');
  const [style, setStyle] = useState('adventurer');
  const [loading, setLoading] = useState(true);

  const avatarUrl = `https://api.dicebear.com/9.x/${style}/svg?seed=${seed}`;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 text-white">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="w-12 h-12 border-4 border-purple-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Top Grid: Style + Name */}
          <div className="grid grid-cols-7">
            {/* Styles Grid */}
            <div className="col-span-2 grid grid-cols-5 gap-4">
              {styles.map((s) => (
                <button
                  key={s}
                  onClick={() => setStyle(s)}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-all duration-200 ${style === s ? 'border-purple-600 bg-zinc-800' : 'border-zinc-700 bg-zinc-900 hover:border-purple-500'}`}
                >
                  <Image
                    src={`https://api.dicebear.com/9.x/${s}/svg?seed=${seed}`}
                    alt={s}
                    width={60}
                    height={60}
                    unoptimized
                    className="rounded-md"
                  />
                  <span className="text-xs mt-2 text-center">
                    {s.replace(/-/g, ' ')}
                  </span>
                </button>
              ))}
            </div>

            {/* Avatar Preview */}
            <div className="col-span-3 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-4">
                <Image
                  src={avatarUrl}
                  alt="Avatar Preview"
                  width={300}
                  height={300}
                  className="rounded-full border border-purple-700 shadow-md"
                  unoptimized
                />
              </div>
            </div>

            {/* Name List */}
            <div className="col-span-2 grid grid-cols-1 justify-center gap-2 pt-4">
              {names.map((n) => (
                <button
                  key={n}
                  onClick={() => setSeed(n)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${seed === n ? 'bg-purple-700 text-white' : 'bg-zinc-800 hover:bg-purple-800'}`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          {/* Set Button */}
          <div className="flex justify-center pt-4">
            <button
              className="px-6 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-lg shadow-md"
            >
              Set Avatar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Avatar;