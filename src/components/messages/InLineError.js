import React from "react";
import PropTypes from "proptypes";

const InLineError = ({ text }) => <span style={{ color: "ae5856" }}>{text}</span>;

InLineError.propTypes = {
    text: PropTypes.string.isRequired

};

export default InLineError;

