import React from "react";
import ChatWindowHeader from "./ChatWindowHeader";
import MessageInput from "./MessageInput";
import ConversationArea from "./ConversationArea";

const ChatWindow  = () => {
    return (
        <div className={"relative w-full flex"}>
            <ChatWindowHeader contactName="Anurag CSE IITI"/>
            <ConversationArea/>
            <div className={"absolute bottom-0 w-full"}><MessageInput/></div>
        </div>
    );
}
export default ChatWindow;