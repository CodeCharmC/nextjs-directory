import EventsCard, { EventsTypeCard } from "@/components/EventsCard";
import SearchForm from "@/components/SearchForm";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { EVENTS_QUERY } from "@/sanity/lib/queries"; 

export default async function Home({ searchParams }: {
   searchParams: Promise<{ query?: string }>
}) {
   const query = (await searchParams).query;
   const {data: Post } = await sanityFetch({ query: EVENTS_QUERY });
   return (
      <>
         <section className="dot_container w-full">
            <div className="hero-container gap-4 sm:gap-6">
               <h3 className="text-bold">
                  <span className="pl-2">
                     Solve, Compete and Win
                  </span>
               </h3>
               <h1 className="text-extrabold">Crack Complex Problems, Showcase Algorithmic Brilliance and Build Connections</h1>               
               <p className="text-normal">Participate in Challenging Events, Master Algorithmic Logic, and Dominate the Competitive Programming Arena.</p>
               <SearchForm query={query} />               
            </div> 
         </section>
         <section className="flex-center flex-col gap-4 mt-8 mb-10 max-width">
            <div className="w-full  pl-10">
               <p className="query-text plain-line">
                  {query ? `${query}`: "All Events"}
               </p>               
            </div>            
            <ul className="cards-container">
               {Post?.length > 0 ? (
                  Post.map((post: EventsTypeCard) => (
                     <EventsCard key={post?._id} post={post} />
                  ))
               ) : (
                     <p className="text-center">No events found</p>
               )}                              
            </ul>
         </section>
         <SanityLive/>
      </>
   )
}
