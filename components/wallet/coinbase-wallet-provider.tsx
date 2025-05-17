"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface CoinbaseWalletContextType {
  isConnected: boolean
  address: string | null
  balance: {
    classCoins: number
    participationTokens: number
    governanceTokens: number
    eth: number
    usdc: number
  }
  connect: () => Promise<void>
  disconnect: () => void
  sendTransaction: (to: string, amount: number, token: string) => Promise<boolean>
  isLoading: boolean
}

export const CoinbaseWalletContext = createContext<CoinbaseWalletContextType>({
  isConnected: false,
  address: null,
  balance: {
    classCoins: 0,
    participationTokens: 0,
    governanceTokens: 0,
    eth: 0,
    usdc: 0,
  },
  connect: async () => {},
  disconnect: () => {},
  sendTransaction: async () => false,
  isLoading: false,
})

export function CoinbaseWalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState<string | null>(null)
  const [balance, setBalance] = useState({
    classCoins: 0,
    participationTokens: 0,
    governanceTokens: 0,
    eth: 0,
    usdc: 0,
  })
  const [isLoading, setIsLoading] = useState(false)

  // Mock implementation - would be replaced with actual Coinbase SmartWallet SDK
  const connect = async () => {
    setIsLoading(true)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock successful connection
      setIsConnected(true)
      setAddress("0x1234...5678")
      setBalance({
        classCoins: 100,
        participationTokens: 25,
        governanceTokens: 5,
        eth: 0.5,
        usdc: 200,
      })
    } catch (error) {
      console.error("Failed to connect to Coinbase Wallet:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const disconnect = () => {
    setIsConnected(false)
    setAddress(null)
    setBalance({
      classCoins: 0,
      participationTokens: 0,
      governanceTokens: 0,
      eth: 0,
      usdc: 0,
    })
  }

  const sendTransaction = async (to: string, amount: number, token: string) => {
    setIsLoading(true)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock successful transaction
      if (token === "CC") {
        setBalance((prev) => ({
          ...prev,
          classCoins: prev.classCoins - amount,
        }))
      } else if (token === "PT") {
        setBalance((prev) => ({
          ...prev,
          participationTokens: prev.participationTokens - amount,
        }))
      } else if (token === "FHW") {
        setBalance((prev) => ({
          ...prev,
          governanceTokens: prev.governanceTokens - amount,
        }))
      } else if (token === "ETH") {
        setBalance((prev) => ({
          ...prev,
          eth: prev.eth - amount,
        }))
      } else if (token === "USDC") {
        setBalance((prev) => ({
          ...prev,
          usdc: prev.usdc - amount,
        }))
      }

      return true
    } catch (error) {
      console.error("Failed to send transaction:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  // Load wallet state from localStorage on mount
  useEffect(() => {
    const savedWalletState = localStorage.getItem("coinbaseWalletState")
    if (savedWalletState) {
      try {
        const { isConnected, address, balance } = JSON.parse(savedWalletState)
        setIsConnected(isConnected)
        setAddress(address)
        setBalance(balance)
      } catch (error) {
        console.error("Failed to restore Coinbase Wallet state:", error)
      }
    }
  }, [])

  // Save wallet state to localStorage when it changes
  useEffect(() => {
    if (isConnected && address) {
      localStorage.setItem("coinbaseWalletState", JSON.stringify({ isConnected, address, balance }))
    } else {
      localStorage.removeItem("coinbaseWalletState")
    }
  }, [isConnected, address, balance])

  return (
    <CoinbaseWalletContext.Provider
      value={{
        isConnected,
        address,
        balance,
        connect,
        disconnect,
        sendTransaction,
        isLoading,
      }}
    >
      {children}
    </CoinbaseWalletContext.Provider>
  )
}

export function useCoinbaseWallet() {
  return useContext(CoinbaseWalletContext)
}
