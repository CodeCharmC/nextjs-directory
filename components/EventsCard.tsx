import { formatDate } from "@/lib/utils"
import { Eye, HashIcon, Image } from "lucide-react"
import Link from "next/link"

// export default function EventsTypeCard() {
// }

export default async function EventsCard(
   { post }: { post: EventsTypeCard }   
) {
   const { _createdAt, _id, views, author: {_id:authorId, name }, category, description, image, title } = await post
   return (
      <li className="card-container card-text ">

         <div className="flex-between pt-2 pb-2 card-normaltext">
            <p className="bg-gray-800 rounded-lg p-2 line-clamp-1">{formatDate(_createdAt)}</p>
            <div className="flex-center flex-row gap">
               <Eye width={40} className="text-gray-200"/>
               <p>{views}</p>
            </div>
         </div>

         <div className="flex-between gap-2">
            <div className="flex-start font-semibold text-lg pt-2 pb-2">
               <Link href={`/user/${authorId}`}>
                  <p className="card-bigtext line-clamp-1">{name}</p>
               </Link>
               <Link href={`/events/${_id}`}>
                  <p className="card-extrabigtext">{title}</p>
               </Link>                       
            </div>
            <div className="rounded-full flex-center ">
               <Link href={`/user/${authorId}`}>
                  <Image width={50} xHeight={50} className="text-gray-200 rounded-full" />
               </Link>
            </div>
         </div>
         
         <Link href={`/events/${_id}`}>
            <p className="card-normaltext line-clamp-3 mt-2 mb-2">{description}</p>
         </Link>          

         <div className="flex-center bg-transparent mt-2 mb-2 w-[100%] h-[200px]">
            <img src={image} alt="Events Image" className="w-full h-full object-cover" />
         </div>

         <div className="flex-between pt-2 pb-2 gap-2">
            <Link href={`/?query=${category.toLowerCase()}`} className="card-normaltext flex-center flex-row gap">
               <HashIcon width={12} className="text-gray-200" />
               <p>{category}</p>
            </Link>            
            
            <button className="details-btn">
               <Link href={`/events/${_id}`}>Details</Link>
            </button>
         </div>
      </li>
   )
}
