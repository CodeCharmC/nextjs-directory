

export default function page({ params }: { params: { id: string } }) {
   const { id } = params;
   return (
      <>
         <h1 className="text-3xl font-bold  flex justify-center pt-3">
            User {id} Details Page
         </h1>         
      </>
   )
}
