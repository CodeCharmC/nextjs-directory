import Link from "next/link"
import Image from "next/image"
import { auth, signIn, signOut } from "@/auth"
import Form from "next/form"

export default async function Navbar() {
   const session = await auth()
   
   return (
      <header className="nav-container">
         <nav className="navbar">
            <Link href="/" className="flex-center flex-row">
               <Image
                  src="/logo.png"
                  alt="Logo"
                  width={60}
                  height={60}
                  priority
                  className="rounded-full"
               />
               <h2 className="plain-line">Directory</h2>
            </Link>

            <div className="flex-center flex-row gap-4 pr-5">
               {session && session?.user ? (
                  <>
                     <Link href="/events/create">
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
                     <Link
                        href={`user/${session?.user?.id}`}
                        className=" flex flex-row gap-2 items-center"
                     >
                        <span>{session?.user?.name}</span>
                        <span>
                           <img
                              src={session?.user?.image || ""}
                              alt="user"
                              width={27}
                              height={27}
                              className="rounded-full "
                           />
                        </span>                        
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
