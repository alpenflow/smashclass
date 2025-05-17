import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Coins, Award, Shield } from "lucide-react"
import { AppHeader } from "@/components/app-header"

export default function TokensPage() {
  const tokens = [
    {
      name: "ClassCoins",
      symbol: "CC",
      description:
        "A $1 value token exchanged with USDC (1 USDC = 1 ClassCoin) through the website. Book classes, pay for services, and more.",
      color: "from-blue-500 to-blue-600",
      icon: <Coins className="h-8 w-8 text-blue-500" />,
      features: [
        "Exchanged 1:1 with USDC ($1 value)",
        "Used for booking classes and services",
        "Can be purchased with USDC directly on the platform",
        "No transaction fees within the platform",
        "Redeemable back to USDC anytime",
      ],
      cta: "Buy ClassCoins",
    },
    {
      name: "Participation Tokens",
      symbol: "PT",
      description:
        "Earned by attending classes, referring friends, and engaging with the platform. Redeem for discounts and perks.",
      color: "from-green-500 to-green-600",
      icon: <Award className="h-8 w-8 text-green-500" />,
      features: [
        "Earned through platform participation",
        "Redeem for discounts on classes",
        "Unlock exclusive content and features",
        "Earn bonus tokens for referrals",
        "Non-transferable utility token",
      ],
      cta: "View Earning Opportunities",
    },
    {
      name: "Governance Tokens",
      symbol: "FHW",
      description:
        "Participate in the fhwDAO and vote on platform decisions, feature requests, and community initiatives.",
      color: "from-purple-500 to-purple-600",
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      features: [
        "Vote on platform governance decisions",
        "Propose new features and initiatives",
        "Earn a share of platform revenue",
        "Limited supply with deflationary mechanism",
        "Tradable on decentralized exchanges",
      ],
      cta: "Join the DAO",
    },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <AppHeader />
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left">SmashClass Token Ecosystem</h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto text-center md:text-left">
          Our three-token system creates a balanced ecosystem for users, studios, and governance.
        </p>
      </div>

      <Tabs defaultValue="overview" className="mb-12">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tokenomics">Tokenomics</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tokens.map((token, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${token.color}`} />
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {token.icon}
                    <div>
                      <CardTitle>{token.name}</CardTitle>
                      <CardDescription>{token.symbol}</CardDescription>
                    </div>
                  </div>
                  <CardDescription>{token.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-3">Key Features</h4>
                  <ul className="space-y-2 text-sm">
                    {token.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/tokens/${token.name.toLowerCase().replace(" ", "-")}`}>{token.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tokenomics" className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Token Distribution</CardTitle>
                <CardDescription>How our tokens are distributed across different stakeholders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square relative">
                  <Image
                    src="/token-distribution-pie-chart.png"
                    alt="Token distribution chart"
                    fill
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Token Economics</CardTitle>
                <CardDescription>Key metrics and information about our token ecosystem</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">ClassCoins (CC)</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Supply Model</p>
                      <p className="font-medium">Elastic</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Pegged Value</p>
                      <p className="font-medium">1 CC = $1 USD</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Circulating Supply</p>
                      <p className="font-medium">1,250,000 CC</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Backed By</p>
                      <p className="font-medium">USD Reserves</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Participation Tokens (PT)</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Supply Model</p>
                      <p className="font-medium">Inflationary</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Utility</p>
                      <p className="font-medium">Platform Benefits</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Earning Rate</p>
                      <p className="font-medium">~5 PT per class</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Transferable</p>
                      <p className="font-medium">No</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Governance Tokens (FHW)</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Supply Model</p>
                      <p className="font-medium">Deflationary</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Max Supply</p>
                      <p className="font-medium">10,000,000 FHW</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Governance Rights</p>
                      <p className="font-medium">1 FHW = 1 Vote</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Transferable</p>
                      <p className="font-medium">Yes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="faq" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Common questions about our token ecosystem</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">How do I purchase ClassCoins?</h3>
                <p className="text-muted-foreground">
                  ClassCoins can be purchased directly through the SmashClass platform using credit/debit cards, bank
                  transfers, or by exchanging other cryptocurrencies. We support multiple payment methods to make it
                  easy for everyone to participate.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">How do I earn Participation Tokens?</h3>
                <p className="text-muted-foreground">
                  Participation Tokens are earned by attending classes, referring friends to the platform, completing
                  your profile, writing reviews, and participating in community challenges. The more you engage with the
                  platform, the more tokens you earn.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">What can I do with Governance Tokens?</h3>
                <p className="text-muted-foreground">
                  Governance Tokens (FHW) give you voting rights in the fhdubDAO, allowing you to participate in
                  platform decisions. You can vote on new features, token economics, community initiatives, and more.
                  FHW holders also receive a share of platform revenue.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Are these tokens available on exchanges?</h3>
                <p className="text-muted-foreground">
                  ClassCoins and Participation Tokens are utility tokens used within our platform and are not listed on
                  exchanges. Governance Tokens (FHW) are tradable on select decentralized exchanges, allowing for
                  market-based price discovery.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">How is the value of ClassCoins maintained?</h3>
                <p className="text-muted-foreground">
                  ClassCoins are fully backed by USD reserves held in regulated financial institutions. We maintain a
                  1:1 peg to the US dollar through a combination of collateralization and algorithmic stabilization
                  mechanisms.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to join the Web3 fitness revolution?</h2>
        <p className="text-lg text-muted-foreground max-w-[600px] mx-auto mb-6">
          Create an account to start earning and using tokens on the SmashClass platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/signup">Create Account</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/tokens/buy">Buy Tokens</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
