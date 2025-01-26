import React from "react";
import RecMsg from "./ReceivedMsg";
import SentMsg from "./SentMsg";

const ConversationArea = (props) => {
    return (
        <div className={"space-y-6"}>
            <RecMsg msg="Happy Republic Day!!! Happy Republic Day!!! Happy Republic Day!!! Happy Republic Day!!! Happy Republic Day!!!" time="09:50 PM"/>
            <RecMsg msg="Happy Republic Day!!! Happy Republic Day!!! Happy Republic Day!!!"  time="09:50 PM"/>
            <RecMsg msg="Happy Republic Day!!! Happy Republic Day!!! Happy Republic Day!!! Happy Republic Day!!! Happy Republic Day!!!" time="09:50 PM"/>
            <SentMsg msg="Happy Republic Day!!! Happy Republic Day!!! Happy Republic Day!!! Happy Republic Day!!! Happy Republic Day!!!" time="09:50 PM"/>
            <RecMsg msg="Happy Republic Day!!! Happy Republic Day!!! Happy Republic Day!!! Happy Republic Day!!! Happy Republic Day!!!" time="09:50 PM"/>
            <SentMsg msg="Happy Republic Day!!! Happy Republic Day!!! Happy Republic Day!!! Happy Republic Day!!! Happy Republic Day!!!" time="09:50 PM"/>


        </div>
    );
}

export default ConversationArea;