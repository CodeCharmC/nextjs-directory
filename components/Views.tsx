import { client } from "@/sanity/lib/client";
import Dot from "./Dot";
import { EVENTS_VIEWS_QUERY } from "@/sanity/lib/queries";
import { formatViews } from "@/lib/utils";
import { writeClient } from "@/sanity/lib/write-client";

export default async function Views(
   { id }: { id: string }
) {
   const { views: totalViews } = await client.withConfig({ useCdn: false }).fetch(EVENTS_VIEWS_QUERY, { id });

   await writeClient
      .patch(id)
      .set({ views: totalViews + 1 })
      .commit();
   
   return (
      <div className="flex justify-end items-center mt-5 fixed bottom-3 right-3">
         <div className="absolute -top-2 -right-2 ">
            <Dot/>
         </div>
         <p className="font-medium text-[16px] bg-gray-950 px-4 py-2 rounded-lg capitalize">
            <span> {formatViews(totalViews)}</span>
         </p>

      </div>
   )
}
