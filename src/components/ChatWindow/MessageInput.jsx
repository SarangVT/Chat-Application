import React, { useState } from "react";
import sendIcon from "../../assets/images/sendIcon.png"
import { useChats } from "../context/ChatPreviewContext";

const MessageInput = () => {
    const [curMessage, setCurMessage] = useState("");
    const {addNewMessage, recipient} = useChats();
    const handleInput = (e)=>{
        setCurMessage(e.target.value);
    }
    return (
        <div className={"flex flex-row w-[100%]"}>
        <input type="text" placeholder="Type a message..." onChange={handleInput}
                className={"flex-1 focus:outline-none bg-black placeholder-white text-white rounded-md h-[50px] mb-0 border-t-5 border-t-white pl-5"}/>
        <button className={"w-[55px] p-2 rounded-full border-2 border-black bg-[#578E7E] pr-2 ml-1"}
        disabled = {curMessage.trim()==""}
        >
            <img src={sendIcon}  alt="Send" className={"rounded-full h-[30px]"}/></button>
        </div>
    );
}

export default MessageInput;