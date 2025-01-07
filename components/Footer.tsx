import Link from "next/link"
import Image from "next/image"
import NewsLetter from "./NewsLetter";
import SocialMidea from "./SocialMidea";

const year = new Date().getFullYear();

export default function Footer() {
   return (
      <>
         <section className="flex-col gap-4 mt-8 mb-2 max-width">

            <div className="grid grid-cols-1 md:grid-cols-4   gap-4 ">

               {/* Logo*/}
               <div className="flex-between flex-row md:flex-none md:items-start">
                  <div className="font-semibold">
                     <Link href="/" className="flex flex-row items-center">
                        <Image
                           src="/logo.png"
                           alt="Logo"
                           width={60}
                           height={60}
                           priority
                           className="rounded-full"
                        />
                        <h2 className=" plain-line">Directory</h2>
                     </Link>
                  </div>
                  <div className="md:hidden text-gray-200 w-full flex items-end justify-end gap-2 mr-4">
                     <SocialMidea />
                  </div>
               </div>

               {/*Resources*/}               
               <div className="pt-4 pl-4 md:pl-0 lg:col-span-2 grid grid-cols-3 md:grid-cols-2 gap-4 lg:grid-cols-3">

                  <div className="w-full flex-start flex-col">
                     <h4 className="font-semibold">Resources</h4>
                     <Link
                        href="/"
                        className="text-normal">
                        Home
                     </Link>
                     <Link
                        href="/events/create"
                        className="text-normal">
                        Create
                     </Link>
                     <Link
                        href="/about"
                        className="text-normal">
                        About
                     </Link>                     
                  </div>

                  <div className="w-full flex-start flex-col">
                     <h4 className="font-semibold">Resources</h4>
                     <Link
                        href="/"
                        className="text-normal">
                        Home
                     </Link>
                     <Link
                        href="/events/create"
                        className="text-normal">
                        Create
                     </Link>
                     <Link
                        href="/about"
                        className="text-normal">
                        About
                     </Link>                     
                  </div>

                  <div className="w-full flex-start flex-col">
                     <h4 className="font-semibold">Legal</h4>
                     <Link
                        href="/legal"
                        className="text-normal">
                        Privacy Policy
                     </Link>
                  </div>
               </div>               

               {/**NewsLetter */}
               <div className="mt-4 p-6 w-full bg-gray-950 min-h-[300px] flex-center flex-row rounded-md md:col-span-2 lg:col-span-1">
                  <NewsLetter />
               </div>
            </div>            

            <div className="w-full flex-between flex-row p-4">
               <div className="flex-center flex-col gap-2">
                  <p className="text-normal">© {year} MS|Directory</p>
                  <div className="hidden md:block  md:flex-center md:flex-row md:gap-2 md:text-gray-200">
                     <SocialMidea />
                  </div>
               </div>
               
               <div>
                  dark mode || light mode
               </div>
            </div>
            
         </section>
      </>
   )
}