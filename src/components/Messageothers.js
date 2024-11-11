import React from "react";

const Messageothers = ({props,name}) => {
   if(props.chat.isGroupChat)
   {
    name=props.sender.name
   }
  return (
    <div className="other-message-container"  key={props._id}>
      <div className="conversation-container">
        <p className="c-icon">{name[0]}</p>
      </div>
      <div className="other-text-content">
        <p className="c-name">{name}</p>
        <p className="othermsg">{props.content} </p>
      </div>
    </div>
  );
};

export default Messageothers;
