
import React from 'react'

export default function layout({children}:{children: React.ReactNode}) {
   return (
      <>
         <h1 className='text-3xl font-bold pt-3'>Dashboar layout</h1>
         {children}
      </>
   )
}
