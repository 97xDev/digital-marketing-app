import Link from "next/link";
import Image from "next/image";
import posts from "@/lib/blogData.json";

export default function Blog() {
  // Get the featured post (assuming it's the first one)
  const [featuredPost, ...topPicks] = posts;

  return (
    <>
      {/* === Featured Article Section === */}
      <section className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-left text-gray-200 mb-6">
          Our Elevated Blog
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Featured Image (Takes 3/4 width on md+) */}
          <Link
            key={featuredPost.slug}
            href={`/blog/${featuredPost.slug}`}
            className="flex flex-col md:flex-row gap-4 p-4 transition"
          >
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              width={1024}
              height={300}
              className="md:flex-grow h-80 object-cover"
            />

            {/* Featured Post Details (Takes 1/4 width on md+) */}
            <div className="flex flex-col space-y-2 p-4 text-left">
              <p className="text-gray-400">{featuredPost.date}</p>
              <h2 className="text-2xl font-bold text-gray-200">
                {featuredPost.title}
              </h2>
              {/* Tags */}
              <div className="mt-2 flex flex-wrap gap-2">
                {featuredPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-teal-600 text-gray-200 px-3 py-1 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* === Our Top Picks Section === */}
      <section className="max-w-7xl mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold text-gray-200 mb-6">Our Top Picks</h2>
        <div className="bg-gray-800 p-8 shadow-lg">
          {/* Grid of Posts */}
          <div className="grid md:grid-cols-3 gap-6">
            {topPicks.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${featuredPost.slug}`}
                className="w-fit mt-auto px-4 py-2 text-gray-200  transition"
              >
                <div
                  key={post.id}
                  className="flex flex-col overflow-hidden p-4"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={300}
                    className="w-full h-60 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-200 mt-4">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{post.subtitle}</p>
                  <span className="w-fit bg-teal-600 text-gray-200 hover:bg-teal-700 px-3 py-1 text-sm">
                    Read More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
