"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useFarcaster } from "@/components/social/farcaster-provider"
import { Loader2, Search, UserPlus, Trophy, MapPin, ThumbsUp, MessageSquare, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AppHeader } from "@/components/app-header"

export default function SocialPage() {
  const { isConnected, user, friends, connect, disconnect, isLoading } = useFarcaster()
  const [activeTab, setActiveTab] = useState("feed")

  // Mock activity feed data
  const activityFeed = [
    {
      id: 1,
      user: {
        name: "Dance Queen",
        username: "dance_queen",
        avatar: "/young-user-1.png",
      },
      type: "class-completed",
      content: "Just crushed a Dance Cardio class at Rhythm Studio! 💃 #FeelTheVibe",
      class: {
        name: "Dance Cardio",
        studio: "Rhythm Studio",
        location: "Westside",
      },
      timestamp: "2 hours ago",
      likes: 24,
      comments: 5,
    },
    {
      id: 2,
      user: {
        name: "Fitness Freak",
        username: "fitness_freak",
        avatar: "/young-user-2.png",
      },
      type: "challenge-created",
      content: "Who's up for a 30-day HIIT challenge? 5 workouts per week, starting Monday! 🔥",
      challenge: {
        name: "30-Day HIIT Challenge",
        reward: "500 PT",
        participants: 8,
      },
      timestamp: "5 hours ago",
      likes: 42,
      comments: 12,
    },
    {
      id: 3,
      user: {
        name: "Zen Master",
        username: "zen_master",
        avatar: "/young-user-3.png",
      },
      type: "milestone",
      content:
        "Finally nailed that headstand in yoga class today! 🧘‍♀️ Thanks to the amazing instructors at Zen Wellness.",
      milestone: {
        achievement: "New Skill Unlocked",
        details: "Headstand Pose",
      },
      timestamp: "Yesterday",
      likes: 56,
      comments: 8,
    },
  ]

  // Mock challenges data
  const challenges = [
    {
      id: 1,
      title: "30-Day HIIT Challenge",
      description: "Complete 5 HIIT workouts per week for 30 days",
      creator: {
        name: "Fitness Freak",
        avatar: "/young-user-2.png",
      },
      participants: 8,
      reward: "500 PT",
      startDate: "Starts Monday",
      endDate: "Ends in 30 days",
      category: "Fitness",
    },
    {
      id: 2,
      title: "Dance Marathon",
      description: "Complete 10 different dance classes in 2 weeks",
      creator: {
        name: "Dance Queen",
        avatar: "/young-user-1.png",
      },
      participants: 12,
      reward: "300 PT",
      startDate: "In progress",
      endDate: "Ends in 1 week",
      category: "Dance",
    },
    {
      id: 3,
      title: "Boxing Bootcamp",
      description: "Complete 8 boxing classes in 4 weeks",
      creator: {
        name: "Knockout King",
        avatar: "/young-user-4.png",
      },
      participants: 6,
      reward: "400 PT + 5 FHW",
      startDate: "Starts next week",
      endDate: "4 weeks duration",
      category: "Boxing",
    },
  ]

  if (!isConnected) {
    return (
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AppHeader />
        <div className="max-w-md mx-auto text-center">
          <div className="mb-6">
            <Image src="/farcaster-logo.png" alt="Farcaster Social" width={150} height={150} className="mx-auto" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-4">Connect with Friends</h1>
          <p className="text-gray-600 mb-8">
            See what classes your friends are taking, join challenges, and earn rewards together.
          </p>
          <Button
            onClick={connect}
            disabled={isLoading}
            size="lg"
            className="w-full bg-blue-600 hover:bg-blue-700 btn-hover-effect"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Connecting...
              </>
            ) : (
              "Connect Farcaster Account"
            )}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <AppHeader />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left sidebar - User profile */}
        <div className="space-y-6">
          <Card className="border-0 shadow-md rounded-xl overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-blue-600 to-blue-400"></div>
            <CardHeader className="text-center pt-0 -mt-12">
              <Avatar className="w-24 h-24 mx-auto border-4 border-white">
                <AvatarImage src={user?.avatar || ""} alt={user?.displayName || ""} />
                <AvatarFallback>{user?.displayName?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
              <CardTitle className="mt-2">{user?.displayName}</CardTitle>
              <CardDescription>@{user?.username}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-center mb-4">{user?.bio}</p>
              <div className="flex justify-center gap-6 text-sm">
                <div className="text-center">
                  <p className="font-medium">{user?.followers}</p>
                  <p className="text-gray-500">Followers</p>
                </div>
                <div className="text-center">
                  <p className="font-medium">{user?.following}</p>
                  <p className="text-gray-500">Following</p>
                </div>
                <div className="text-center">
                  <p className="font-medium">24</p>
                  <p className="text-gray-500">Classes</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                onClick={disconnect}
                className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                Disconnect
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-0 shadow-md rounded-xl">
            <CardHeader>
              <CardTitle className="text-lg">Friends</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {friends.map((friend) => (
                <div key={friend.fid} className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={friend.avatar || "/placeholder.svg"} alt={friend.displayName} />
                    <AvatarFallback>{friend.displayName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">{friend.displayName}</p>
                    <p className="text-xs text-gray-500">@{friend.username}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                    <UserPlus className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50" asChild>
                <Link href="/social/find-friends">Find More Friends</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Main content */}
        <div className="lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="grid w-full grid-cols-3 bg-blue-50 p-1 rounded-xl">
              <TabsTrigger
                value="feed"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
              >
                Activity Feed
              </TabsTrigger>
              <TabsTrigger
                value="challenges"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
              >
                Challenges
              </TabsTrigger>
              <TabsTrigger
                value="leaderboard"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
              >
                Leaderboard
              </TabsTrigger>
            </TabsList>

            <TabsContent value="feed" className="mt-6">
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search activities..." className="pl-9 border-blue-100 rounded-xl" />
                </div>
              </div>

              <div className="space-y-6">
                {activityFeed.map((activity) => (
                  <Card key={activity.id} className="border-0 shadow-md rounded-xl overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                          <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{activity.user.name}</div>
                          <div className="text-xs text-gray-500">
                            @{activity.user.username} • {activity.timestamp}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3">{activity.content}</p>

                      {activity.type === "class-completed" && activity.class && (
                        <div className="bg-blue-50 rounded-xl p-3 text-sm">
                          <div className="font-medium">{activity.class.name}</div>
                          <div className="text-gray-500 flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>
                              {activity.class.studio}, {activity.class.location}
                            </span>
                          </div>
                        </div>
                      )}

                      {activity.type === "challenge-created" && activity.challenge && (
                        <div className="bg-blue-50 rounded-xl p-3 text-sm">
                          <div className="font-medium">{activity.challenge.name}</div>
                          <div className="text-gray-500 flex items-center gap-1">
                            <Trophy className="h-3 w-3" />
                            <span>Reward: {activity.challenge.reward}</span>
                          </div>
                          <div className="text-gray-500">{activity.challenge.participants} participants so far</div>
                        </div>
                      )}

                      {activity.type === "milestone" && activity.milestone && (
                        <div className="bg-blue-50 rounded-xl p-3 text-sm">
                          <div className="font-medium">{activity.milestone.achievement}</div>
                          <div className="text-gray-500">{activity.milestone.details}</div>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="border-t pt-3 flex justify-between">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-1 text-gray-500 hover:text-blue-600"
                      >
                        <ThumbsUp className="h-4 w-4" />
                        <span>{activity.likes}</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-1 text-gray-500 hover:text-blue-600"
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>{activity.comments}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-600">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="challenges" className="mt-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Active Challenges</h2>
                <Button className="bg-blue-600 hover:bg-blue-700 btn-hover-effect" asChild>
                  <Link href="/social/create-challenge">Create Challenge</Link>
                </Button>
              </div>

              <div className="space-y-6">
                {challenges.map((challenge) => (
                  <Card key={challenge.id} className="border-0 shadow-md rounded-xl overflow-hidden">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{challenge.title}</CardTitle>
                          <CardDescription>Created by {challenge.creator.name}</CardDescription>
                        </div>
                        <Badge className="bg-blue-600">{challenge.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{challenge.description}</p>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Start Date</p>
                          <p className="font-medium">{challenge.startDate}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">End Date</p>
                          <p className="font-medium">{challenge.endDate}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Participants</p>
                          <p className="font-medium">{challenge.participants} friends joined</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Reward</p>
                          <p className="font-medium">{challenge.reward}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-4">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700 btn-hover-effect">Join Challenge</Button>
                      <Button variant="outline" className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="leaderboard" className="mt-6">
              <Card className="border-0 shadow-md rounded-xl">
                <CardHeader>
                  <CardTitle>Weekly Leaderboard</CardTitle>
                  <CardDescription>See who's leading in fitness activities this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        rank: 1,
                        name: "Fitness Freak",
                        username: "fitness_freak",
                        avatar: "/young-user-2.png",
                        points: 450,
                        classes: 8,
                      },
                      {
                        rank: 2,
                        name: "Dance Queen",
                        username: "dance_queen",
                        avatar: "/young-user-1.png",
                        points: 380,
                        classes: 7,
                      },
                      {
                        rank: 3,
                        name: "Zen Master",
                        username: "zen_master",
                        avatar: "/young-user-3.png",
                        points: 320,
                        classes: 6,
                      },
                      {
                        rank: 4,
                        name: "Knockout King",
                        username: "knockout_king",
                        avatar: "/young-user-4.png",
                        points: 280,
                        classes: 5,
                      },
                    ].map((user) => (
                      <div key={user.username} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-medium text-blue-600">
                          {user.rank}
                        </div>
                        <Avatar>
                          <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-medium">{user.name}</div>
                          <div className="text-xs text-gray-500">@{user.username}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-blue-600">{user.points} PT</div>
                          <div className="text-xs text-gray-500">{user.classes} classes</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
