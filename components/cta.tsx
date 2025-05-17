import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="container py-16">
      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to join the fitness revolution?</h2>
        <p className="text-lg md:text-xl opacity-90 max-w-[800px] mx-auto mb-8">
          Start booking classes, earning rewards, and connecting with friends on SmashClass.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-blue-50 btn-hover-effect"
            asChild
          >
            <Link href="/signup">Create Account</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10"
            asChild
          >
            <Link href="/how-it-works">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
