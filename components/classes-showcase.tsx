import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Clock, Coins } from "lucide-react"
import Link from "next/link"

export default function ClassesShowcase() {
  const classes = [
    {
      id: 1,
      title: "HIIT Workout",
      studio: "FitZone Gym",
      location: "Downtown",
      image: "/young-hiit-class.png",
      date: "Today",
      time: "6:00 PM",
      price: 15,
      category: "Fitness",
    },
    {
      id: 2,
      title: "Dance Cardio",
      studio: "Rhythm Studio",
      location: "Westside",
      image: "/young-dance-class.png",
      date: "Tomorrow",
      time: "7:30 AM",
      price: 20,
      category: "Dance",
    },
    {
      id: 3,
      title: "Yoga Flow",
      studio: "Zen Wellness",
      location: "Midtown",
      image: "/young-yoga-class.png",
      date: "Wed",
      time: "12:15 PM",
      price: 10,
      category: "Yoga",
    },
    {
      id: 4,
      title: "Boxing Basics",
      studio: "Knockout Gym",
      location: "Eastside",
      image: "/young-boxing-class.png",
      date: "Thu",
      time: "5:30 PM",
      price: 18,
      category: "Boxing",
    },
  ]

  return (
    <section className="container py-16 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Popular Classes</h2>
          <p className="text-gray-600">Book classes and earn tokens with every session</p>
        </div>
        <Button asChild className="bg-blue-600 hover:bg-blue-700 btn-hover-effect">
          <Link href="/classes">View All Classes</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {classes.map((cls) => (
          <Card
            key={cls.id}
            className="overflow-hidden border-0 shadow-lg rounded-xl hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48">
              <Image src={cls.image || "/placeholder.svg"} alt={cls.title} fill className="object-cover" />
              <Badge className="absolute top-2 right-2 bg-blue-600">{cls.category}</Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-lg mb-1">{cls.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{cls.studio}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-500" />
                  <span>{cls.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  <span>{cls.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span>{cls.time}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Coins className="h-4 w-4 text-blue-600" />
                <span className="font-medium">{cls.price} CC</span>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href={`/classes/${cls.id}`}>Book</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
