import { client } from "@/sanity/lib/client"
import { EVENTS_BY_ID_QUERY } from "@/sanity/lib/queries"


export default async function Page(
   { params }: { params: Promise<{ id: string }> }   
) {
   const id = (await params).id
   const { data: Post } = await client.fetch(EVENTS_BY_ID_QUERY, { id })   
   if (!Post) return null
   return (
      <>
         page no {Post }         
      </>
   )
}
