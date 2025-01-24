import React from "react";
import sendIcon from "../../assets/images/sendIcon.png"

const MessageInput = () => {
    return (
        <div className={"flex flex-row"}>
        <div className={"w-full"}>
            <input type="text" placeholder="Type a message" 
                className={"focus:outline-none bg-black placeholder-white text-white rounded-md"}/>
        </div>
        <button className={""}>{sendIcon}</button>
        </div>
    );
}

export default MessageInput;