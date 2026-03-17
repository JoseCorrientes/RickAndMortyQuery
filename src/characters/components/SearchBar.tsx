import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export const SearchBar = () => {
  const [search, setSearch] = useState("");

  const onHandleChange = (e) => {
    console.log(e.target.value);
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
