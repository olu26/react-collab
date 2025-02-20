import heroimage from "../assets/img/hero/h1_hero1.jpg";
import about1 from "../assets/img/gallery/about1.jpg";
import bab1 from "../assets/img/gallery/barber1.jpg";
import bab2 from "../assets/img/gallery/barber2.jpg";
import bab3 from "../assets/img/gallery/barber3.jpg";
import bab4 from "../assets/img/gallery/barber4.jpg";
import bab5 from "../assets/img/gallery/barber5.jpg";
import bab6 from "../assets/img/gallery/barber6.jpg";

const Home = () => {
  const aboutPoints = [
    "Be the majority have suffered alteration in some form, by injected humour.",
    "Psum available be the majority have suffered alteration in some form, by injected humour.",
    "Available be the majority have suffered alteration in some form, by injected humour.",
    "Humour available be the majority have suffered alteration in some form, by injected.",
  ];

  const priceItems = [
    "Special Beard Treatment",
    "Special Beard Treatment",
    "Color your Beard",
    "Wax your Beard",
    "Wax your Beard",
  ];

  const services = [
    {
      title: "Stylish hair cut",
      desc: "Available be the majority have suffered alteration in some form...",
    },
    {
      title: "Cut & hair style",
      desc: "Available be the majority have suffered alteration in some form...",
    },
    {
      title: "Color & hair wash",
      desc: "Available be the majority have suffered alteration in some form...",
    },
  ];

  const testimonials = [
    {
      name: "Wilma Mumduya",
      text: "Consectetur adipiscing elit, sed do eiusmod tempor...",
    },
    {
      name: "Jimmy Changa",
      text: "Consectetur adipiscing elit, sed do eiusmod tempor...",
    },
    {
      name: "Wilma Mumduya",
      text: "Consectetur adipiscing elit, sed do eiusmod tempor...",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-black">
        <div className="h-full flex items-center">
          <div className="w-1/2 pl-20 py-20">
            <div className="text-red-600 w-12 h-12 mb-8">✕</div>
            <h1 className="text-6xl font-bold text-white mb-6">
              WE&apos;RE THE
              <br />
              LAST OF
              <br />
              BREED.
            </h1>
            <p className="text-xl text-white mb-8">Achieve your Dream Style</p>
            <button className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition">
              Book Now
            </button>
          </div>
          <div className="w-1/2 h-screen relative">
            <img
              src={heroimage}
              alt="Barber hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-12">
          <div className="space-y-8">
            {aboutPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-red-600">✓</div>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
          <img
            src={about1}
            alt="Barber hero"
            className="w-full h-full object-cover"
          />
          <div>
            <h2 className="text-4xl font-bold mb-6">ABOUT OUR STORY</h2>
            <p className="text-gray-700 mb-8">
              There are many variations of passages of Lorem Ipsum available...
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition">
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Gallery */}
      <section className="bg-white py-24">
  <div className="max-w-7xl mx-auto flex">
    <div className="w-1/2 grid grid-cols-3 grid-rows-2">
      {/* First row */}
      <div className="overflow-hidden">
        <img
          src={bab1}
          alt="Beard trimming closeup"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="overflow-hidden">
        <img
          src={bab2}
          alt="Beard scissors closeup"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="overflow-hidden">
        <img
          src={bab3}
          alt="Side profile haircut"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Second row */}
      <div className="overflow-hidden">
        <img
          src={bab4}
          alt="Black and white beard portrait"
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="overflow-hidden">
        <img
          src={bab5}
          alt="Hair trimming side view"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="overflow-hidden">
        <img
          src={bab6}
          alt="Beard styling closeup"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="w-1/2 pl-16">
      <h2 className="text-4xl font-bold mb-12">OUR TOP PRICES</h2>
      <hr />
      {priceItems.map((item, index) => (
        <div
          key={index}
          className="flex justify-between border-b border-gray-200 py-4"
        >
          <h4 className="font-medium">{item}</h4>
          <p>
            From <span className="font-bold text-red-600">$40</span>
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Services */}
      <section className="bg-black py-24 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-8 border border-gray-800 rounded-lg"
            >
              <div className="w-16 h-16 mx-auto mb-6 text-red-600">
                {index === 0 && "✄"}
                {index === 1 && "⚇"}
                {index === 2 && "✂"}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            CUSTOMERS SAY ABOUT US
          </h2>
          <div className="grid grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-white shadow-lg rounded-lg">
                <div className="flex mb-4 text-red-600">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mb-8 text-gray-700">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div className="bg-gray-200 w-12 h-12 rounded-full"></div>
                  <p className="font-medium">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
