"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface Web3ContextType {
  isConnected: boolean
  address: string | null
  balance: {
    classCoins: number
    participationTokens: number
    governanceTokens: number
  }
  connect: (walletType: string) => Promise<void>
  disconnect: () => void
}

export const Web3Context = createContext<Web3ContextType>({
  isConnected: false,
  address: null,
  balance: {
    classCoins: 0,
    participationTokens: 0,
    governanceTokens: 0,
  },
  connect: async () => {},
  disconnect: () => {},
})

export function Web3Provider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState<string | null>(null)
  const [balance, setBalance] = useState({
    classCoins: 0,
    participationTokens: 0,
    governanceTokens: 0,
  })

  // Mock implementation - would be replaced with actual wallet connection logic
  const connect = async (walletType: string) => {
    console.log(`Connecting to ${walletType}...`)

    // Simulate connection delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock successful connection
    setIsConnected(true)
    setAddress("0x1234...5678")
    setBalance({
      classCoins: 100,
      participationTokens: 25,
      governanceTokens: 5,
    })
  }

  const disconnect = () => {
    setIsConnected(false)
    setAddress(null)
    setBalance({
      classCoins: 0,
      participationTokens: 0,
      governanceTokens: 0,
    })
  }

  // Load wallet state from localStorage on mount
  useEffect(() => {
    const savedWalletState = localStorage.getItem("walletState")
    if (savedWalletState) {
      try {
        const { isConnected, address, balance } = JSON.parse(savedWalletState)
        setIsConnected(isConnected)
        setAddress(address)
        setBalance(balance)
      } catch (error) {
        console.error("Failed to restore wallet state:", error)
      }
    }
  }, [])

  // Save wallet state to localStorage when it changes
  useEffect(() => {
    if (isConnected && address) {
      localStorage.setItem("walletState", JSON.stringify({ isConnected, address, balance }))
    } else {
      localStorage.removeItem("walletState")
    }
  }, [isConnected, address, balance])

  return (
    <Web3Context.Provider value={{ isConnected, address, balance, connect, disconnect }}>
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3() {
  return useContext(Web3Context)
}
