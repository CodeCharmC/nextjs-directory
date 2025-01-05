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
               <h1 className="text-extrabold">Crack Complex Problems, Showcase Algorithmic Brilliance and Build Connections</h1>
               <p className="text-normal">Participate in Challenging Events, Master Algorithmic Logic, and Dominate the Competitive Programming Arena.</p>
               <SearchForm query={query} />               
            </div> 
         </section>
      </>
   )
}
