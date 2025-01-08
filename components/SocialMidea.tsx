import Link from "next/link"
import { Facebook, Linkedin, Twitter } from "lucide-react"

export default function SocialMidea() {
   return (
      <>
         <Link
            href="#"
            className="text-normal"
         >
            <Facebook  width={22} height={22} className="text-gray-200"/>
         </Link>
         <Link
            href="#"
            className="text-normal"
         >
            <Linkedin  width={22} height={22} className="text-gray-200"/>
         </Link>
         <Link
            href="#"
            className="text-normal"
         >
            <Twitter  width={22} height={22} className="text-gray-200"/>
         </Link> 
      </>
   )
}



{/* // <div className="w-full flex-start flex-col hidden sm:block"> <div className="hidden md:block">
            <h4 className="font-semibold">Social Media</h4>
            <div className="flex-start flex-row">
               <Link
                  href="#"
                  className="text-normal"
               >
                  <Facebook  width={22} height={22} className="text-gray-200"/>
                  Facebook
               </Link>
            </div>
            <div className="flex-start flex-row">
               <Link
                  href="#"
                  className="text-normal"
               >
                  <Linkedin  width={22} height={22} className="text-gray-200"/>
                  Linkedin
               </Link>
            </div>
            <div className="flex-start flex-row">
               <Link
                  href="#"
                  className="text-normal"
               >
                  <Twitter  width={22} height={22} className="text-gray-200"/>
                  Facebook
               </Link>
            </div>                     
         </div> */}