import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
   return (
      <header className="px-5 py-4 shadow-sm sticky top-0 z-50 border-gray-800 border-b bg-gray-900">
         <nav className="flex items-center justify-between max-w-screen-xl mx-auto ">
            <Link href="/" className="flex flex-row items-center">
               <Image
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  priority
                  className="rounded-full"
               />
               <h2>| Directory</h2>
            </Link>
         </nav>
      </header>
   )
}
