import React from "react";
import SearchBar from "./searchbar";
import ChatPreview from "./ChatPreview";

const Panel = () => {

    return (
        <div className={"bg-[#3D3B40] p-1 overflow-hidden h-full overflow-y-scroll scrollbar-custom w-[300px]"}>
            <div className="flex flex-row gap-3">
                <div className={"flex flex-col"}>
                    <div className={"bg-[#3D3B40] text-white p-2 font-bold"}>Chats</div>
                </div>
            </div>
            <SearchBar/>
            <ChatPreview title="Anurag Prasad" msg="Bhai, kab banayenge?"/>
            <ChatPreview title="Sarang Thakare" msg="Clone ki nahi repo"/>
            <ChatPreview title="Anshu Kumar" msg="Gradle version"/>
            <ChatPreview title="Laddu Kumar" msg="Bhai, ham barbad ho gaye!!!"/>
        </div>
    );
}
export default Panel;