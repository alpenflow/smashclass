import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Web3Provider } from "@/components/web3-provider"
import { FarcasterProvider } from "@/components/social/farcaster-provider"
import { CoinbaseWalletProvider } from "@/components/wallet/coinbase-wallet-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SmashClass - Web3 Fitness & Wellness Marketplace",
  description: "Book fitness classes and wellness services using ClassCoins",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Web3Provider>
            <CoinbaseWalletProvider>
              <FarcasterProvider>
                <div className="flex min-h-screen flex-col">
                  <Header />
                  <main className="flex-1">{children}</main>
                  <Footer />
                </div>
              </FarcasterProvider>
            </CoinbaseWalletProvider>
          </Web3Provider>
        </ThemeProvider>
      </body>
    </html>
  )
}
