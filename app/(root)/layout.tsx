

import React from 'react'

export default function layout({children}: {children: React.ReactNode}) {
   return (
      <>
         <h1 className='text-3xl font-bold pt-3'>NAVBAR</h1>
         {children}
         <h1 className='text-3xl font-bold bottom-0'>FOOTER</h1>
      </>
   )
}
