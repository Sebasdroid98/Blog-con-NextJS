import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import { List } from "@/src/components/ui/List";
import { ListItem } from "@/src/components/ui/ListItem";
import Link from "next/link";

interface Lista{
  ids: string;
  name: string;
  email: string;
}

export default function Home() {
  const items:Lista[] = [
    {ids:"1" ,name:"Pedro", email:"example@example.com"},
    {ids:"2" ,name:"Alberto", email:"example@example.com"},
    {ids:"3" ,name:"Antonio", email:"example@example.com"},
    {ids:"4" ,name:"Julio", email:"example@example.com"},
  ];
  return (
    <div>
      <Header />
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
      <main className="p-6">
        {/* <ul role="list" className="divide-y divide-gray-100">
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="size-12 flex-none rounded-full bg-gray-50"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  Leslie Alexander
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  leslie.alexander@example.com
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm/6 text-gray-900">Co-Founder / CEO</p>
              <p className="mt-1 text-xs/5 text-gray-500">
                Last seen <time>3h ago</time>
              </p>
            </div>
          </li>
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="size-12 flex-none rounded-full bg-gray-50"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  Michael Foster
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  michael.foster@example.com
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm/6 text-gray-900">Co-Founder / CTO</p>
              <p className="mt-1 text-xs/5 text-gray-500">
                Last seen <time>3h ago</time>
              </p>
            </div>
          </li>
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="size-12 flex-none rounded-full bg-gray-50"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  Dries Vincent
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  dries.vincent@example.com
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm/6 text-gray-900">Business Relations</p>
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="size-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <p className="text-xs/5 text-gray-500">Online</p>
              </div>
            </div>
          </li>
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="size-12 flex-none rounded-full bg-gray-50"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  Lindsay Walton
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  lindsay.walton@example.com
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm/6 text-gray-900">Front-end Developer</p>
              <p className="mt-1 text-xs/5 text-gray-500">
                Last seen <time>3h ago</time>
              </p>
            </div>
          </li>
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="size-12 flex-none rounded-full bg-gray-50"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  Courtney Henry
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  courtney.henry@example.com
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm/6 text-gray-900">Designer</p>
              <p className="mt-1 text-xs/5 text-gray-500">
                Last seen <time>3h ago</time>
              </p>
            </div>
          </li>
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="size-12 flex-none rounded-full bg-gray-50"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">Tom Cook</p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  tom.cook@example.com
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm/6 text-gray-900">Director of Product</p>
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="size-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <p className="text-xs/5 text-gray-500">Online</p>
              </div>
            </div>
          </li>
        </ul> */}
        <List>
          {items.map((item, key) => (
            <>
              <ListItem name={item.name} email="ssss" ids={key}/>
            </>
          ))}
        </List>
      </main>

      <Footer />
    </div>
  );
}
