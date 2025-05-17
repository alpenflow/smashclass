"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCoinbaseWallet } from "@/components/wallet/coinbase-wallet-provider"
import { Loader2, ArrowUpRight, ArrowDownLeft, RefreshCw, Copy, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function WalletPage() {
  const { isConnected, address, balance, connect, disconnect, sendTransaction, isLoading } = useCoinbaseWallet()
  const [activeTab, setActiveTab] = useState("tokens")
  const [recipient, setRecipient] = useState("")
  const [amount, setAmount] = useState("")
  const [selectedToken, setSelectedToken] = useState("CC")
  const [copied, setCopied] = useState(false)
  const [txStatus, setTxStatus] = useState<null | "pending" | "success" | "error">(null)

  const handleCopyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address.replace("...", ""))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleSendTransaction = async () => {
    if (!recipient || !amount || !selectedToken) return

    setTxStatus("pending")

    const success = await sendTransaction(recipient, Number.parseFloat(amount), selectedToken)

    setTxStatus(success ? "success" : "error")

    setTimeout(() => {
      setTxStatus(null)
      if (success) {
        setRecipient("")
        setAmount("")
      }
    }, 3000)
  }

  if (!isConnected) {
    return (
      <div className="container py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-6">
            <Image src="/coinbase-wallet-logo.png" alt="Coinbase Wallet" width={100} height={100} className="mx-auto" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-4">Connect Your Wallet</h1>
          <p className="text-gray-600 mb-8">
            Connect your Coinbase SmartWallet to manage your tokens and make payments on SmashClass.
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
              "Connect Coinbase Wallet"
            )}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Your Wallet</h1>
            <div className="flex items-center gap-2">
              <p className="text-gray-600">{address}</p>
              <Button variant="ghost" size="icon" onClick={handleCopyAddress} className="text-blue-600">
                {copied ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <Button variant="outline" onClick={disconnect} className="border-blue-200 text-blue-600 hover:bg-blue-50">
            Disconnect Wallet
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-md rounded-xl overflow-hidden">
            <div className="h-2 bg-blue-600"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">ClassCoins (CC)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Image src="/blue-cc-coin.png" alt="ClassCoins" width={24} height={24} />
                </div>
                <div className="text-2xl font-bold">{balance.classCoins}</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md rounded-xl overflow-hidden">
            <div className="h-2 bg-blue-600"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Participation Tokens (PT)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Image src="/green-pt-coin.png" alt="Participation Tokens" width={24} height={24} />
                </div>
                <div className="text-2xl font-bold">{balance.participationTokens}</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md rounded-xl overflow-hidden">
            <div className="h-2 bg-blue-600"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Governance Tokens (FHW)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Image src="/purple-fhw-coin.png" alt="Governance Tokens" width={24} height={24} />
                </div>
                <div className="text-2xl font-bold">{balance.governanceTokens}</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 bg-blue-50 p-1 rounded-xl">
            <TabsTrigger
              value="tokens"
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
            >
              Tokens
            </TabsTrigger>
            <TabsTrigger
              value="send"
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
            >
              Send
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
            >
              History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tokens" className="mt-6">
            <Card className="border-0 shadow-md rounded-xl overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
              <CardHeader>
                <CardTitle>Your Tokens</CardTitle>
                <CardDescription>Manage your SmashClass tokens and other cryptocurrencies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border border-blue-100 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <Image src="/blue-cc-coin.png" alt="ClassCoins" width={24} height={24} />
                      </div>
                      <div>
                        <div className="font-medium">ClassCoins</div>
                        <div className="text-xs text-gray-500">CC</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{balance.classCoins} CC</div>
                      <div className="text-xs text-gray-500">${balance.classCoins}.00</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-blue-100 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <Image src="/green-pt-coin.png" alt="Participation Tokens" width={24} height={24} />
                      </div>
                      <div>
                        <div className="font-medium">Participation Tokens</div>
                        <div className="text-xs text-gray-500">PT</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{balance.participationTokens} PT</div>
                      <div className="text-xs text-gray-500">Non-transferable</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-blue-100 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <Image src="/purple-fhw-coin.png" alt="Governance Tokens" width={24} height={24} />
                      </div>
                      <div>
                        <div className="font-medium">Governance Tokens</div>
                        <div className="text-xs text-gray-500">FHW</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{balance.governanceTokens} FHW</div>
                      <div className="text-xs text-gray-500">≈ ${balance.governanceTokens * 10}.00</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-blue-100 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                            fill="#3B82F6"
                          />
                          <path
                            d="M12 6.5V9.5M12 12.5V17.5M8 12.5H16"
                            stroke="#3B82F6"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Ethereum</div>
                        <div className="text-xs text-gray-500">ETH</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{balance.eth} ETH</div>
                      <div className="text-xs text-gray-500">≈ ${balance.eth * 3000}.00</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-blue-100 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" fill="#2775CA" />
                          <path d="M12 6V18M8 10H16M8 14H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">USD Coin</div>
                        <div className="text-xs text-gray-500">USDC</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{balance.usdc} USDC</div>
                      <div className="text-xs text-gray-500">≈ ${balance.usdc}.00</div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700 btn-hover-effect">
                  <ArrowDownLeft className="mr-2 h-4 w-4" />
                  Receive
                </Button>
                <Button className="flex-1" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Swap
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="send" className="mt-6">
            <Card className="border-0 shadow-md rounded-xl overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
              <CardHeader>
                <CardTitle>Send Tokens</CardTitle>
                <CardDescription>Transfer tokens to another wallet or pay for services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="token">Token</Label>
                    <Select value={selectedToken} onValueChange={setSelectedToken}>
                      <SelectTrigger id="token" className="border-blue-100 rounded-xl">
                        <SelectValue placeholder="Select token" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CC">ClassCoins (CC)</SelectItem>
                        <SelectItem value="FHW">Governance Tokens (FHW)</SelectItem>
                        <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                        <SelectItem value="USDC">USD Coin (USDC)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="recipient">Recipient Address</Label>
                    <Input
                      id="recipient"
                      placeholder="0x..."
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      className="border-blue-100 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="border-blue-100 rounded-xl"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 btn-hover-effect"
                  onClick={handleSendTransaction}
                  disabled={!recipient || !amount || isLoading || txStatus === "pending"}
                >
                  {txStatus === "pending" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : txStatus === "success" ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Transaction Successful
                    </>
                  ) : txStatus === "error" ? (
                    "Transaction Failed"
                  ) : (
                    <>
                      <ArrowUpRight className="mr-2 h-4 w-4" />
                      Send {selectedToken}
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <Card className="border-0 shadow-md rounded-xl overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>View your recent transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "tx1",
                      type: "send",
                      token: "CC",
                      amount: 15,
                      to: "0x5678...9012",
                      date: "Today, 2:30 PM",
                      status: "completed",
                    },
                    {
                      id: "tx2",
                      type: "receive",
                      token: "PT",
                      amount: 5,
                      from: "0x3456...7890",
                      date: "Yesterday, 10:15 AM",
                      status: "completed",
                    },
                    {
                      id: "tx3",
                      type: "send",
                      token: "CC",
                      amount: 20,
                      to: "0x9012...3456",
                      date: "May 10, 2023",
                      status: "completed",
                    },
                  ].map((tx) => (
                    <div
                      key={tx.id}
                      className="flex items-center justify-between p-3 border border-blue-100 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full ${
                            tx.type === "send" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
                          } flex items-center justify-center`}
                        >
                          {tx.type === "send" ? (
                            <ArrowUpRight className="h-5 w-5" />
                          ) : (
                            <ArrowDownLeft className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">
                            {tx.type === "send" ? `Sent to ${tx.to}` : `Received from ${tx.from}`}
                          </div>
                          <div className="text-xs text-gray-500">{tx.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-medium ${tx.type === "send" ? "text-red-600" : "text-green-600"}`}>
                          {tx.type === "send" ? "-" : "+"}
                          {tx.amount} {tx.token}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">{tx.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                  View All Transactions
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
