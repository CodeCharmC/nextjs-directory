import Link from "next/link"
import Image from "next/image"
import { auth, signIn, signOut } from "@/auth"
import Form from "next/form"

export default async function Navbar() {
   const session = await auth()
   
   return (
      <header className="px-5 py-2
       shadow-sm sticky top-0 z-50 border-gray-800 border-b bg-gray-900">
         <nav className="flex items-center justify-between max-w-screen-xl mx-auto ">
            <Link href="/" className="flex flex-row items-center">
               <Image
                  src="/logo.png"
                  alt="Logo"
                  width={60}
                  height={60}
                  priority
                  className="rounded-full"
               />
               <h2>| Directory</h2>
            </Link>

            <div className="flex flex-row items-center gap-4">
               {session && session?.user ? (
                  <>
                     <Link href="/startup/create">
                        <span>Create</span>
                     </Link>
                     <Form action={async () => {
                        "use server"
                        await signOut({redirectTo:"/"})
                     }}>
                        <button type="submit">
                           <span>Log Out</span>
                        </button>
                     </Form>
                     <Link href={`user/${session?.user?.id}`}>
                        <span>{session?.user?.name}</span>
                     </Link>
                  </>
               ) : (
                     <>
                        <Form action={async () => {
                           "use server"
                           await signIn("github")
                        }}>
                           <button type="submit">
                              <span>Sign In</span>
                           </button>
                        </Form>
                     </>
               )}
            </div>
         </nav>
      </header>
   )
}
