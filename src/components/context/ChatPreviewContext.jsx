import React, {createContext, useContext, useState} from "react";
import formatedTime from "./timeExtractor";
export const ChatPreviewContext = createContext();


export const ChatPreviewContextProvider = ({children})=> {
    const [recipient, setRecipient] = useState(["Sarang Thakare", "Anurag Prasad", "Anshu Kumar", "Laddu Kumar","ABC", "CDE", "FGH", "IJK", "LMN", "OPQ", "RST", "UVW", "XYZ"]);
    const [messages, setMessages] = useState(()=> {
        return recipient.reduce((allChats, individualChats)=>{
            allChats[individualChats]=[{
                content:"I am Iron Man...",
                time:"11:30 PM",
                isRead: true,
            }];
            return allChats;
        },{})
    });
    const addNewMessage = (msg, curRecipient)=>{
        const date = new Date();
        setMessages((prevMessages)=>({
            ...prevMessages, [curRecipient]:[...prevMessages[curRecipient], {content:msg, time:formatedTime(date), read: false}]
        }));
    }
    const [curTypingMsg, editCurTypingMsg] = useState(()=>{
        return recipient.reduce((allTypingMessages, receiver) => {
            allTypingMessages[receiver] = "";
            return allTypingMessages;
        }, {});
    });
    const setCurTypingMsg = (msg, curRecipient)=>{
        editCurTypingMsg((curTypingMsg)=>({...curTypingMsg,[curRecipient]:msg}))
    };
    const [curRecipient, setCurRecipient] = useState("Sarang Thakare");
    return (
        <ChatPreviewContext.Provider value={{recipient, setRecipient, messages, addNewMessage, curRecipient, setCurRecipient, curTypingMsg,setCurTypingMsg}}>
            {children}
        </ChatPreviewContext.Provider>
    );
}

export const useChats = ()=> {
    const {recipient, setRecipient, messages, addNewMessage, curRecipient, setCurRecipient, curTypingMsg, setCurTypingMsg}=useContext(ChatPreviewContext);
    return {recipient, setRecipient, messages, addNewMessage, curRecipient, setCurRecipient, curTypingMsg, setCurTypingMsg};
}