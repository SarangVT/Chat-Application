import React, {createContext, useContext, useState} from "react";
export const ChatPreviewContext = createContext();


export const ChatPreviewContextProvider = ({children})=> {
    const [recipient, setRecipient] = useState(["Sarang Thakare", "Anurag Prasad", "Anshu Kumar", "Laddu Kumar"]);
    const [messages, setMessages] = useState(()=> {
        return recipient.reduce((allChats, individualChats)=>{
            allChats[individualChats]=["I am Iron Man..."];
            return allChats;
        },{})
    });
    const addNewMessage = (msg, curRecipient)=>{
        setMessages((prevMessages)=>({
            ...prevMessages, [curRecipient]:[...prevMessages[curRecipient], msg]
        }));
    }

    const [curRecipient, setCurRecipient] = useState("Sarang Thakare");

    return (
        <ChatPreviewContext.Provider value={{recipient, setRecipient, messages, addNewMessage, curRecipient, setCurRecipient}}>
            {children}
        </ChatPreviewContext.Provider>
    );
}

export const useChats = ()=> {
    const {recipient, setRecipient, messages, addNewMessage, curRecipient, setCurRecipient}=useContext(ChatPreviewContext);
    return {recipient, setRecipient, messages, addNewMessage, curRecipient, setCurRecipient};
}