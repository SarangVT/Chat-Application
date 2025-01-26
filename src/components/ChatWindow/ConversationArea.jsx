import React from "react";
import RecMsg from "./ReceivedMsg";
import SentMsg from "./SentMsg";

const ConversationArea = (props) => {
    return (
        <div className={"space-y-6"}>
            <SentMsg msg="Happy Republic Day!!! Happy Republic Day!!! Happy Republic Day!!! Happy Republic Day!!! Happy Republic Day!!!" time="09:50 PM"/>
            {props.message.map((msg)=>(
                    <RecMsg msg={msg} time="09:50 PM"/>
                ))
            }

        </div>
    );
}

export default ConversationArea;