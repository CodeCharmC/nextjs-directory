import NextAuth from "next-auth"

declare module "next-auth" { 
   interface User {
      name: string
      email: string
      image: string
   }
   interface Profile {
      id: string
      login: string
      bio: string
   }   
   interface Session { 
      id: string
   }
   interface Jwt { 
      id: string
   }
}