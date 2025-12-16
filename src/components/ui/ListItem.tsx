import React from 'react'

interface ListItemProps {
  ids: string;
  name: string;
  email: string;
}

export const ListItem = ({ids, name, email}: ListItemProps) => {
  return (
    <div>
      <li className="flex justify-between gap-x-6 py-5" id={ids}>
        <div className="flex min-w-0 gap-x-4">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="size-12 flex-none rounded-full bg-gray-50"
          />
          <div className="min-w-0 flex-auto">
            <p className="text-sm/6 font-semibold text-gray-900">
              {name}
            </p>
            <p className="mt-1 truncate text-xs/5 text-gray-500">
              {email}
            </p>
          </div>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p className="text-sm/6 text-gray-900">Co-Founder / CEO</p>
          <p className="mt-1 text-xs/5 text-gray-500">
            {/* Last seen <time datetime="2023-01-23T13:23Z">3h ago</time> */}
            Last seen <time>3h ago</time>
          </p>
        </div>
      </li>
    </div>
  )
}
