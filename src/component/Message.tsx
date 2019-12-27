import React from "react";
import MessageHOC from "./Hoc";

const Example = (props: any): any => (
  <p>
    {props.name}, {props.message}
  </p>
);

const Message = MessageHOC(Example);

export default Message;
