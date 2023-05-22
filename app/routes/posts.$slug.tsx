import { posts } from "../data.json";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react"

export const loader = ({ params }) => {
  const post = posts.find((post) => post.slug === params.slug);

  return json({ post });
}

export default function Post() {
  const { post } = useLoaderData();

  return (
    <div>
      <h1>{ post.title }</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, voluptate, quibusdam, quia voluptas quod quos
        exercitationem voluptatem quas quidem doloribus. Quisquam, quia
        voluptas. Quisquam, quia voluptas.
      </p>
    </div>
  )
}
