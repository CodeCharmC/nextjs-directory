import { client } from "@/sanity/lib/client"
import { EVENTS_BY_ID_QUERY } from "@/sanity/lib/queries"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { HashIcon } from "lucide-react"
import { formatDate } from "@/lib/utils"
import markdownit from "markdown-it"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import Views from "@/components/Views"

export const experimental_ppr = true

const md = markdownit()

export default async function Page(
   { params }: { params: Promise<{ id: string }> }   
) {
   const id = (await params).id
   const  post  = await client.fetch(EVENTS_BY_ID_QUERY, { id })    
   if (!post) return notFound()   
   const parsedContent = md.render(post?.pitch || "");
   return (
      <>
         <section className="!min-h-[230px]  dot_container w-full">
            <div className="hero-container gap-4 sm:gap-6">
               <h3 className="text-bold">
                  <span className="pl-2">
                  {formatDate(post._createdAt)}
                  </span>
               </h3>
               <h1 className="text-extrabold">{post.title}</h1>               
               <p className="text-normal">{post.description}</p>               
            </div> 
         </section> 
         <section className="flex-center flex-col gap-4 mt-8 mb-10 max-width">

            <div className="w-full flex-center m-15 bg-gray-950 max-w-6xl">
               <img
                  src={post.image}
                  alt="thumbnail"
                  className="w-full h-full rounded-xl"
               />
            </div>

            <div className="space-y-5 mt-10 max-w-6xl mx-auto flex flex-col gap-4 w-full">
               <div className="w-full flex-between flex-row">
                  <Link
                     href={`/user/${post.author?._id}`}
                     className="flex gap-2 items-center mb-3"
                  >
                     <Image
                        src={post.author.image}
                        alt="avatar"
                        width={64}
                        height={64}
                        className="w-[50px] h-[50px] rounded-full drop-shadow-lg" 
                     />
                     <div>
                        <p className="text-xl font-semibold">{post.author.name}</p>
                        <p className="text-lg font-semibold">
                           @{post.author.username}
                        </p>
                     </div>
                  </Link>
                  <p className="card-normaltext flex-center flex-row">
                     <HashIcon width={12} className="text-gray-200" />
                     <span>{post.category}</span>
                  </p> 
               </div>
               <h3 className="max-w-[280px] md:max-w-[300px] text-base md:text-lg font-bold">Pitch Details</h3>
               {parsedContent ? (
                  <article
                     dangerouslySetInnerHTML={{__html: parsedContent}}
                  />
               ) : (
                     <p>No details provided</p>
               )}

            </div>
            
            <hr className="border-dotted bg-gray-400 max-w-4xl my-10 mx-auto" /> 
            
            <Suspense fallback={<Skeleton className="flex justify-end items-center mt-5 fixed bottom-3 right-3 " />}>
               <Views id={id} />
            </Suspense>
         </section>           
      </>
   )
}
