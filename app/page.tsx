import Hero from "@/components/hero"
import Features from "@/components/features"
import TokenSystem from "@/components/token-system"
import ClassesShowcase from "@/components/classes-showcase"
import StudioSection from "@/components/studio-section"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <Features />
      <TokenSystem />
      <ClassesShowcase />
      <StudioSection />
      <CTA />
    </div>
  )
}
