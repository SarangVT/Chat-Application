import React, {useState} from "react";
import SearchBar from "./searchbar";
import ChatPreview from "./ChatPreview";

const Panel = () => {
    const [panel, togglePanel] = useState(1);

    return (
        <div className={`${panel ? 'w-[380px]': 'w-0'} bg-[#3D3B40] p-1 overflow-hidden`}>
            <div className="flex flex-row gap-3">
                <div className={"flex flex-col"}>
                    
                    <div className={"bg-[#3D3B40] text-white p-2"}>Chats</div>
                </div>
            </div>
            <SearchBar/>
            <ChatPreview title="Anurag Prasad" msg="Bhai, kab banayenge?"/>
            <ChatPreview title="Sarang Thakare" msg="Clone ki nahi repo"/>
            <ChatPreview title="Anshu Kumar" msg="Tailwind, tum to react use kar rahe the na?"/>
            <ChatPreview title="Laddu Kumar" msg="Bhai, ham barbad ho gaye!!!"/>
        </div>
    );
}
export default Panel;