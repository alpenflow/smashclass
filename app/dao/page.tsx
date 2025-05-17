import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, ThumbsUp, ThumbsDown } from "lucide-react"

export default function DAOPage() {
  // Mock data for proposals
  const activeProposals = [
    {
      id: 1,
      title: "Add Nutrition Coaching Services",
      description: "Expand platform offerings to include nutrition coaching services from certified professionals.",
      proposer: "0x1a2b...3c4d",
      status: "active",
      votesFor: 65,
      votesAgainst: 15,
      endTime: "2 days left",
      category: "Platform",
    },
    {
      id: 2,
      title: "Increase Rewards for Consecutive Class Attendance",
      description: "Implement a streak bonus for users who attend classes multiple days in a row.",
      proposer: "0x5e6f...7g8h",
      status: "active",
      votesFor: 82,
      votesAgainst: 8,
      endTime: "4 days left",
      category: "Rewards",
    },
    {
      id: 3,
      title: "Add Support for Mental Health Services",
      description: "Expand the platform to include mental health professionals and services.",
      proposer: "0x9i0j...1k2l",
      status: "active",
      votesFor: 45,
      votesAgainst: 35,
      endTime: "1 day left",
      category: "Platform",
    },
  ]

  const pastProposals = [
    {
      id: 4,
      title: "Implement Multi-Class Discounts",
      description: "Offer discounts when users book multiple classes at once.",
      proposer: "0x3m4n...5o6p",
      status: "passed",
      votesFor: 92,
      votesAgainst: 12,
      category: "Pricing",
    },
    {
      id: 5,
      title: "Add Virtual Classes Integration",
      description: "Integrate with video platforms to offer virtual classes through SmashClass.",
      proposer: "0x7q8r...9s0t",
      status: "passed",
      votesFor: 78,
      votesAgainst: 22,
      category: "Platform",
    },
    {
      id: 6,
      title: "Reduce Governance Token Inflation Rate",
      description: "Decrease the annual inflation rate of FHW tokens from 5% to 3%.",
      proposer: "0x1u2v...3w4x",
      status: "rejected",
      votesFor: 35,
      votesAgainst: 65,
      category: "Tokenomics",
    },
  ]

  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">fhdubDAO Governance</h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Shape the future of fitness, health, and wellness through decentralized governance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>DAO Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total FHW Holders</span>
                <span className="font-medium">2,547</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Active Proposals</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Executed Proposals</span>
                <span className="font-medium">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Treasury Value</span>
                <span className="font-medium">$1.2M</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/dao/stats">View Detailed Stats</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Your Governance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Your FHW Balance</span>
                <span className="font-medium">0 FHW</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Voting Power</span>
                <span className="font-medium">0%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Proposals Created</span>
                <span className="font-medium">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Votes Cast</span>
                <span className="font-medium">0</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/tokens/governance">Get FHW Tokens</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Create a Proposal</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Have an idea to improve SmashClass? Create a proposal for the community to vote on.
            </p>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Hold at least 100 FHW tokens</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Clearly define the proposal objective</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Include implementation details</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/dao/create-proposal">Create Proposal</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="active" className="mb-12">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="active">Active Proposals</TabsTrigger>
          <TabsTrigger value="past">Past Proposals</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-8">
          <div className="space-y-6">
            {activeProposals.map((proposal) => (
              <Card key={proposal.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CardTitle>{proposal.title}</CardTitle>
                      <Badge>{proposal.category}</Badge>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{proposal.endTime}</span>
                    </div>
                  </div>
                  <CardDescription>Proposed by {proposal.proposer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">{proposal.description}</p>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4 text-green-500" />
                          <span className="font-medium">For ({proposal.votesFor}%)</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{proposal.votesFor} votes</span>
                      </div>
                      <Progress value={proposal.votesFor} className="h-2 bg-muted" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="flex items-center gap-1">
                          <ThumbsDown className="h-4 w-4 text-red-500" />
                          <span className="font-medium">Against ({proposal.votesAgainst}%)</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{proposal.votesAgainst} votes</span>
                      </div>
                      <Progress value={proposal.votesAgainst} className="h-2 bg-muted" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button className="flex-1" variant="default" asChild>
                    <Link href={`/dao/proposals/${proposal.id}/vote?support=for`}>Vote For</Link>
                  </Button>
                  <Button className="flex-1" variant="outline" asChild>
                    <Link href={`/dao/proposals/${proposal.id}/vote?support=against`}>Vote Against</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="mt-8">
          <div className="space-y-6">
            {pastProposals.map((proposal) => (
              <Card key={proposal.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CardTitle>{proposal.title}</CardTitle>
                      <Badge>{proposal.category}</Badge>
                    </div>
                    <Badge variant={proposal.status === "passed" ? "default" : "destructive"}>
                      {proposal.status === "passed" ? "Passed" : "Rejected"}
                    </Badge>
                  </div>
                  <CardDescription>Proposed by {proposal.proposer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">{proposal.description}</p>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4 text-green-500" />
                          <span className="font-medium">For ({proposal.votesFor}%)</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{proposal.votesFor} votes</span>
                      </div>
                      <Progress value={proposal.votesFor} className="h-2 bg-muted" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="flex items-center gap-1">
                          <ThumbsDown className="h-4 w-4 text-red-500" />
                          <span className="font-medium">Against ({proposal.votesAgainst}%)</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{proposal.votesAgainst} votes</span>
                      </div>
                      <Progress value={proposal.votesAgainst} className="h-2 bg-muted" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href={`/dao/proposals/${proposal.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-6">How fhdubDAO Works</h2>
          <p className="text-lg text-muted-foreground mb-6">
            The Fitness, Health, and Wellness DAO (fhdubDAO) is a decentralized autonomous organization that governs the
            SmashClass platform through community voting.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                1
              </div>
              <div>
                <h3 className="font-medium mb-1">Acquire FHW Tokens</h3>
                <p className="text-muted-foreground">
                  Purchase or earn FHW governance tokens to participate in the DAO.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                2
              </div>
              <div>
                <h3 className="font-medium mb-1">Create or Vote on Proposals</h3>
                <p className="text-muted-foreground">
                  Submit your ideas or vote on existing proposals to shape the platform.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                3
              </div>
              <div>
                <h3 className="font-medium mb-1">Proposal Execution</h3>
                <p className="text-muted-foreground">Passed proposals are implemented by the development team.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                4
              </div>
              <div>
                <h3 className="font-medium mb-1">Earn Rewards</h3>
                <p className="text-muted-foreground">
                  Active DAO participants earn additional rewards and platform benefits.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/decentralized-governance-voting.png"
            alt="DAO Governance"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
