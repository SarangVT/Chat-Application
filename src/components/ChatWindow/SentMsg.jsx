import React from "react";
import {FaCheckDouble } from 'react-icons/fa';

const SentMsg = (props) => {
    return (
        <div className={"text-white p-3 bg-[#0D7C66] flex-col max-w-[70%] rounded-lg w-max flex ml-auto mr-4"}>
            <p>{props.name}</p>
            <p>{props.phoneno}</p>
            <p>{props.msg}</p>
            <div className={"flex justify-end items-end"}><p className={"justify-end flex items-center"}>{props.time}&nbsp; {<FaCheckDouble className={"text-blue-900 w-[10px] h-[10px]"}></FaCheckDouble>}</p></div>
        </div>
    );
    
}

export default SentMsg;