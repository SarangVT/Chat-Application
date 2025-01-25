import React from "react";

const RecMsg = (props) => {
    return (
        <div className={"text-white p-3 bg-black flex flex-col max-w-[70%] rounded-lg w-max"}>
            <p>{props.name}</p>
            <p>{props.phoneno}</p>
            <p>{props.msg}</p>
            <div className={"flex justify-end items-end"}><p className={"justify-end"}>{props.time}</p></div>
        </div>
    );
    
}

export default RecMsg;