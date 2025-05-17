"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { WalletIsland, WalletAdvancedDefault } from "@coinbase/onchainkit/wallet";

const navItems = [
  { name: "Classes", href: "/classes" },
  { name: "Social", href: "/social" },
  { name: "Tokens", href: "/tokens" },
  { name: "Trainers", href: "/trainers" },
  { name: "AI Trainers", href: "/ai-trainers" },
];

export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
  );
} 