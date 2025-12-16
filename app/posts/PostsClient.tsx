interface Post {
  id: number;
  title: string;
  body: string;
}

interface Props {
  posts: Post[];
}

export default function PostsClient({ posts }: Props) {
  return (
    <div>
        <h3 className="text-2xl font-bold mb-4 p-2 bg-amber-100 dark:bg-black dark:border-white dark:border-2">
          Listado de Posts
        </h3>
        {posts.map((post) => (
          <div key={post.id} className="border p-4 my-3 rounded">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>

            <a
              href={`/posts/${post.id}`}
              className="text-blue-600 underline mt-2 block"
            >
              Leer más
            </a>
          </div>
        ))}
    </div>
  );
}
