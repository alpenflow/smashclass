import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-blue-50">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 bg-blue-400 rounded-full opacity-10"></div>
        <div className="absolute top-1/2 -left-24 w-48 sm:w-64 h-48 sm:h-64 bg-blue-300 rounded-full opacity-10"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="inline-block rounded-full bg-blue-100 px-3 sm:px-4 py-1 sm:py-1.5 text-sm font-medium text-blue-600">
              Web3 Fitness Revolution
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Get fit. <span className="text-blue-600">Get paid.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-[600px] mx-auto lg:mx-0">
              Book classes, earn rewards, and connect with friends on the first blockchain-powered fitness platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 btn-hover-effect">
                <Link href="/classes">Find Classes</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Link href="/how-it-works">Learn More</Link>
              </Button>
            </div>
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
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

          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10 animate-float">
              <Image
                src="/young-fitness-group.png"
                alt="Young people working out"
                width={600}
                height={600}
                className="rounded-2xl shadow-lg w-full h-auto"
                priority
              />
            </div>

            {/* Floating token card */}
            <div
              className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-xl shadow-xl p-3 sm:p-4 border animate-float z-10"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  CC
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium">ClassCoins</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">Web3 Payments</p>
                </div>
              </div>
            </div>

            {/* Floating achievement card */}
            <div
              className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white rounded-xl shadow-xl p-3 sm:p-4 border animate-float z-10"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sm:w-5 sm:h-5"
                  >
                    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"></path>
                    <circle cx="12" cy="8" r="7"></circle>
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium">+25 PT</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">Workout Streak</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
