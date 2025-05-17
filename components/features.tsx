import { Calendar, Coins, Users, Award, Building, Shield } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Book Classes",
      description: "Find and book available slots in fitness and wellness classes near you.",
    },
    {
      icon: <Coins className="h-6 w-6" />,
      title: "Earn Tokens",
      description: "Get rewarded for attending classes, referring friends, and studios.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Connect with Friends",
      description: "See what classes your friends are taking and join challenges together.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Complete Challenges",
      description: "Join fitness challenges and earn rewards for achieving your goals.",
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Discover Studios",
      description: "Find the best fitness studios and wellness centers in your area.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Blockchain",
      description: "All transactions and rewards are securely recorded on the blockchain.",
    },
  ]

  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">How It Works</h2>
        <p className="text-lg text-gray-600 max-w-[800px] mx-auto">
          SmashClass combines fitness with blockchain technology to create a rewarding experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
