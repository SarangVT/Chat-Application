import React from "react";
import Avatar from "../../assets/images/avatar.png";

const ChatWindowHeader = (props) => {
    return(
        <div className={"flex flex-row gap-8 p-2 text-white font-semibold pt-2 w-full"}>
            <div><img src={Avatar} alt="Avatar" className={"rounded-full w-[40px] h-[40px]"}/></div>
            <div className="pt-2">{props.contactName}</div>
        </div>
    );
}

export default ChatWindowHeader;