import { useState } from "react";
type User={
    id:number,
    name:string
}
type Users=User[]

const useSearch = (items:Users, filterKey:keyof User) => {
  const [query, setQuery] = useState<string>("");

  const filteredItems:Users = items.filter((item) => {
    const value = item[filterKey];
    if(typeof value==="string"){
        return value.toLowerCase().includes(query?.toLowerCase());
    }
  });
  return { query, setQuery, filteredItems };
};

export default useSearch;
