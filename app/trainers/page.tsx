"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar, Trophy, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AppHeader } from "@/components/app-header"

export default function TrainersPage() {
  const [activeTab, setActiveTab] = useState("trainers")

  // Mock trainers data
  const trainers = [
    {
      id: 1,
      name: "Alex Johnson",
      specialty: "HIIT & Strength",
      image: "/young-trainer-1.png",
      rating: 4.9,
      reviews: 124,
      experience: "5 years",
      price: 45,
      availability: ["Mon", "Wed", "Fri"],
      bio: "Certified personal trainer specializing in high-intensity workouts and strength training. I'll help you crush your fitness goals!",
    },
    {
      id: 2,
      name: "Sophia Chen",
      specialty: "Yoga & Pilates",
      image: "/young-trainer-2.png",
      rating: 4.8,
      reviews: 98,
      experience: "7 years",
      price: 40,
      availability: ["Tue", "Thu", "Sat"],
      bio: "Yoga instructor with a focus on mindfulness and body alignment. My sessions blend traditional yoga with modern pilates techniques.",
    },
    {
      id: 3,
      name: "Marcus Williams",
      specialty: "Boxing & Cardio",
      image: "/young-trainer-3.png",
      rating: 4.7,
      reviews: 87,
      experience: "4 years",
      price: 50,
      availability: ["Mon", "Tue", "Thu", "Sat"],
      bio: "Former amateur boxer turned fitness trainer. My high-energy sessions combine boxing techniques with cardio for maximum results.",
    },
    {
      id: 4,
      name: "Zoe Rodriguez",
      specialty: "Dance Fitness",
      image: "/young-trainer-4.png",
      rating: 4.9,
      reviews: 112,
      experience: "6 years",
      price: 38,
      availability: ["Wed", "Fri", "Sun"],
      bio: "Professional dancer and certified fitness instructor. My classes are fun, energetic, and guaranteed to make you sweat!",
    },
  ]

  // Mock rewards data
  const rewards = [
    {
      id: 1,
      title: "5 Sessions Milestone",
      description: "Complete 5 sessions with any trainer",
      reward: "50 PT",
      progress: 3,
      total: 5,
      image: "/rewards-milestone.png",
    },
    {
      id: 2,
      title: "Try 3 Different Trainers",
      description: "Book sessions with 3 different trainers",
      reward: "75 PT + 1 FHW",
      progress: 2,
      total: 3,
      image: "/rewards-variety.png",
    },
    {
      id: 3,
      title: "Consistency Champion",
      description: "Complete 3 sessions in one week",
      reward: "100 PT",
      progress: 1,
      total: 3,
      image: "/rewards-consistency.png",
    },
    {
      id: 4,
      title: "Refer a Friend",
      description: "Invite a friend who books a session",
      reward: "200 PT + 2 FHW",
      progress: 0,
      total: 1,
      image: "/rewards-referral.png",
    },
  ]

  // Mock upcoming sessions
  const upcomingSessions = [
    {
      id: 1,
      trainer: "Alex Johnson",
      trainerImage: "/young-trainer-1.png",
      type: "HIIT Workout",
      date: "Tomorrow",
      time: "10:00 AM",
      duration: "45 min",
    },
    {
      id: 2,
      trainer: "Sophia Chen",
      trainerImage: "/young-trainer-2.png",
      type: "Yoga Flow",
      date: "Friday",
      time: "5:30 PM",
      duration: "60 min",
    },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <AppHeader />
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 text-center md:text-left">Personal Trainers</h1>
        <p className="text-gray-600 text-center md:text-left">Book one-on-one sessions with expert trainers and earn rewards</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-blue-50 p-1 rounded-xl">
          <TabsTrigger
            value="trainers"
            className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
          >
            Trainers
          </TabsTrigger>
          <TabsTrigger
            value="rewards"
            className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
          >
            Rewards
          </TabsTrigger>
          <TabsTrigger
            value="sessions"
            className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
          >
            My Sessions
          </TabsTrigger>
        </TabsList>

        <TabsContent value="trainers" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer) => (
              <Card key={trainer.id} className="border-0 shadow-md rounded-xl overflow-hidden">
                <div className="relative h-48">
                  <Image src={trainer.image || "/placeholder.svg"} alt={trainer.name} fill className="object-cover" />
                  <Badge className="absolute top-2 right-2 bg-blue-600">{trainer.specialty}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-lg mb-1">{trainer.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{trainer.rating}</span>
                    <span className="text-sm text-gray-500">({trainer.reviews} reviews)</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{trainer.bio}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      <span>Available: {trainer.availability.join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span>Experience: {trainer.experience}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex items-center justify-between">
                  <div className="font-medium text-blue-600">${trainer.price}/session</div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 btn-hover-effect" asChild>
                    <Link href={`/trainers/${trainer.id}`}>Book</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="rewards" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rewards.map((reward) => (
              <Card key={reward.id} className="border-0 shadow-md rounded-xl overflow-hidden">
                <div className="h-2 bg-blue-600"></div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Image src={reward.image || "/placeholder.svg"} alt={reward.title} width={32} height={32} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{reward.title}</CardTitle>
                      <CardDescription>{reward.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Progress</span>
                        <span className="font-medium">
                          {reward.progress} / {reward.total}
                        </span>
                      </div>
                      <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${(reward.progress / reward.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Reward: {reward.reward}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 btn-hover-effect"
                    disabled={reward.progress < reward.total}
                  >
                    {reward.progress < reward.total ? `${reward.total - reward.progress} more to go` : "Claim Reward"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sessions" className="mt-6">
          {upcomingSessions.length > 0 ? (
            <div className="space-y-6">
              <h2 className="text-xl font-bold">Upcoming Sessions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingSessions.map((session) => (
                  <Card key={session.id} className="border-0 shadow-md rounded-xl overflow-hidden">
                    <div className="h-2 bg-blue-600"></div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={session.trainerImage || "/placeholder.svg"} alt={session.trainer} />
                          <AvatarFallback>{session.trainer[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{session.trainer}</h3>
                          <p className="text-sm text-gray-500">{session.type}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <p className="text-gray-500">Date</p>
                          <p className="font-medium">{session.date}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Time</p>
                          <p className="font-medium">{session.time}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Duration</p>
                          <p className="font-medium">{session.duration}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50"
                        asChild
                      >
                        <Link href={`/trainers/sessions/${session.id}`}>Details</Link>
                      </Button>
                      <Button variant="outline" className="flex-1 border-red-200 text-red-600 hover:bg-red-50">
                        Reschedule
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">No sessions booked yet</h3>
              <p className="text-gray-600 mb-6">Book a session with one of our trainers to get started</p>
              <Button
                className="bg-blue-600 hover:bg-blue-700 btn-hover-effect"
                onClick={() => setActiveTab("trainers")}
              >
                Browse Trainers
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Earn While You Train</h2>
        <p className="text-lg opacity-90 max-w-[800px] mx-auto mb-6">
          Book sessions with our trainers and earn Participation Tokens (PT) and Governance Tokens (FHW) as rewards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white/10 rounded-xl p-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mx-auto mb-3">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="font-medium mb-1">Book Sessions</h3>
            <p className="text-sm opacity-80">Earn 10 PT for every session you book</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mx-auto mb-3">
              <Star className="h-6 w-6" />
            </div>
            <h3 className="font-medium mb-1">Leave Reviews</h3>
            <p className="text-sm opacity-80">Earn 5 PT for every review you leave</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mx-auto mb-3">
              <Trophy className="h-6 w-6" />
            </div>
            <h3 className="font-medium mb-1">Complete Milestones</h3>
            <p className="text-sm opacity-80">Earn bonus PT and fhdubDAO tokens</p>
          </div>
        </div>
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-blue-600 hover:bg-blue-50 btn-hover-effect"
          asChild
        >
          <Link href="/tokens">Learn About Tokens</Link>
        </Button>
      </div>
    </div>
  )
}
