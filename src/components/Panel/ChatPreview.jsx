import React from "react";
import Avatar from "../../assets/images/avatar.png";

const ChatPreview = (props) => {
    return (
        <div className={"flex flex-row gap-4 pt-3 text-white h-[75px] pl-[10px] mb-[1px] pb-2 cursor-pointer"}
        onClick={props.onClick}>
            <div><img src={Avatar} alt="Profile" className={"rounded-full w-[40px] h-[40px]"}/></div>
            <div className="flex flex-col"><div><p>{props.title}</p></div>
            <div>{props.msg}</div></div>
            <div>{props.time}</div>
        </div>
    );
}

export default ChatPreview;