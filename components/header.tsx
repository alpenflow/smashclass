"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ConnectWallet } from "@/components/connect-wallet"
import { Menu, X, Users, Wallet } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Classes", href: "/classes" },
    { name: "Social", href: "/social" },
    { name: "Tokens", href: "/tokens" },
    { name: "Trainers", href: "/trainers" },
    { name: "AI Trainers", href: "/ai-trainers" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">SmashClass</span>
          </Link>

          {!isMobile && (
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
          )}
        </div>

        <div className="flex items-center gap-3">
          {!isMobile ? (
            <>
              <Link href="/wallet">
                <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  <Wallet className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/social">
                <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  <Users className="h-5 w-5" />
                </Button>
              </Link>
              <ConnectWallet />
            </>
          ) : (
            <>
              <ConnectWallet />
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-blue-600">
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="container py-4 pb-6 bg-white">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex gap-4 mt-2">
              <Link href="/wallet" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" size="icon" className="text-blue-600">
                  <Wallet className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/social" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" size="icon" className="text-blue-600">
                  <Users className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
