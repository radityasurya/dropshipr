import React from "react";
import Email from "./Email";

function EmailList(props) {
  return (
    <div>
      {props.emails.map(e => (
        <Email key={e.id} name={e.name} />
      ))}
    </div>
  );
}

export default EmailList;
