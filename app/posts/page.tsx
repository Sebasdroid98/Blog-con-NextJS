import { Button } from "@/src/components/ui/Button";
import { fetchAPI } from "@/lib/api";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function PostsPage() {
  const posts = await fetchAPI<Post[]>("posts");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 p-2 bg-amber-100 rounded-2xl">Listado de Posts</h1>
      <div className="flex space-x-2">
        <div className="flex-3">
          <h3 className="text-2xl font-bold mb-4 p-2 bg-amber-100 rounded-2xl">Crear nuevo post</h3>
          <Button text="Registrar nuevo Post"/>
        </div>
        <div className="flex-9">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 my-3 rounded">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{post.body}</p>

              <a href={`/posts/${post.id}`} className="text-blue-600 underline mt-2 block">
                Leer más
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
