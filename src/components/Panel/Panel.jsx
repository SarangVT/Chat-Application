import React from "react";
import PanelHeader from "./panelheader";
import SearchBar from "./searchbar";
import ChatPreview from "./ChatPreview";


const Panel = () => {
    return (
        <div>
            <PanelHeader/>
            <SearchBar/>
            <ChatPreview/>
            <ChatPreview/>
        </div>
    );
}
export default Panel;