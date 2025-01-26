import React from "react";
import SearchBar from "./searchbar";
import ChatPreview from "./ChatPreview";
import {useChats} from "../context/ChatPreviewContext";

const Panel = () => {
    const {recipient, messages, setCurRecipient} = useChats();
    const editRecipient =(person)=>{
        setCurRecipient(person);
        
    }
    return (
        <div className={"bg-[#3D3B40] p-1 h-full  w-[300px]"}>
            <div className={"flex flex-col"}>
                <div className={"bg-[#3D3B40] text-white p-2 font-bold h-[6vh]"}>Chats</div>
                <SearchBar className={"h-[9vh]"}/>
            </div>
            <div className={"overflow-y-scroll h-[82vh] scroll-smooth scroll-custom"}>
                {recipient.map((person, index)=>(
                    <ChatPreview key={index} title={person} msg={messages[person][0].content} onClick={()=>editRecipient(person)}/>
                ))}
            </div>
        </div>
    );
}
export default Panel;