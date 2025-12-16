import React, { ReactNode } from 'react'

// Propiedades del componente
interface Props{
  children: ReactNode;
  color?: string;
  handleClick?: () => void;
}

export const Button = ({children, color, handleClick}:Props) => {
  return (
    <div>
        <button
        className={color + " px-4 py-2 rounded-md text-white transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"}
        onClick={handleClick}
        >{children}</button>
    </div>
  )
}