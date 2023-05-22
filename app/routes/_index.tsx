import { V2_MetaFunction, json } from "@remix-run/node";
import { posts } from "../data.json";
import { useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export const loader = () => {
  return json({
    posts
  })
}

export default function Index() {
  const { posts } = useLoaderData();

  return (
    <div>
      <h1 className="text-4xl">JamComments Sandbox for Remix</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/posts/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
