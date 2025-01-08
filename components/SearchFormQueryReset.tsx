"use client"

import { X } from "lucide-react";
import Link from "next/link"
import { Button } from "./ui/button";

export default function SearchFormQueryReset() {
   const reset = () => {
      const form = document.querySelector(".search-form") as HTMLFormElement;

      if (form) form.reset();
   }
   return (
      <Button type="reset" onClick={reset} className="small-btn" asChild>
         <Link href="/">
            <X width={40} />
         </Link>
      </Button>
   )
}