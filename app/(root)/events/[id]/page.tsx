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
         <section className="dot_container !min-h-[230px] gap-6">
            <p className="text-bold">(post?.createdAt)</p>
            <h1 className="text-extrabold !text-left">{post.title}</h1>
            <p className="text-normal !text-gray-200 !max-w-5xl">{post.description}</p>
         </section>

         <section className="section_container">
            <img
               src={post.image}
               alt="thumbnail"
               className="w-full h-auto rounded-xl"
            />

            <div className="space-y-5 mt-10 max-w-4xl mx-auto">
               <div className="flex-between gap-5">
                  <Link
                     href={`/user/${post.author?._id}`}
                     className="flex gap-2 items-center mb-3"
                  >
                     <Image
                        src={post.author.image}
                        alt="avatar"
                        width={64}
                        height={64}
                        className="rounded-full drop-shadow-lg"
                     />
                     <div>
                        <p className="text-20-medium">{post.author.name}</p>
                        <p className="text-16-medium !text-black-300">
                           @{post.author.username}
                        </p>
                     </div>
                  </Link>
                  <p className="category-tag">{post.category}</p>
               </div>
               <h3 className="text-30-bold">Pitch Details</h3>
               


            </div>
            <hr className="divider" />
            


         </section> 
         <h1 className="flex-center ">page no {post?.title}</h1>                  
      </>
   )
}
