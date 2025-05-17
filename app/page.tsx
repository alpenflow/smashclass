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
import { AppHeader } from "@/components/app-header";

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
      <AppHeader />
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
