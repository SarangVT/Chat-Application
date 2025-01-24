import React from "react";

const SearchBar = (props) => {
    return (
        <input type="text" placeholder="Search or start a new chat" className={"bg-[#393E46] text-white focus:outline-none w-[95%] p-2 pl-5 rounded-lg border-2 focus:bg-black"}/>
    );
}

export default SearchBar;