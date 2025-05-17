'use client';

import { useEffect, useState } from 'react';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { WalletIsland } from '@coinbase/onchainkit/wallet';
import { WalletAdvancedDefault } from '@coinbase/onchainkit/wallet';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Hero from "@/components/hero"
import Features from "@/components/features"
import TokenSystem from "@/components/token-system"
import ClassesShowcase from "@/components/classes-showcase"
import StudioSection from "@/components/studio-section"
import CTA from "@/components/cta"

const navItems = [
  { name: "Classes", href: "/classes" },
  { name: "Social", href: "/social" },
  { name: "Tokens", href: "/tokens" },
  { name: "Trainers", href: "/trainers" },
  { name: "AI Trainers", href: "/ai-trainers" },
];

export default function HomePage() {
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  return (
    <div className="w-full">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="flex items-center justify-between h-16 px-4 sm:px-8 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">SmashClass</span>
          </Link>
          {/* Nav links (desktop) */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* Wallet connect button (desktop) */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
            <WalletAdvancedDefault />
              <WalletIsland />
            </div>
            {/* Burger menu button (mobile) */}
            <button
              className="md:hidden p-2 rounded text-blue-600 hover:bg-blue-50 focus:outline-none"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label="Open menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 shadow-sm z-50 fixed top-16 left-0 w-full">
            <nav className="flex flex-col gap-2 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-700 hover:text-blue-600 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4">
                <WalletAdvancedDefault />
              </div>
              <div className="mt-4">
                <WalletIsland />
              </div>
            </nav>
          </div>
        )}
      </header>
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to SmashClass
        </h1>
        {context?.user?.fid && (
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Welcome, Farcaster user #{context.user.fid}!
          </p>
        )}
        {/* Mobile wallet advanced default below welcome text */}
        <div className="mt-6 md:hidden flex justify-center">
          <WalletAdvancedDefault />
        </div>
        {/* Mobile wallet connect button below welcome text */}
        <div className="mt-4 md:hidden flex justify-center">
          <WalletIsland />
        </div>
      </div>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
        <Hero />
        <Features />
        <TokenSystem />
        <ClassesShowcase />
        <StudioSection />
        <CTA />
      </div>
    </div>
  );
}
