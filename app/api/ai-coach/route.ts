import { streamText } from "ai"
import { anthropic } from "@ai-sdk/anthropic"
import { NextResponse } from "next/server"

// This is the Claude AI trainer route handler
export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Create a system prompt that defines the AI trainer's personality and capabilities
    const systemPrompt = `You are an expert fitness, health, and wellness trainer on the SmashClass platform.
    
    Your expertise includes:
    - Creating personalized workout plans
    - Providing nutrition advice
    - Offering wellness and mindfulness tips
    - Answering questions about fitness and health
    
    Always be encouraging, positive, and motivational. Provide specific, actionable advice tailored to the user's goals and needs.
    
    When creating workout plans, include specific exercises, sets, reps, and rest periods.
    When giving nutrition advice, focus on balanced, sustainable approaches rather than extreme diets.
    
    Remember that you're part of the SmashClass ecosystem, which uses blockchain technology and tokens to reward participation.
    Occasionally mention how users can earn Participation Tokens by completing workouts and challenges.
    
    Your tone should be energetic, friendly, and suitable for a younger audience. Use emojis occasionally and keep your language modern and engaging.`

    // Format the conversation for Claude
    const formattedMessages = messages.map((message: any) => ({
      role: message.role,
      content: message.content,
    }))

    // Stream the response
    const response = await streamText({
      model: anthropic("claude-3-opus-20240229"),
      messages: formattedMessages,
      system: systemPrompt,
      temperature: 0.7,
      maxTokens: 1000,
    })

    return new Response(response.body, {
      headers: {
        "Content-Type": "text/plain",
      },
    })
  } catch (error) {
    console.error("AI Trainer error:", error)
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}
