import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header/>
      <main className="p-6">
        <h1 className="text-4xl font-bold">Mi Blog</h1>
  
        <nav className="mt-6 space-x-4">
          <Link href="/posts" className="text-blue-600 hover:underline">
            Posts
          </Link>
  
          <Link href="/about" className="text-blue-600 hover:underline">
            Acerca de
          </Link>
  
          <Link href="/contact" className="text-blue-600 hover:underline">
            Contacto
          </Link>
        </nav>
      </main>
  
      <Footer/>
    </div>
  );
}
