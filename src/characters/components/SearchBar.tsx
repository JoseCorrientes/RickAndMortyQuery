import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useSearchParams } from "react-router";

export const SearchBar = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  const [search, setSearch] = useState<string>(searchParams.get("name") || "");

  useEffect(() => {
    const name = searchParams.get("name") || "";
    if (name !== search) setSearch(name);
  }, [searchParams]);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      const nameInURL = params.get("name") || "";

      if (search !== nameInURL) {
        if (search) {
          params.set("name", search);
          params.set("page", "1");
        } else {
          params.delete("name");
          params.set("page", "1");
        }
        setsearchParams(params, { replace: true });
      }
    }, 800);

    return () => clearTimeout(timeoutID);
  }, [search]);

  const onHandleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };

  return (
    <div className=" mb-6 flex justify-center items-center ">
      <input
        className="h-10 py-2 px-4 border-2 bg-white rounded-l-md rounded-r-none border-gray-500 "
        placeholder="Buscar"
        value={search}
        onChange={onHandleChange}
      ></input>
      <BsSearch className="p-2 w-10 h-10 border-2 rounded-r-md rounded-l-none  text-white" />
    </div>
  );
};
