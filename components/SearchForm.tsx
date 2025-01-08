import Form from "next/form";
import SearchFormQueryReset from "./SearchFormQueryReset";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

export default function SearchForm (
   { query }: { query?: string }   
) {      
   return (
      <Form action="/" className="search-form relative" scroll={false}>
         <input
            type="text"
            name="query"
            defaultValue={query}
            placeholder="Search..."
            className="search-input absolute left-0"
         />
         <div className="flex-center gap-2 absolute right-2">
            {query && <SearchFormQueryReset />}          
            <Button type="submit" className="small-btn">
               <Search width={40}/>
            </Button>
         </div>         
      </Form>
   )
}