import { fetchAPI } from "@/lib/api";
import PostsClient from "./PostsClient";
import CreatePost from "./CreatePost";
import { Card } from "@/src/components/ui/Card";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function PostsPage() {
  const posts = await fetchAPI<Post[]>("posts");
  return (
    <div className="px-1">
      <Header/>
      <main className="flex space-x-2 my-2">
        <div className="flex-3">
          <Card>
            <CreatePost/>
          </Card>
        </div>
        <div className="flex-9">
          <Card>
            <PostsClient posts={posts}/>
          </Card>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
