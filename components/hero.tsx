import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-blue-50">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 rounded-full opacity-10"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-blue-300 rounded-full opacity-10"></div>
      </div>

      <div className="container pt-16 md:pt-24 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-600">
              Web3 Fitness Revolution
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Get fit. <span className="text-blue-600">Get paid.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-[600px]">
              Book classes, earn rewards, and connect with friends on the first blockchain-powered fitness platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 btn-hover-effect">
                <Link href="/classes">Find Classes</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Link href="/how-it-works">Learn More</Link>
              </Button>
            </div>
            <div className="pt-4 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src={`/young-user-${i}.png`}
                      alt="User avatar"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p>
                Join <span className="font-medium text-blue-600">2,000+</span> users and{" "}
                <span className="font-medium text-blue-600">500+</span> studios
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 animate-float">
              <Image
                src="/young-fitness-group.png"
                alt="Young people working out"
                width={600}
                height={600}
                className="rounded-2xl shadow-lg"
              />
            </div>

            {/* Floating token card */}
            <div
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border animate-float z-10"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                  CC
                </div>
                <div>
                  <p className="text-sm font-medium">ClassCoins</p>
                  <p className="text-xs text-gray-500">Web3 Payments</p>
                </div>
              </div>
            </div>

            {/* Floating achievement card */}
            <div
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border animate-float z-10"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"></path>
                    <circle cx="12" cy="8" r="7"></circle>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">+25 PT</p>
                  <p className="text-xs text-gray-500">Workout Streak</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
