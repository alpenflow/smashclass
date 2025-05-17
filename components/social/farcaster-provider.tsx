"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface FarcasterUser {
  fid: number
  username: string
  displayName: string
  avatar: string
  followers: number
  following: number
  bio: string
}

interface FarcasterContextType {
  isConnected: boolean
  user: FarcasterUser | null
  friends: FarcasterUser[]
  connect: () => Promise<void>
  disconnect: () => void
  isLoading: boolean
}

export const FarcasterContext = createContext<FarcasterContextType>({
  isConnected: false,
  user: null,
  friends: [],
  connect: async () => {},
  disconnect: () => {},
  isLoading: false,
})

export function FarcasterProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false)
  const [user, setUser] = useState<FarcasterUser | null>(null)
  const [friends, setFriends] = useState<FarcasterUser[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Mock implementation - would be replaced with actual Farcaster integration
  const connect = async () => {
    setIsLoading(true)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock successful connection
      setIsConnected(true)
      setUser({
        fid: 12345,
        username: "fitness_enthusiast",
        displayName: "Fitness Enthusiast",
        avatar: "/diverse-group-profile.png",
        followers: 245,
        following: 187,
        bio: "Passionate about fitness and wellness. Love trying new workout classes!",
      })

      // Mock friends data
      setFriends([
        {
          fid: 54321,
          username: "yoga_master",
          displayName: "Yoga Master",
          avatar: "/yoga-instructor-profile.png",
          followers: 1245,
          following: 352,
          bio: "Yoga instructor and wellness advocate.",
        },
        {
          fid: 67890,
          username: "run_with_me",
          displayName: "Marathon Runner",
          avatar: "/placeholder.svg?key=1sat5",
          followers: 876,
          following: 432,
          bio: "Training for my 5th marathon. Join me!",
        },
        {
          fid: 13579,
          username: "lift_heavy",
          displayName: "Strength Trainer",
          avatar: "/placeholder.svg?key=ho9yx",
          followers: 987,
          following: 345,
          bio: "Powerlifting coach and nutrition specialist.",
        },
      ])
    } catch (error) {
      console.error("Failed to connect to Farcaster:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const disconnect = () => {
    setIsConnected(false)
    setUser(null)
    setFriends([])
  }

  // Load Farcaster state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem("farcasterState")
    if (savedState) {
      try {
        const { isConnected, user, friends } = JSON.parse(savedState)
        setIsConnected(isConnected)
        setUser(user)
        setFriends(friends)
      } catch (error) {
        console.error("Failed to restore Farcaster state:", error)
      }
    }
  }, [])

  // Save Farcaster state to localStorage when it changes
  useEffect(() => {
    if (isConnected && user) {
      localStorage.setItem("farcasterState", JSON.stringify({ isConnected, user, friends }))
    } else {
      localStorage.removeItem("farcasterState")
    }
  }, [isConnected, user, friends])

  return (
    <FarcasterContext.Provider value={{ isConnected, user, friends, connect, disconnect, isLoading }}>
      {children}
    </FarcasterContext.Provider>
  )
}

export function useFarcaster() {
  return useContext(FarcasterContext)
}
