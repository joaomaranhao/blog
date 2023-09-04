import { notFound } from "next/navigation";
import { getPostData, getSortedPostsData } from "../../../../lib/posts";
import Link from "next/link";

export const GenerateMetadata = ({ params }: { params: { slug: string } }) => {
  const posts = getSortedPostsData();
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
  };
};

export const Post = async ({ params }: { params: { slug: string } }) => {
  const posts = getSortedPostsData();
  const post = posts.find((post) => post.slug === params.slug);
  if (!post) {
    return notFound();
  }

  const { title, date, description, tags, contentHtml } = await getPostData(
    params.slug
  );

  return (
    <main>
      <article className="prose prose-slate dark:prose-invert lg:prose-xl m-auto my-12">
        <h1>{title}</h1>
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
};

export default Post;