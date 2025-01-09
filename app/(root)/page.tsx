import EventsCard from "@/components/EventsCard";
import SearchForm from "@/components/SearchForm";
import { client } from "@/sanity/lib/client";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
/*
const Post = [
   {
      _createdAt: "2023-05-01",
      _id: 1,
      views: 59,
      author: {_id:1, name:"Jon Melen"},
      title: "Lorem ipsum dolor sit amet",
      description: "This is a description. This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.",
      category: "Lorem Ipsum",
      image:"https://cdn.pixabay.com/photo/2024/01/25/05/47/ai-generated-8531013_1280.jpg"
   },
   {
      _createdAt: "2023-05-01",
      _id: 1,
      views: 59,
      author: {_id:1, name:"Jon Melen"},
      title: "Lorem ipsum dolor sit amet",
      description: "This is a description. This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.",
      category: "Lorem Ipsum",
      image:"https://cdn.pixabay.com/photo/2022/04/01/09/08/particles-7104407_1280.jpg"
   },
   {
      _createdAt: "2023-05-01",
      _id: 1,
      views: 59,
      author: {_id:1, name:"Jon Melen"},
      title: "Lorem ipsum dolor sit amet",
      description: "This is a description. This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.",
      category: "Lorem Ipsum",
      image:"https://cdn.pixabay.com/photo/2016/11/17/23/29/programming-1832991_1280.png"
   },
   {
      _createdAt: "2023-05-01",
      _id: 1,
      views: 59,
      author: {_id:1, name:"Jon Melen"},
      title: "Lorem ipsum dolor sit amet",
      description: "This is a description. This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.",
      category: "Lorem Ipsum",
      image:"https://cdn.pixabay.com/photo/2014/12/30/13/44/programming-583923_1280.jpg"
   },
   
   {
      _createdAt: "2023-05-01",
      _id: 1,
      views: 59,
      author: {_id:1, name:"Jon Melen"},
      title: "Lorem ipsum dolor sit amet",
      description: "This is a description. This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.",
      category: "Lorem Ipsum",
      image:"https://cdn.pixabay.com/photo/2021/11/12/06/54/globe-6788156_1280.jpg"
   },
   {
      _createdAt: "2023-05-01",
      _id: 1,
      views: 59,
      author: {_id:1, name:"Jon Melen"},
      title: "Lorem ipsum dolor sit amet",
      description: "This is a description. This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.",
      category: "Lorem Ipsum",
      image:"https://cdn.pixabay.com/photo/2021/09/09/04/38/binary-6609473_1280.jpg"
   },
   {
      _createdAt: "2023-05-01",
      _id: 1,
      views: 59,
      author: {_id:1, name:"Jon Melen"},
      title: "Lorem ipsum dolor sit amet",
      description: "This is a description. This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.This is a description.",
      category: "Lorem Ipsum",
      image:"https://cdn.pixabay.com/photo/2016/11/17/23/29/programming-1832991_1280.png"
   },
]
*/
export default async function Home({ searchParams }: {
   searchParams: Promise<{ query?: string }>
}) {
   const query = (await searchParams).query;
   const Post = await client.fetch(EVENTS_QUERY);
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
                  Post.map((post: any) => (
                     <EventsCard key={post?._id} post={post} />
                  ))
               ) : (
                     <p className="text-center">No events found</p>
               )}                              
            </ul>
         </section>
      </>
   )
}
