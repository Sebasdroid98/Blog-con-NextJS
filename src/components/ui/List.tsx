import React from 'react'

interface ListProps {
  children: React.ReactNode;
}

export const List = ({ children }: ListProps) => {
  return (
    <div>
        <ul role="list" className="divide-y divide-gray-100">{children}</ul>
    </div>
  )
}




