import React from "react";
import PanelHeader from "./panelheader";
import SearchBar from "./searchbar";
import ChatPreview from "./ChatPreview";


const Panel = () => {
    return (
        <div className={"w-[380px] bg-[#3D3B40] p-1"}>
            <PanelHeader/>
            <SearchBar/>
            <ChatPreview/>
            <ChatPreview/>
        </div>
    );
}
export default Panel;