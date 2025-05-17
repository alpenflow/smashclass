import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                SmashClass
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The Web3 marketplace for fitness, health, and wellness services.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/classes" className="hover:underline">
                  Find Classes
                </Link>
              </li>
              <li>
                <Link href="/studios" className="hover:underline">
                  Studios
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:underline">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:underline">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Web3</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tokens" className="hover:underline">
                  ClassCoins
                </Link>
              </li>
              <li>
                <Link href="/tokens/participation" className="hover:underline">
                  Participation Tokens
                </Link>
              </li>
              <li>
                <Link href="/tokens/governance" className="hover:underline">
                  Governance Tokens
                </Link>
              </li>
              <li>
                <Link href="/dao" className="hover:underline">
                  fhdubDAO
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Stay Updated</h3>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Subscribe to our newsletter for the latest updates.</p>
              <div className="flex gap-2">
                <Input placeholder="Your email" type="email" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SmashClass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
