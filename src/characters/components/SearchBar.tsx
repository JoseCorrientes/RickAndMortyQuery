import { useEffect, useState, type SetStateAction } from "react";
import { BsSearch } from "react-icons/bs";
import { useSearchParams } from "react-router";

export const SearchBar = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      const nameInURL = searchParams.get("name") || "";
      if (search !== nameInURL) {
        const params = new URLSearchParams(searchParams);
        if (search) {
          params.set("name", search);
        } else {
          params.delete("name");
        }
        params.set("page", "1");
        setsearchParams(params);
      }
    }, 1500);

    return () => clearTimeout(timeoutID);
  }, [search, searchParams, setsearchParams]);

  const onHandleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };

  return (
    <div className=" mb-6 flex justify-center items-center gap-2 ">
      <input
        className="h-10 py-2 px-4 border-2 bg-white rounded-l-md rounded-r-none border-gray-500 "
        placeholder="Buscar"
        value={search}
        onChange={onHandleChange}
      ></input>
      <BsSearch className="cursor-pointer p-2 w-10 h-10 border-2 rounded-r-md rounded-l-none  text-white hover:bg-gray-600 hover:text-gray-400 hover:p-3" />
    </div>
  );
};
