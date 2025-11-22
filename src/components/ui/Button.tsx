import React from 'react'

interface Props{
    text: string
}
export const Button = ({text}:Props) => {
  return (
    <div><button className='btn-primary'>{text}</button></div>
  )
}
