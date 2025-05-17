"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useChat } from "ai/react"
import { Loader2, Brain, Star, Calendar, Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AITrainersPage() {
  const [goal, setGoal] = useState<string>("")
  const [activeTab, setActiveTab] = useState("trainers")

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/ai-coach",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content:
          "Hey there! 👋 I'm your SmashClass AI Trainer powered by Claude. I can help you crush your fitness goals, level up your nutrition game, and boost your overall wellness. What can I help you with today?",
      },
    ],
  })

  // Mock AI trainers data
  const aiTrainers = [
    {
      id: 1,
      name: "FitBot Max",
      specialty: "HIIT & Strength",
      image: "/ai-trainer-1.png",
      rating: 4.8,
      reviews: 215,
      description:
        "AI-powered trainer specializing in high-intensity interval training and strength building. Personalized workout plans based on your goals and fitness level.",
      model: "Claude Opus",
    },
    {
      id: 2,
      name: "ZenAI",
      specialty: "Yoga & Meditation",
      image: "/ai-trainer-2.png",
      rating: 4.9,
      reviews: 187,
      description:
        "Mindfulness-focused AI trainer that guides you through yoga flows and meditation sessions. Perfect for stress reduction and flexibility improvement.",
      model: "Claude Sonnet",
    },
    {
      id: 3,
      name: "NutriBot",
      specialty: "Nutrition & Diet",
      image: "/ai-trainer-3.png",
      rating: 4.7,
      reviews: 163,
      description:
        "Nutrition expert AI that creates personalized meal plans and offers dietary advice based on your goals, preferences, and restrictions.",
      model: "Claude Haiku",
    },
    {
      id: 4,
      name: "CardioCoach",
      specialty: "Running & Cardio",
      image: "/ai-trainer-4.png",
      rating: 4.8,
      reviews: 192,
      description:
        "Specialized in running programs and cardio workouts. Helps you improve endurance, speed, and overall cardiovascular health.",
      model: "Claude Opus",
    },
  ]

  // Mock rewards data - same structure as human trainers
  const rewards = [
    {
      id: 1,
      title: "5 AI Sessions Milestone",
      description: "Complete 5 sessions with any AI trainer",
      reward: "50 PT",
      progress: 2,
      total: 5,
      image: "/rewards-milestone.png",
    },
    {
      id: 2,
      title: "Try 3 Different AI Trainers",
      description: "Chat with 3 different AI trainers",
      reward: "75 PT + 1 FHDUB",
      progress: 1,
      total: 3,
      image: "/rewards-variety.png",
    },
    {
      id: 3,
      title: "Daily Streak",
      description: "Chat with an AI trainer for 5 consecutive days",
      reward: "100 PT",
      progress: 3,
      total: 5,
      image: "/rewards-consistency.png",
    },
    {
      id: 4,
      title: "Refer a Friend",
      description: "Invite a friend who uses AI trainers",
      reward: "200 PT + 2 FHDUB",
      progress: 0,
      total: 1,
      image: "/rewards-referral.png",
    },
  ]

  // Mock session history
  const sessionHistory = [
    {
      id: 1,
      trainer: "FitBot Max",
      trainerImage: "/ai-trainer-1.png",
      date: "Yesterday",
      topic: "HIIT Workout Plan",
      duration: "15 min",
    },
    {
      id: 2,
      trainer: "NutriBot",
      trainerImage: "/ai-trainer-3.png",
      date: "3 days ago",
      topic: "Protein Intake Advice",
      duration: "12 min",
    },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 text-center md:text-left">AI Trainers</h1>
        <p className="text-gray-600 text-center md:text-left">Get personalized fitness and wellness advice powered by AI</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-blue-50 p-1 rounded-xl">
          <TabsTrigger
            value="trainers"
            className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
          >
            AI Trainers
          </TabsTrigger>
          <TabsTrigger
            value="rewards"
            className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
          >
            Rewards
          </TabsTrigger>
          <TabsTrigger
            value="history"
            className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
          >
            History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="trainers" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {aiTrainers.map((trainer) => (
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
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{trainer.description}</p>
                  <div className="text-sm text-gray-500">Powered by {trainer.model}</div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex items-center justify-between">
                  <div className="font-medium text-blue-600">Free</div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 btn-hover-effect" asChild>
                    <Link href={`/ai-trainers/${trainer.id}`}>Chat Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card className="mb-8 border-0 shadow-md rounded-xl overflow-hidden">
            <div className="h-2 bg-blue-600"></div>
            <CardHeader>
              <CardTitle>What's your fitness goal?</CardTitle>
              <CardDescription>Tell us what you want to achieve, and our AI will help you get there</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="e.g., I want to train for a 5K run in 8 weeks"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="min-h-[100px] border-blue-100 rounded-xl"
              />
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => {
                  if (goal.trim()) {
                    handleInputChange({ target: { value: goal } } as any)
                    handleSubmit({ preventDefault: () => {} } as any)
                    setGoal("")
                  }
                }}
                disabled={!goal.trim() || isLoading}
                className="bg-blue-600 hover:bg-blue-700 btn-hover-effect"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Get Personalized Plan"
                )}
              </Button>
            </CardFooter>
          </Card>

          <div className="border border-blue-100 rounded-xl p-4 max-h-[500px] overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                  <Avatar className="h-8 w-8">
                    {message.role === "user" ? (
                      <>
                        <AvatarImage src="/young-user-2.png" />
                        <AvatarFallback>U</AvatarFallback>
                      </>
                    ) : (
                      <>
                        <AvatarImage src="/ai-trainer-1.png" />
                        <AvatarFallback>AI</AvatarFallback>
                      </>
                    )}
                  </Avatar>
                  <div
                    className={`rounded-xl p-3 ${message.role === "user" ? "bg-blue-600 text-white" : "bg-blue-50"}`}
                  >
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
            <Textarea
              placeholder="Ask your AI trainer a question..."
              value={input}
              onChange={handleInputChange}
              className="min-h-[60px] border-blue-100 rounded-xl"
            />
            <Button type="submit" disabled={isLoading || !input.trim()} className="bg-blue-600 hover:bg-blue-700">
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send"}
            </Button>
          </form>
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

        <TabsContent value="history" className="mt-6">
          {sessionHistory.length > 0 ? (
            <div className="space-y-6">
              <h2 className="text-xl font-bold">Recent Conversations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sessionHistory.map((session) => (
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
                          <p className="text-sm text-gray-500">{session.topic}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-gray-500">Date</p>
                          <p className="font-medium">{session.date}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Duration</p>
                          <p className="font-medium">{session.duration}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        variant="outline"
                        className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
                        asChild
                      >
                        <Link href={`/ai-trainers/history/${session.id}`}>View Conversation</Link>
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
              <h3 className="text-xl font-medium mb-2">No conversation history yet</h3>
              <p className="text-gray-600 mb-6">Chat with one of our AI trainers to get started</p>
              <Button
                className="bg-blue-600 hover:bg-blue-700 btn-hover-effect"
                onClick={() => setActiveTab("trainers")}
              >
                Browse AI Trainers
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Earn While You Learn</h2>
        <p className="text-lg opacity-90 max-w-[800px] mx-auto mb-6">
          Chat with our AI trainers and earn Participation Tokens (PT) and Governance Tokens (FHDUB) as rewards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white/10 rounded-xl p-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mx-auto mb-3">
              <Brain className="h-6 w-6" />
            </div>
            <h3 className="font-medium mb-1">Daily Check-ins</h3>
            <p className="text-sm opacity-80">Earn 5 PT for every day you chat with an AI trainer</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mx-auto mb-3">
              <Star className="h-6 w-6" />
            </div>
            <h3 className="font-medium mb-1">Rate Conversations</h3>
            <p className="text-sm opacity-80">Earn 3 PT for every AI conversation you rate</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mx-auto mb-3">
              <Trophy className="h-6 w-6" />
            </div>
            <h3 className="font-medium mb-1">Complete Milestones</h3>
            <p className="text-sm opacity-80">Earn bonus PT and FHDUB tokens</p>
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
