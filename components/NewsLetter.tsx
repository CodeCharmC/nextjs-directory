import { SubscriptIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function NewsLetter() {
   return (
      <>
         <div className="flex-start gap-2">
            <h4 className="card-bigtext card-text">Subscribe to our newsletter</h4>
            <p className="text-normal">Get the latest news and updates</p>
            <form className="flex flex-col gap-2">
               <label htmlFor="email">Email</label>
               <input
                  type="email"
                  name="email"
                  placeholder="you@domain.com"
                  required
                  className="bg-gray-900 border-[1px] border-gray-800 rounded-md p-2 text-normal placeholder:text-sm"
               />
               <Button type="submit">Subscribe</Button>
            </form>
         </div>
      </>
   )
}
