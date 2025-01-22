import React from "react";
import ChatWindowHeader from "./ChatWindowHeader";
import MessageInput from "./MessageInput";
import ConversationArea from "./ConversationArea";

const 
ChatWindow  = () => {
    return (
        <div>
            <ChatWindowHeader/>
            <ConversationArea/>
            <MessageInput/>
        </div>
    );
}
export default ChatWindow;