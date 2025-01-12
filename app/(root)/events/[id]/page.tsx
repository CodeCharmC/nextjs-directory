import { client } from "@/sanity/lib/client"
import { EVENTS_BY_ID_QUERY } from "@/sanity/lib/queries"
import { notFound } from "next/navigation"

export const experimental_ppr = true

export default async function Page(
   { params }: { params: Promise<{ id: string }> }   
) {
   const id = (await params).id
   const  post  = await client.fetch(EVENTS_BY_ID_QUERY, { id })    
   if (!post) return notFound()   
   return (
      <>
         <h1 className="flex-center ">page no {post?.title}</h1>                  
      </>
   )
}
