"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useChat } from "ai/react"
import { Loader2, Dumbbell, Salad, Brain } from "lucide-react"

export default function AICoachPage() {
  const [goal, setGoal] = useState<string>("")

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/ai-coach",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content:
          "Hey there! 👋 I'm your SmashClass AI Coach powered by Claude. I can help you crush your fitness goals, level up your nutrition game, and boost your overall wellness. What can I help you with today?",
      },
    ],
  })

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Your Personal AI Coach</h1>
          <p className="text-gray-600">Get personalized fitness and wellness advice powered by Claude AI</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-md rounded-xl overflow-hidden">
            <div className="h-2 bg-blue-600"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Dumbbell className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Workout Plans</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Get personalized workout routines based on your goals and fitness level
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md rounded-xl overflow-hidden">
            <div className="h-2 bg-blue-600"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Salad className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Nutrition Tips</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Receive customized nutrition recommendations to support your fitness journey
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md rounded-xl overflow-hidden">
            <div className="h-2 bg-blue-600"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Brain className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Wellness Advice</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Learn mindfulness techniques and wellness practices for holistic health
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 border-0 shadow-md rounded-xl overflow-hidden">
          <div className="h-2 bg-blue-600"></div>
          <CardHeader>
            <CardTitle>What's your fitness goal?</CardTitle>
            <CardDescription>Tell us what you want to achieve, and we'll help you get there</CardDescription>
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

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Chat with Your AI Coach</h2>

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
                        <AvatarImage src="/ai-coach-avatar.png" />
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

          <form onSubmit={handleSubmit} className="flex gap-2">
            <Textarea
              placeholder="Ask your AI coach a question..."
              value={input}
              onChange={handleInputChange}
              className="min-h-[60px] border-blue-100 rounded-xl"
            />
            <Button type="submit" disabled={isLoading || !input.trim()} className="bg-blue-600 hover:bg-blue-700">
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
