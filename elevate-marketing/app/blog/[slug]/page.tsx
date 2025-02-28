import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { addInternalLinks } from "@/lib/internalLinker";
import posts from "@/lib/blogData.json";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug.toString() === resolvedParams.slug);

  if (!post) return notFound();

  const linkedContent = addInternalLinks(post.content);

  const relatedArticles = posts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        p.tags.some((tag: string) => post.tags.includes(tag))
    )
    .slice(0, 4); // Limit to 4 articles

  return (
    <div className="max-w-7xl mx-auto mt-10 p-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-0">{post.title}</h1>
          <h2 className="text-xl text-gray-200 mt-2 mb-2">{post.subtitle}</h2>
          <span className="text-gray-200 text-sm mb-6 block">{post.date}</span>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 font-semibold mt-4 max-w-md">
            {post.tags &&
              post.tags.map((tag: string) => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="bg-teal-600 text-gray-200 px-3 py-1 text-sm"
                >
                  #{tag}
                </Link>
              ))}
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2">
          <Image
            src={post.image}
            alt={post.title}
            width={600}
            height={800}
            className="w-full h-80 object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 mt-10">
        {relatedArticles.length > 0 && (
          <aside className="md:w-full">
            <div className="sticky top-20">
              <h3 className="text-2xl font-bold text-teal-400 mb-2">
                Related Articles
              </h3>
              <div className="flex flex-col gap-2">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="flex items-center py-2 transition"
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={100}
                      height={100}
                      className="object-cover mr-4"
                    />
                    <div className="flex flex-col gap-2">
                      <h4 className="text-md leading-[1.2] font-semibold">
                        {article.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        )}
        <div className="prose prose-invert max-w-3xl ml-auto mt-10 col-span-3">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: (props) => (
                <h1 className="text-4xl font-bold mt-6" {...props} />
              ),
              h2: (props) => (
                <h2
                  className="text-3xl font-semibold mt-6 text-gray-200"
                  {...props}
                />
              ),
              h3: (props) => (
                <h3
                  className="text-2xl font-normal mt-4 text-gray-200"
                  {...props}
                />
              ),
              p: (props) => (
                <p
                  className="text-gray-200 mt-2 leading-relaxed max-w-2xl"
                  {...props}
                />
              ),
              ul: (props) => (
                <ul
                  className="list-disc list-inside mt-2 space-y-1 text-gray-200"
                  {...props}
                />
              ),
              li: (props) => <li className="ml-4 text-gray-200" {...props} />,
              a: (props) => (
                <a className="text-blue-600 hover:underline" {...props} />
              ),
            }}
          >
            {linkedContent}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
