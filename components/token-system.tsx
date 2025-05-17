import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TokenSystem() {
  const tokens = [
    {
      name: "ClassCoins",
      symbol: "CC",
      description: "A stablecoin used for payments across the platform. Book classes, pay for services, and more.",
      color: "from-blue-500 to-blue-600",
      icon: "/blue-cc-coin.png",
    },
    {
      name: "Participation Tokens",
      symbol: "PT",
      description:
        "Earned by attending classes, referring friends, and engaging with the platform. Redeem for discounts and perks.",
      color: "from-green-500 to-green-600",
      icon: "/green-pt-coin.png",
    },
    {
      name: "Governance Tokens",
      symbol: "FHW",
      description:
        "Participate in the fhdubDAO and vote on platform decisions, feature requests, and community initiatives.",
      color: "from-purple-500 to-purple-600",
      icon: "/purple-fhw-coin.png",
    },
  ]

  return (
    <section className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Three-Token Ecosystem</h2>
        <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
          Our blockchain-based platform uses three different tokens to create a balanced ecosystem for users, studios,
          and governance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tokens.map((token, index) => (
          <div key={index} className="bg-card rounded-lg border shadow-sm overflow-hidden">
            <div className={`bg-gradient-to-r ${token.color} h-2`} />
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={token.icon || "/placeholder.svg"}
                  alt={token.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-medium">{token.name}</h3>
                  <p className="text-sm text-muted-foreground">{token.symbol}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{token.description}</p>
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/tokens/${token.name.toLowerCase().replace(" ", "-")}`}>Learn More</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
