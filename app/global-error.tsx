"use client"

import React from 'react'

export default function GlobalError({ error }: { error: Error & { digest?: string } }
) {
   return (
      <div>global-error</div>
   )
}
