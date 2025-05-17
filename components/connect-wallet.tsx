"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useWeb3 } from "@/hooks/use-web3"

export function ConnectWallet() {
  const [isOpen, setIsOpen] = useState(false)
  const { connect, isConnected, address, disconnect } = useWeb3()

  const handleConnect = async (walletType: string) => {
    await connect(walletType)
    setIsOpen(false)
  }

  if (isConnected && address) {
    return (
      <Button
        variant="outline"
        onClick={disconnect}
        className="flex items-center gap-2 border-blue-200 text-blue-600 hover:bg-blue-50"
      >
        <Wallet className="h-4 w-4" />
        <span className="hidden md:inline">
          {address.slice(0, 6)}...{address.slice(-4)}
        </span>
        <span className="md:hidden">Wallet</span>
      </Button>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 btn-hover-effect">
          <Wallet className="h-4 w-4" />
          <span>Connect</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect your wallet</DialogTitle>
          <DialogDescription>
            Connect your wallet to access SmashClass features, book classes, and earn tokens.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            onClick={() => handleConnect("metamask")}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 btn-hover-effect"
          >
            <Image src="/metamask-logo.png" alt="MetaMask" width={24} height={24} />
            MetaMask
          </Button>
          <Button
            onClick={() => handleConnect("coinbase")}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 btn-hover-effect"
          >
            <Image src="/coinbase-wallet-logo.png" alt="Coinbase Wallet" width={24} height={24} />
            Coinbase Wallet
          </Button>
          <Button
            onClick={() => handleConnect("walletconnect")}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 btn-hover-effect"
          >
            <Image src="/walletconnect-logo.png" alt="WalletConnect" width={24} height={24} />
            WalletConnect
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
