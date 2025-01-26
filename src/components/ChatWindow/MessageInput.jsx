import React, { useEffect, useState} from "react";
import sendIcon from "../../assets/images/sendIcon.png"
import { useChats } from "../context/ChatPreviewContext";
import EmojiPicker from 'emoji-picker-react';
import Emoji from "../../assets/images/emoji.png"

const MessageInput = () => {
    const {addNewMessage, curRecipient, setCurTypingMsg, curTypingMsg} = useChats();

    const handleInput = (e)=>{
        setCurTypingMsg(e.target.value, curRecipient);
    }
    useEffect(()=>{
        if(curRecipient){
            setCurTypingMsg(curTypingMsg[curRecipient], curRecipient);
        }
    },[setCurTypingMsg, curRecipient, curTypingMsg]);

    const onMsgSend = ()=>{
        if(!curTypingMsg[curRecipient].trim()==""){
        addNewMessage(curTypingMsg[curRecipient], curRecipient);
        setCurTypingMsg("", curRecipient);
        }
    }

    const handleEnterKey = (e)=>{
        if(e.key==='Enter'){
            e.preventDefault();
            onMsgSend();
        }
    }
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleEmojiClick = (emojiObj) => {
        setCurTypingMsg(curTypingMsg[curRecipient]+emojiObj.emoji, curRecipient);
        setShowEmojiPicker(false);
    }
    return (
        <div className={"flex flex-row w-[100%] relative"}>
        <button className={"text-white z-100"} onClick={()=>setShowEmojiPicker(prev=>!prev)}>
            <img src={Emoji}  alt="Send" className={"rounded-md h-[40px] mr-2"}/>
        </button>
        <div className={"absolute z-50"}>
            {showEmojiPicker && <EmojiPicker searchDisabled={true} onEmojiClick={handleEmojiClick} className={"bottom-[400px] left-[40px]"}/>}
        </div>

        <input type="text" placeholder="Type a message..." onChange={handleInput} value={curTypingMsg[curRecipient]} onKeyDown={handleEnterKey}
                className={"flex-1 focus:outline-none bg-black placeholder-white text-white rounded-md h-[50px] mb-0 border-t-5 border-t-white pl-5"}/>
        <button className={"w-[55px] p-2 rounded-full border-2 border-black bg-[#578E7E] pr-2 ml-1"}
        disabled = {!curTypingMsg[curRecipient].trim()===""}
        onClick={onMsgSend}
        >
            <img src={sendIcon}  alt="Send" className={"rounded-full h-[30px]"}/></button>
        </div>
    );
}

export default MessageInput;