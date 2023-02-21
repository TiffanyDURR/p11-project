import React, { useState } from "react";

function DropDown(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="description">
      <div
        className="titledes"
        onClick={() => {
          setIsOpen((prevState) => {
            return !prevState;
          });
        }}
      >
        <span>{props.titledes}</span>
        <button
          className="fas fa-chevron-down"
          style={{ transform: isOpen && "rotate(180deg)" }}
        ></button>
      </div>
      {isOpen && <div className="contentdes">{props.contentdes}</div>}
    </div>
  );
}

export default DropDown;
