"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronUp, ChevronDown, Star } from "lucide-react"

export default function Service() {
  const [activeAccordion, setActiveAccordion] = useState("collapseOne")

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? "" : id)
  }

  return (
    <main className="font-sans">
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-96 flex items-center justify-center">
        <div className="text-center z-10">
          <h2 className="text-5xl font-bold text-white animate-fadeIn">Services</h2>
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

      {/* All We Do For You Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-6">All We Do for You</h2>
              </div>

              {/* Accordion */}
              <div className="mb-10">
                {/* Hair Accordion */}
                <div className="border rounded-lg mb-4 overflow-hidden">
                  <div
                    className="bg-gray-100 p-4 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleAccordion("collapseOne")}
                  >
                    <h3 className="text-xl font-medium">For Hair</h3>
                    {activeAccordion === "collapseOne" ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>

                  {activeAccordion === "collapseOne" && (
                    <div className="p-4 bg-white">
                      {/* Service Item */}
                      <div className="py-3 border-b">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-lg font-medium">Trim your Hair</h4>
                          </div>
                          <div className="text-right">
                            <p>
                              From <span className="font-bold text-lg">$40</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Service Item */}
                      <div className="py-3 border-b">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-lg font-medium">Special Beard Treatment</h4>
                          </div>
                          <div className="text-right">
                            <p>
                              From <span className="font-bold text-lg">$40</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Service Item */}
                      <div className="py-3 border-b">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-lg font-medium">Color your Beard</h4>
                          </div>
                          <div className="text-right">
                            <p>
                              From <span className="font-bold text-lg">$40</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Service Item */}
                      <div className="py-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-lg font-medium">Wax your Beard</h4>
                          </div>
                          <div className="text-right">
                            <p>
                              From <span className="font-bold text-lg">$40</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Beard Accordion */}
                <div className="border rounded-lg overflow-hidden">
                  <div
                    className="bg-gray-100 p-4 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleAccordion("collapseTwo")}
                  >
                    <h3 className="text-xl font-medium">For Beard</h3>
                    {activeAccordion === "collapseTwo" ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>

                  {activeAccordion === "collapseTwo" && (
                    <div className="p-4 bg-white">
                      {/* Service Item */}
                      <div className="py-3 border-b">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-lg font-medium">Trim your Hair</h4>
                          </div>
                          <div className="text-right">
                            <p>
                              From <span className="font-bold text-lg">$40</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Service Item */}
                      <div className="py-3 border-b">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-lg font-medium">Special Beard Treatment</h4>
                          </div>
                          <div className="text-right">
                            <p>
                              From <span className="font-bold text-lg">$40</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Service Item */}
                      <div className="py-3 border-b">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-lg font-medium">Color your Beard</h4>
                          </div>
                          <div className="text-right">
                            <p>
                              From <span className="font-bold text-lg">$40</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Service Item */}
                      <div className="py-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-lg font-medium">Wax your Beard</h4>
                          </div>
                          <div className="text-right">
                            <p>
                              From <span className="font-bold text-lg">$40</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-5/12">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Barber services"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Area */}
      <section className="py-20 bg-gray-900 bg-opacity-90 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center bg-blend-overlay">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg p-8 text-center transition-transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full">
                  <Image src="/placeholder.svg?height=50&width=50" alt="Stylish hair cut" width={50} height={50} />
                </div>
              </div>
              <h5 className="text-xl font-bold mb-4">
                <Link href="#" className="hover:text-primary">
                  Stylish hair cut
                </Link>
              </h5>
              <div>
                <p className="text-gray-600">
                  Available be the majority have suffered alteration in some form, by injected humour.
                </p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg p-8 text-center transition-transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full">
                  <Image src="/placeholder.svg?height=50&width=50" alt="Cut & hair style" width={50} height={50} />
                </div>
              </div>
              <h5 className="text-xl font-bold mb-4">
                <Link href="#" className="hover:text-primary">
                  Cut & hair style
                </Link>
              </h5>
              <div>
                <p className="text-gray-600">
                  Available be the majority have suffered alteration in some form, by injected humour.
                </p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg p-8 text-center transition-transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full">
                  <Image src="/placeholder.svg?height=50&width=50" alt="Color & hair wash" width={50} height={50} />
                </div>
              </div>
              <h5 className="text-xl font-bold mb-4">
                <Link href="#" className="hover:text-primary">
                  Color & hair wash
                </Link>
              </h5>
              <div>
                <p className="text-gray-600">
                  Available be the majority have suffered alteration in some form, by injected humour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Customers Say About Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Customer"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <p className="font-medium">Wilma Mumduya</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Customer"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <p className="font-medium">Jimmy Changa</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  onsectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Customer"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <p className="font-medium">Wilma Mumduya</p>
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
  );
};



