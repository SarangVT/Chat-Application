import React from "react";
import ChatWindowHeader from "./ChatWindowHeader";
import MessageInput from "./MessageInput";
import ConversationArea from "./ConversationArea";
import { useChats } from "../context/ChatPreviewContext";

const ChatWindow  = () => {
    const {curRecipient} = useChats();
    return (
        <div className={"w-full flex flex-col"}>
            <ChatWindowHeader contactName={curRecipient}/>
            <div className={"overflow-y-scroll scrollbar-custom flex-1"}>
                <ConversationArea msg=""/>
            </div>
            <div className={"sticky bottom-0 w-full h-[50px]"}><MessageInput/></div>
        </div>
    );
}
export default ChatWindow;