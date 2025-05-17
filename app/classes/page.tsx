import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Clock, Coins, Search, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ClassesPage() {
  // Mock data for classes
  const classes = [
    {
      id: 1,
      title: "Power Yoga Flow",
      studio: "Zen Wellness Studio",
      location: "Downtown",
      image: "/placeholder.svg?height=200&width=300&query=yoga class in studio",
      date: "Today",
      time: "6:00 PM",
      price: 15,
      category: "Yoga",
      spotsLeft: 3,
    },
    {
      id: 2,
      title: "HIIT Circuit Training",
      studio: "FitZone Gym",
      location: "Westside",
      image: "/placeholder.svg?height=200&width=300&query=hiit workout class",
      date: "Tomorrow",
      time: "7:30 AM",
      price: 20,
      category: "Fitness",
      spotsLeft: 5,
    },
    {
      id: 3,
      title: "Mindfulness Meditation",
      studio: "Serenity Center",
      location: "Midtown",
      image: "/placeholder.svg?height=200&width=300&query=meditation class",
      date: "Wed",
      time: "12:15 PM",
      price: 10,
      category: "Wellness",
      spotsLeft: 8,
    },
    {
      id: 4,
      title: "Spin Class",
      studio: "Cycle Studio",
      location: "Eastside",
      image: "/placeholder.svg?height=200&width=300&query=spin class with bikes",
      date: "Thu",
      time: "5:30 PM",
      price: 18,
      category: "Cardio",
      spotsLeft: 2,
    },
    {
      id: 5,
      title: "Pilates Reformer",
      studio: "Core Strength Studio",
      location: "Northside",
      image: "/placeholder.svg?height=200&width=300&query=pilates reformer class",
      date: "Fri",
      time: "9:00 AM",
      price: 25,
      category: "Pilates",
      spotsLeft: 4,
    },
    {
      id: 6,
      title: "Boxing Fundamentals",
      studio: "Knockout Gym",
      location: "Downtown",
      image: "/placeholder.svg?height=200&width=300&query=boxing class",
      date: "Sat",
      time: "10:30 AM",
      price: 22,
      category: "Boxing",
      spotsLeft: 6,
    },
    {
      id: 7,
      title: "Hot Yoga",
      studio: "Zen Wellness Studio",
      location: "Downtown",
      image: "/placeholder.svg?height=200&width=300&query=hot yoga class",
      date: "Today",
      time: "8:00 PM",
      price: 18,
      category: "Yoga",
      spotsLeft: 3,
    },
    {
      id: 8,
      title: "Barre Fitness",
      studio: "Ballet Fitness Studio",
      location: "Midtown",
      image: "/placeholder.svg?height=200&width=300&query=barre fitness class",
      date: "Tomorrow",
      time: "5:45 PM",
      price: 16,
      category: "Barre",
      spotsLeft: 7,
    },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 text-center md:text-left">Find Classes</h1>
        <p className="text-muted-foreground text-center md:text-left">Book empty spaces in upcoming classes using ClassCoins</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters sidebar */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            <h2 className="font-medium">Filters</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="yoga">Yoga</SelectItem>
                  <SelectItem value="fitness">Fitness</SelectItem>
                  <SelectItem value="wellness">Wellness</SelectItem>
                  <SelectItem value="cardio">Cardio</SelectItem>
                  <SelectItem value="pilates">Pilates</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Location</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="downtown">Downtown</SelectItem>
                  <SelectItem value="midtown">Midtown</SelectItem>
                  <SelectItem value="westside">Westside</SelectItem>
                  <SelectItem value="eastside">Eastside</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Date</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Any Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Date</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="tomorrow">Tomorrow</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="weekend">Weekend</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Price Range (ClassCoins)</label>
              <Slider defaultValue={[0, 50]} min={0} max={50} step={1} className="my-4" />
              <div className="flex items-center justify-between text-sm">
                <span>0 CC</span>
                <span>50 CC</span>
              </div>
            </div>

            <Button className="w-full">Apply Filters</Button>
          </div>
        </div>

        {/* Classes grid */}
        <div className="lg:col-span-3">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search classes..." className="pl-9" />
            </div>
            <Select defaultValue="recommended">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="date">Date: Soonest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="grid" className="mb-6">
            <TabsList className="grid w-[200px] grid-cols-2">
              <TabsTrigger value="grid">Grid</TabsTrigger>
              <TabsTrigger value="list">List</TabsTrigger>
            </TabsList>

            <TabsContent value="grid" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {classes.map((cls) => (
                  <Card key={cls.id} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image src={cls.image || "/placeholder.svg"} alt={cls.title} fill className="object-cover" />
                      <Badge className="absolute top-2 right-2">{cls.category}</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-lg mb-1">{cls.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{cls.studio}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{cls.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{cls.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{cls.time}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Coins className="h-4 w-4 text-primary" />
                        <span className="font-medium">{cls.price} CC</span>
                        <span className="text-xs text-muted-foreground ml-2">{cls.spotsLeft} spots left</span>
                      </div>
                      <Button size="sm" asChild>
                        <Link href={`/classes/${cls.id}`}>Book</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="list" className="mt-6">
              <div className="space-y-4">
                {classes.map((cls) => (
                  <Card key={cls.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative w-full md:w-48 h-48 md:h-auto">
                        <Image src={cls.image || "/placeholder.svg"} alt={cls.title} fill className="object-cover" />
                        <Badge className="absolute top-2 right-2">{cls.category}</Badge>
                      </div>
                      <div className="flex flex-col flex-1 p-4">
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-lg mb-1">{cls.title}</h3>
                              <p className="text-sm text-muted-foreground">{cls.studio}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <Coins className="h-4 w-4 text-primary" />
                              <span className="font-medium">{cls.price} CC</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 my-4 text-sm">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span>{cls.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span>{cls.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>{cls.time}</span>
                            </div>
                            <div className="text-xs text-muted-foreground">{cls.spotsLeft} spots left</div>
                          </div>
                        </div>

                        <div className="flex justify-end mt-2">
                          <Button size="sm" asChild>
                            <Link href={`/classes/${cls.id}`}>Book Now</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-8">
            <Button variant="outline">Load More</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
