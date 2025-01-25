import React from "react";
import ChatWindowHeader from "./ChatWindowHeader";
import MessageInput from "./MessageInput";
import ConversationArea from "./ConversationArea";

const ChatWindow  = () => {
    return (
        <div className={"w-full flex flex-col"}>
            <ChatWindowHeader contactName="Anurag CSE IITI"/>
            <div className={"overflow-y-scroll scrollbar-custom flex-1"}>
                <ConversationArea/>
            </div>
            <div className={"sticky bottom-0 w-full h-[50px]"}><MessageInput/></div>
        </div>
    );
}
export default ChatWindow;