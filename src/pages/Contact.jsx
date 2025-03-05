const Contact = () => {
    return (
      <div className="font-sans">
        {/* Hero Section */}
        <div className="bg-blue-900 h-96 flex items-center relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl text-white font-bold animate-fadeInUp">Contact</h2>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="assets/img/hero/hero4.jpg" 
              alt="Barber Shop" 
              className="w-full h-full object-cover animate-pulse" 
            />
          </div>
        </div>
  
        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Map Section */}
            <div className="hidden sm:block mb-12 h-96 bg-gray-200 rounded-lg overflow-hidden">
              <div id="map" className="h-full w-full"></div>
            </div>
  
            <div className="flex flex-wrap -mx-4">
              {/* Contact Form */}
              <div className="w-full lg:w-8/12 px-4">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <form className="space-y-6">
                  <div>
                    <textarea
                      className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="6"
                      placeholder="Enter Message"
                    ></textarea>
                  </div>
                  
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-full sm:w-1/2 px-2 mb-4">
                      <input
                        type="text"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="w-full sm:w-1/2 px-2 mb-4">
                      <input
                        type="email"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email"
                      />
                    </div>
                  </div>
  
                  <div>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter Subject"
                    />
                  </div>
  
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send
                  </button>
                </form>
              </div>
  
              {/* Contact Info */}
              <div className="w-full lg:w-3/12 lg:offset-lg-1 px-4 mt-8 lg:mt-0">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🏠</span>
                    <div>
                      <h3 className="font-bold text-lg">Buttonwood, California.</h3>
                      <p className="text-gray-600">Rosemead, CA 91770</p>
                    </div>
                  </div>
  
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">📱</span>
                    <div>
                      <h3 className="font-bold text-lg">+1 253 565 2365</h3>
                      <p className="text-gray-600">Mon to Fri 9am to 6pm</p>
                    </div>
                  </div>
  
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">✉️</span>
                    <div>
                      <h3 className="font-bold text-lg">support@example.com</h3>
                      <p className="text-gray-600">Send us your query anytime!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Contact;