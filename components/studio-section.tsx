import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"

export default function StudioSection() {
  const benefits = [
    "Fill empty class spaces and maximize revenue",
    "Receive payments in ClassCoins, a stable cryptocurrency",
    "Gain exposure to new clients in the Web3 community",
    "Manage your schedule and availability with our easy-to-use dashboard",
    "Participate in the fhdubDAO and help shape the future of fitness",
  ]

  return (
    <section className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-4 py-1.5 text-sm font-medium text-purple-800 dark:text-purple-300 mb-4">
            For Studios & Gyms
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-6">Join the Web3 Fitness Revolution</h2>
          <p className="text-lg text-muted-foreground mb-8">
            List your studio on SmashClass and connect with clients looking for fitness, health, and wellness services
            while earning cryptocurrency.
          </p>

          <ul className="space-y-3 mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-green-100 dark:bg-green-900/30 p-1 text-green-600 dark:text-green-400">
                  <Check className="h-4 w-4" />
                </div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/list-studio">List Your Studio</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/studio-demo">Request a Demo</Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/fitness-studio-reception.png"
            alt="Studio owner"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
          />

          {/* Floating stats card */}
          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 border max-w-[280px]">
            <h3 className="font-medium mb-4">Studio Benefits</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Average Occupancy</span>
                <span className="font-medium">+24%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">New Clients</span>
                <span className="font-medium">+38%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monthly Revenue</span>
                <span className="font-medium">+31%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
