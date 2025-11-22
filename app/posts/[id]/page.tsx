import { fetchAPI } from "@/lib/api";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Params {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: Params) {
  const post = await fetchAPI<Post>(`posts/${params.id}`);

  return (
    <article className="p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.body }} />
    </article>
  );
}
