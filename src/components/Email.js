import React from "react";
import PropTypes from "prop-types";

import "./Email.css";

function Email(props) {
  return (
    <div className="email">
      <span>{props.name}</span>
    </div>
  );
}

Email.propTypes = {
  name: PropTypes.string.isRequired
};

export default Email;
