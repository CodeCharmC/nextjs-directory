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

