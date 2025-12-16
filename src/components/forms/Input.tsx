import React from 'react'

interface Props {
    names: string;
    ids: string;
    types: string;
}

export const Input = ({names, ids, types}: Props) => {
  return (
    <div>
        <input className='p-2 bg-white w-full border-2 rounded-lg text-blue-600 italic focus:bg-amber-100 dark:text-orange-600' type={types} name={names} id={ids} />
    </div>
  )
}
