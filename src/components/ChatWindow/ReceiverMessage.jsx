import React from "react";

const RecMsg = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.phoneno}</p>
            <p>{props.msg}</p>
            <p>{props.read}</p>
        </div>
    );
    
}