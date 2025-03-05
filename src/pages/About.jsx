
const About= () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-100 h-[400px] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
        </div>
        <div className="absolute inset-0 z-0">
          <img 
            src="/api/placeholder/1200/400" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-70"
          />
        </div>
      </div>

      {/* About Area */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap items-center justify-between">
          {/* Left Column - About Points */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="space-y-4">
              {[
                "Be the majority have suffered alteration in some form, by injected humour.",
                "Psum available be the majority have suffered alteration in some form, by injected humour.",
                "Available be the majority have suffered alteration in some form, by injected humour.",
                "Humour available be the majority have suffered alteration in some form, by injected."
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      className="text-blue-500"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <p className="text-gray-600">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column - Image */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img 
              src="/api/placeholder/400/500" 
              alt="About Us" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column - Story */}
          <div className="w-full md:w-1/3">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">ABOUT Our STORY</h2>
              <p className="text-gray-600 mb-6">
                There are many variations of passages of Lorem Ipsum available 
                be the majority have suffered alteration in some form, by injected humour or randomised words.
              </p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">All We Do for You</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '💇', title: 'Stylish Hair Cut', description: 'Available be the majority have suffered alteration in some form, by injected humour.' },
              { icon: '✂️', title: 'Cut & Hair Style', description: 'Available be the majority have suffered alteration in some form, by injected humour.' },
              { icon: '🎨', title: 'Color & Hair Wash', description: 'Available be the majority have suffered alteration in some form, by injected humour.' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Customers Say About Us</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Wilma Mumduya', quote: 'Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.' },
            { name: 'Jimmy Changa', quote: 'Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.' },
            { name: 'Jane Doe', quote: 'Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.' }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              <p className="italic text-gray-600 mb-4">{testimonial.quote}</p>
              <div className="font-semibold text-gray-800">{testimonial.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;