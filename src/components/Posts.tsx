import Link from "next/link";
import { getSortedPostsData } from "../../lib/posts";

export const Posts = () => {
  const posts = getSortedPostsData();
  const options = { month: "2-digit", day: "2-digit" };

  return (
    <ul className="mt-6">
      {posts.map((post) => (
        <li className="lg:mb-6 mb-4" key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <div className="bg-slate-200 dark:bg-slate-900 rounded-lg p-6 border-4 border-transparent hover:border-blue-600">
              <span className="text-3xl font-bold">{post.title}</span>
              <p className="mt-2 text-lg">{post.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {post.date
                    .toLocaleDateString("en-GB", {
                      dateStyle: "short",
                    })
                    .replace(/\//g, "-")}
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {post.tags}
                </span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
