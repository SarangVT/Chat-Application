import React, { useState } from "react";
import SearchBar from "./searchbar";
import ChatPreview from "./ChatPreview";
import {useChats} from "../context/ChatPreviewContext";

const Panel = () => {
    const {recipient, messages, curRecipient, setCurRecipient} = useChats();
    return (
        <div className={"bg-[#3D3B40] p-1 overflow-hidden h-full overflow-y-scroll scrollbar-custom w-[300px]"}>
            <div className="flex flex-row gap-3">
                <div className={"flex flex-col"}>
                    <div className={"bg-[#3D3B40] text-white p-2 font-bold"}>Chats</div>
                </div>
            </div>
            <SearchBar/>
            {recipient.map((person, index)=>(
                <ChatPreview key={index} title={person} msg={messages[person][0]} onClick={()=>setCurRecipient(person)}/>
            ))}
        </div>
    );
}
export default Panel;