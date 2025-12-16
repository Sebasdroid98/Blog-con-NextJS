import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Mi Blog
        </Link>

        <div className="space-x-4">
          <Link href="/blog">Blog</Link>
          <Link href="/about">Acerca de</Link>
        </div>
      </nav>
    </header>
  );
}
