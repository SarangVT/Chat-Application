import React from "react";

const SentMsg = (props) => {
    return (
        <div className={"text-white p-3 bg-[#0D7C66] flex-col max-w-[70%] rounded-lg w-max flex ml-auto mr-4"}>
            <p>{props.name}</p>
            <p>{props.phoneno}</p>
            <p>{props.msg}</p>
            <div className={"flex justify-end items-end"}><p className={"justify-end"}>{props.time}</p></div>
        </div>
    );
    
}

export default SentMsg;