'use client';

import { useEffect } from 'react';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownLink,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from '@coinbase/onchainkit/identity';
import Hero from "@/components/hero"
import Features from "@/components/features"
import TokenSystem from "@/components/token-system"
import ClassesShowcase from "@/components/classes-showcase"
import StudioSection from "@/components/studio-section"
import CTA from "@/components/cta"

export default function HomePage() {
  const { setFrameReady, isFrameReady, context } = useMiniKit();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  return (
    <div className="w-full">
      <div className="fixed top-4 right-4 z-50">
        <Wallet>
          <ConnectWallet>
            <Avatar className='h-6 w-6' />
            <Name />
          </ConnectWallet>
          <WalletDropdown>
            <Identity className='px-4 pt-3 pb-2' hasCopyAddressOnClick>
              <Avatar />
              <Name />
              <Address />
              <EthBalance />
            </Identity>
            <WalletDropdownLink
              icon='wallet'
              href='https://keys.coinbase.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Wallet
            </WalletDropdownLink>
            <WalletDropdownDisconnect />
          </WalletDropdown>
        </Wallet>
      </div>
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to SmashClass
        </h1>
        {context?.user?.fid && (
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Welcome, Farcaster user #{context.user.fid}!
          </p>
        )}
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
