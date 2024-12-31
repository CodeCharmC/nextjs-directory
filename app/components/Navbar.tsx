import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
   return (
      <header className="px-5 py-4 bg-red-500 shadow-sm font-sans">
         <nav className="flex items-center justify-between">
            <Link href="/">
               <Image
                  src="/directory.png"
                  alt="Logo"
                  width={80}
                  height={80}
                  priority
               />
            </Link>
         </nav>
      </header>
   )
}
