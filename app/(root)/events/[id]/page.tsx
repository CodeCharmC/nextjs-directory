import { client } from "@/sanity/lib/client"
import { EVENTS_BY_ID_QUERY } from "@/sanity/lib/queries"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export const experimental_ppr = true

export default async function Page(
   { params }: { params: Promise<{ id: string }> }   
) {
   const id = (await params).id
   const  post  = await client.fetch(EVENTS_BY_ID_QUERY, { id })    
   if (!post) return notFound()   
   return (
      <>
         <section className="!min-h-[230px]  dot_container w-full">
            <div className="hero-container gap-4 sm:gap-6">
               <h3 className="text-bold">
                  <span className="pl-2">
                  (post?.createdAt)
                  </span>
               </h3>
               <h1 className="text-extrabold">{post.title}</h1>               
               <p className="text-normal">{post.description}</p>               
            </div> 
         </section>         
      </>
   )
}
