"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, User, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react"

export default function Blog() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      image: "/placeholder.svg?height=400&width=800",
      date: { day: "15", month: "Jan" },
      title: "Google inks pact for new 35-storey office",
      excerpt:
        "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      categories: ["Travel", "Lifestyle"],
      comments: 3,
    },
    {
      id: 2,
      image: "/placeholder.svg?height=400&width=800",
      date: { day: "15", month: "Jan" },
      title: "Google inks pact for new 35-storey office",
      excerpt:
        "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      categories: ["Travel", "Lifestyle"],
      comments: 3,
    },
    {
      id: 3,
      image: "/placeholder.svg?height=400&width=800",
      date: { day: "15", month: "Jan" },
      title: "Google inks pact for new 35-storey office",
      excerpt:
        "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      categories: ["Travel", "Lifestyle"],
      comments: 3,
    },
    {
      id: 4,
      image: "/placeholder.svg?height=400&width=800",
      date: { day: "15", month: "Jan" },
      title: "Google inks pact for new 35-storey office",
      excerpt:
        "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      categories: ["Travel", "Lifestyle"],
      comments: 3,
    },
    {
      id: 5,
      image: "/placeholder.svg?height=400&width=800",
      date: { day: "15", month: "Jan" },
      title: "Google inks pact for new 35-storey office",
      excerpt:
        "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      categories: ["Travel", "Lifestyle"],
      comments: 3,
    },
  ]

  // Sample categories data
  const categories = [
    { name: "Restaurant food", count: 37 },
    { name: "Travel news", count: 10 },
    { name: "Modern technology", count: 3 },
    { name: "Product", count: 11 },
    { name: "Inspiration", count: 21 },
    { name: "Health Care", count: 9 },
  ]

  // Sample recent posts data
  const recentPosts = [
    {
      id: 1,
      image: "/placeholder.svg?height=80&width=80",
      title: "From life was you fish...",
      date: "January 12, 2019",
    },
    { id: 2, image: "/placeholder.svg?height=80&width=80", title: "The Amazing Hubble", date: "02 Hours ago" },
    { id: 3, image: "/placeholder.svg?height=80&width=80", title: "Astronomy Or Astrology", date: "03 Hours ago" },
    { id: 4, image: "/placeholder.svg?height=80&width=80", title: "Asteroids telescope", date: "01 Hours ago" },
  ]

  // Sample tags data
  const tags = ["project", "love", "technology", "travel", "restaurant", "life style", "design", "illustration"]

  // Sample Instagram feeds data
  const instagramFeeds = [
    { id: 1, image: "/placeholder.svg?height=100&width=100" },
    { id: 2, image: "/placeholder.svg?height=100&width=100" },
    { id: 3, image: "/placeholder.svg?height=100&width=100" },
    { id: 4, image: "/placeholder.svg?height=100&width=100" },
    { id: 5, image: "/placeholder.svg?height=100&width=100" },
    { id: 6, image: "/placeholder.svg?height=100&width=100" },
  ]

  // State for search input
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <main className="font-sans">
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-96 flex items-center justify-center">
        <div className="text-center z-10">
          <h2 className="text-5xl font-bold text-white animate-fadeIn">Blog</h2>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Hero background"
            width={1200}
            height={600}
            className="w-full h-full object-cover opacity-40"
          />
        </div>
      </div>

      {/* Blog Area */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Blog Posts Column */}
            <div className="lg:w-2/3">
              {/* Blog Posts */}
              {blogPosts.map((post) => (
                <article key={post.id} className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                    <div className="absolute top-5 right-5 bg-primary text-white text-center p-3 rounded-lg">
                      <h3 className="text-xl font-bold">{post.date.day}</h3>
                      <p>{post.date.month}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <Link href="/blog-details" className="inline-block mb-3">
                      <h2 className="text-2xl font-bold text-gray-800 hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <ul className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <li className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.categories.join(", ")}</span>
                      </li>
                      <li className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        <span>{post.comments} Comments</span>
                      </li>
                    </ul>
                  </div>
                </article>
              ))}

              {/* Pagination */}
              <nav className="flex justify-center mt-12">
                <ul className="flex space-x-2">
                  <li>
                    <Link
                      href="#"
                      className="flex items-center justify-center w-10 h-10 rounded-md border hover:bg-gray-100"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center justify-center w-10 h-10 rounded-md border hover:bg-gray-100"
                    >
                      1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center justify-center w-10 h-10 rounded-md border bg-primary text-white"
                    >
                      2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center justify-center w-10 h-10 rounded-md border hover:bg-gray-100"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Sidebar Column */}
            <div className="lg:w-1/3">
              <div className="space-y-8">
                {/* Search Widget */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <form>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full p-3 pr-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Search Keyword"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <button
                        type="submit"
                        className="absolute right-0 top-0 h-full px-4 bg-primary text-white rounded-r-md"
                      >
                        <Search className="w-5 h-5" />
                      </button>
                    </div>
                  </form>
                </div>

                {/* Categories Widget */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Category</h4>
                  <ul className="space-y-3">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          href="#"
                          className="flex justify-between items-center py-2 border-b text-gray-600 hover:text-primary"
                        >
                          <span>{category.name}</span>
                          <span>({category.count})</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts Widget */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Recent Post</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="flex gap-4">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div>
                          <Link href="/blog-details" className="font-medium text-gray-800 hover:text-primary">
                            <h3>{post.title}</h3>
                          </Link>
                          <p className="text-sm text-gray-500">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags Widget */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Tag Clouds</h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md hover:bg-primary hover:text-white transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Instagram Widget */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Instagram Feeds</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {instagramFeeds.map((feed) => (
                      <Link
                        key={feed.id}
                        href="#"
                        className="block overflow-hidden rounded-md hover:opacity-80 transition-opacity"
                      >
                        <Image
                          src={feed.image || "/placeholder.svg"}
                          alt="Instagram feed"
                          width={100}
                          height={100}
                          className="w-full h-auto"
                        />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Widget */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Newsletter</h4>
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-all"
          title="Go to Top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </main>
  )
}

