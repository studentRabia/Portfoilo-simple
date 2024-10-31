import React from 'react'

interface Iprops {
    title:string;

}

const Heading:React.FC<Iprops> = ({title}) => {
  return (
    <div className='text-center  text-4xl pb-8 '>
      <p className='underline decoration-bisque underline-offset-8  border-bisque inline-block pb-2 '>{title}</p>
    </div>
  )
}

export default Heading
