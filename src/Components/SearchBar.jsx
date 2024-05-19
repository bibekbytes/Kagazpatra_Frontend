import React from "react";
import { CommandKey, SearchIcon } from "./VectorGraphics";

const SearchBar = () => {
    return (
        <>
            <div className=" h-[39px] w-[207px] bg-white rounded-lg flex flex-row justify-evenly items-center gap-x-3 pl-4 pr-4 border">
                <SearchIcon />
                <input type="text" placeholder="Search" className="font-poppins font-medium text-lg w-full" />
                <CommandKey />
            </div>
        </>
    );
}

export default SearchBar;