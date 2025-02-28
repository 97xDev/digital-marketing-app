import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-900 to-teal-600 text-white">
        <h1 className="text-5xl font-bold">Elevate Your Digital Marketing</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Drive growth, increase engagement, and transform your business with
          cutting-edge marketing strategies.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block px-6 py-3 text-lg bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { title: "SEO Optimization", icon: "📈" },
            { title: "PPC Advertising", icon: "💰" },
            { title: "Content Marketing", icon: "✍️" },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg text-center shadow-md"
            >
              <span className="text-4xl">{service.icon}</span>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">
                Boost your online presence with expert strategies.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Blog Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Latest Insights</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[1, 2, 3].map((post) => (
              <div key={post} className="p-6 bg-gray-800 rounded-lg shadow-md">
                <Image
                  src="/placeholder.jpg"
                  alt="Blog Post"
                  width={600}
                  height={300}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-4">
                  Engaging Blog Title
                </h3>
                <p className="text-gray-400 mt-2">
                  A short description about the blog post goes here.
                </p>
                <Link
                  href="/blog/sample"
                  className="text-teal-400 hover:underline mt-2 inline-block"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="text-center py-20 bg-teal-600 text-white">
        <h2 className="text-3xl font-bold">Ready to Grow Your Business?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Contact us today for a free consultation and see how we can elevate
          your brand.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block px-6 py-3 text-lg bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
