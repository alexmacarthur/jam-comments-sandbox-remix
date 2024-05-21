import { posts } from "../data.json";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { JamComments } from "@jam-comments/remix";

export const loader = async ({ params }) => {
  const { fetchMarkup } = await import("@jam-comments/remix/server");

  const post = posts.find((post) => post.slug === params.slug);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
  };

  const markup = await fetchMarkup({
    domain: process.env.JAM_COMMENTS_DOMAIN as string,
    apiKey: process.env.JAM_COMMENTS_API_KEY as string,
    path: `/posts/${params.slug}`,
    schema: blogPostingSchema,
    environment: process.env.NODE_ENV,
    tz: "Africa/Casablanca",
  });

  return json({ post, markup });
};

export default function Post() {
  const { post, markup } = useLoaderData() as any;

  return (
    <div>
      <h1 className="text-4xl text-center mb-4">{post.title}</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, voluptate, quibusdam, quia voluptas quod quos exercitationem
        voluptatem quas quidem doloribus. Quisquam, quia voluptas. Quisquam,
        quia voluptas.
      </p>

      <JamComments markup={markup} />
    </div>
  );
}
