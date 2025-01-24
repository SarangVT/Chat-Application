import React from "react";
import Avatar from "../../assets/images/avatar.png";

const ChatPreview = (props) => {
    return (
        <div className={"flex flex-row gap-4 pt-4 text-white h-[75px] pl-[40px] mb-[1px]"}>
            <div><img src={Avatar} alt="Profile" className={"rounded-full w-[40px] h-[40px]"}/></div>
            <div className="flex flex-col"><div><p>Title</p></div>
            <div>Recent Message</div></div>
            <div>TimeStamp</div>
        </div>
    );
}

export default ChatPreview;