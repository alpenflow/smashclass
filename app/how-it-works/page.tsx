import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Coins, Award, Shield, Calendar, Users, Wallet } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">How SmashClass Works</h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Learn how our Web3 fitness and wellness platform connects users with studios while leveraging blockchain
          technology.
        </p>
      </div>

      <Tabs defaultValue="users" className="mb-12">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
          <TabsTrigger value="users">For Users</TabsTrigger>
          <TabsTrigger value="studios">For Studios</TabsTrigger>
          <TabsTrigger value="tokens">Token System</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Find and Book Classes</h2>
              <p className="text-lg text-muted-foreground mb-8">
                SmashClass makes it easy to discover and book fitness, health, and wellness classes in your area, all
                while earning rewards.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Wallet className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Connect Your Wallet</h3>
                    <p className="text-muted-foreground">
                      Link your Web3 wallet to access the SmashClass platform and manage your tokens.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Coins className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Get ClassCoins</h3>
                    <p className="text-muted-foreground">
                      Purchase ClassCoins, 1 ClassCoin = 1 USDC, to pay for classes and services on our platform.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Book Classes</h3>
                    <p className="text-muted-foreground">
                      Browse and book available spaces in classes near you using ClassCoins.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Earn Rewards</h3>
                    <p className="text-muted-foreground">
                      Earn Participation Tokens for attending classes and engaging with the platform.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Join the DAO</h3>
                    <p className="text-muted-foreground">
                      Acquire Governance Tokens to participate in platform decisions through the fhdubDAO.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/classes">Browse Classes</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder-iz97r.png"
                alt="Booking a class"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl p-4 border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">+5 PT Earned</p>
                    <p className="text-xs text-muted-foreground">For attending class</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="studios" className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="/fitness-studio-owner-tablet.png"
                alt="Studio management"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />

              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl p-4 border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Coins className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">+150 CC Received</p>
                    <p className="text-xs text-muted-foreground">From class bookings</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight mb-6">List Your Studio</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join the SmashClass network to fill empty spaces in your classes and increase revenue while reaching new
                clients.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Wallet className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Create a Studio Account</h3>
                    <p className="text-muted-foreground">
                      Sign up and connect your Web3 wallet to receive payments in ClassCoins.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">List Your Classes</h3>
                    <p className="text-muted-foreground">
                      Add your class schedule and specify available spaces for SmashClass users.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Welcome New Clients</h3>
                    <p className="text-muted-foreground">
                      SmashClass users book your empty spaces, helping you maximize class occupancy.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Coins className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Receive Payments</h3>
                    <p className="text-muted-foreground">
                      Get paid in ClassCoins, which can be converted to fiat currency or used within the ecosystem.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Participate in Governance</h3>
                    <p className="text-muted-foreground">
                      Earn and use Governance Tokens to have a say in platform decisions through the fhdubDAO.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/list-studio">List Your Studio</Link>
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tokens" className="mt-8">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Three-Token Ecosystem</h2>
              <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
                SmashClass uses a balanced three-token system to create a sustainable ecosystem for users, studios, and
                governance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Coins className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle>ClassCoins (CC)</CardTitle>
                      <CardDescription>Stablecoin</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    ClassCoins are stablecoins pegged to the US dollar (1 CC = $1) used for all payments on the
                    platform.
                  </p>

                  <div>
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                        <span>Stable value for predictable pricing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                        <span>Used to book classes and services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                        <span>Convertible to fiat currency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                        <span>Fully backed by USD reserves</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/tokens/classcoins">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle>Participation Tokens (PT)</CardTitle>
                      <CardDescription>Reward Token</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Participation Tokens are earned by users for attending classes and engaging with the platform.</p>

                  <div>
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                        <span>Earned through platform activity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                        <span>Redeem for discounts and perks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                        <span>Non-transferable utility token</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                        <span>Encourages consistent participation</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/tokens/participation">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle>Governance Tokens (FHW)</CardTitle>
                      <CardDescription>DAO Token</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>FHW tokens give holders voting rights in the fhwDAO to participate in platform governance.</p>

                  <div>
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                        <span>Voting rights in the fhwDAO</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                        <span>Share of platform revenue</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                        <span>Limited supply (10M tokens)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                        <span>Tradable on exchanges</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/tokens/governance">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Token Flow in the Ecosystem</h3>
                  <p className="text-muted-foreground mb-6">
                    Our token system creates a circular economy that benefits all participants in the SmashClass
                    ecosystem.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Users purchase ClassCoins</p>
                        <p className="text-sm text-muted-foreground">To book classes and services on the platform</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Studios receive ClassCoins</p>
                        <p className="text-sm text-muted-foreground">As payment for their services</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Users earn Participation Tokens</p>
                        <p className="text-sm text-muted-foreground">For attending classes and platform engagement</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Active users and studios acquire FHW</p>
                        <p className="text-sm text-muted-foreground">
                          To participate in governance and earn revenue share
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Image
                    src="/token-ecosystem-flow.png"
                    alt="Token ecosystem flow"
                    width={400}
                    height={400}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-muted-foreground max-w-[600px] mx-auto mb-8">
          Join SmashClass today to start booking classes, earning rewards, and participating in the Web3 fitness
          revolution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/signup">Create Account</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/classes">Browse Classes</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
