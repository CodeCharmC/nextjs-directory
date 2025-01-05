import EventsCard from "@/components/EventsCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }>}) {
   const query = (await searchParams).query;
   return (
      <>
         <section className="dot_container w-full text-left flex-center">
            <div className="max-width">
               <h3 className="text-bold mb-4">
                  <span className="pl-2">
                     Solve, Compete and Win
                  </span>
               </h3>
               <h1 className="text-extrabold mb-6">Crack Complex Problems, Showcase Algorithmic Brilliance and Build Connections</h1>
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
            <div className="w-full border-gray-800 border-[1px] grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 p-4 ">
               <EventsCard />               
            </div>
         </section>
      </>
   )
}
