import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostData, getSortedPostsData } from "../../../../lib/posts";
import { use } from "react";
import Link from "next/link";

export default function Post({ params }: { params: { slug: string } }) {
  const posts = getSortedPostsData();
  const post = posts.find((post) => post.slug === params.slug);
  if (!post) {
    return notFound();
  }

  const { title, date, description, tags, image, contentHtml } = use(
    getPostData(params.slug)
  );
  return (
    <main>
      <article className="prose prose-slate dark:prose-invert lg:prose-xl m-auto mb-12">
        {image ? (
          <div className="h-64 w-full bg-gray-200 dark:bg-gray-800 relative mb-8 mt-0">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              sizes="(max-width: 768px) 100vw"
              className="rounded-t-lg !mt-4"
            />
          </div>
        ) : null}
        <h1 className="!my-8">{title}</h1>
        <p>
          {date.toLocaleDateString("en-GB", {
            dateStyle: "short",
          })}
        </p>
        <p>{tags}</p>
        <p>{description}</p>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link
            className="hover:text-blue-700 dark:hover:text-blue-300"
            href="/"
          >
            ← Back to home
          </Link>
        </p>
      </article>
    </main>
  );
}
