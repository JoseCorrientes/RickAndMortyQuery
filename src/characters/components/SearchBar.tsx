import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { useSearchParams } from "react-router";

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState<string>(searchParams.get("name") || "");

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      const currentNameInURL = searchParams.get("name") || "";

      if (search !== currentNameInURL) {
        const newParams = new URLSearchParams(searchParams);

        if (search.trim()) {
          newParams.set("name", search);
        } else {
          newParams.delete("name");
        }

        newParams.set("page", "1");
        setSearchParams(newParams, { replace: true });
      }
    }, 800);

    return () => clearTimeout(timeoutID);
  }, [search, setSearchParams, searchParams]);

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="mb-6 flex justify-center items-center ">
      <input
        className="h-10 py-2 px-4 border-2 bg-white rounded-l-md rounded-r-none border-gray-500 text-black outline-none min-w-[150px] md:w-[250px]"
        placeholder="Buscar..."
        value={search}
        onChange={onHandleChange}
      />
      <div className="bg-gray-600 border-2 border-l-0 border-gray-500 rounded-r-md">
        <BsSearch className="p-2 w-10 h-10 text-white" />
      </div>
    </div>
  );
};
