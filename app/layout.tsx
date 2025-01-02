import "@/app/globals.css"

export default function layout(
   { children }: Readonly<{ children: React.ReactNode }>  
) {
   return (
      <html lang="en">
         <body className="bg-gray-900 text-white">
            <main className="font-work-sans">
               {children}
            </main>
         </body>
      </html>
   )
}
