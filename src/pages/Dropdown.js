import React, { useState } from "react";
const Dropdown = () => {
  return function DropDown(props) {
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
          <button className="fas fa-chevron-down"></button>
        </div>
        {isOpen && <div className="contentdes">{props.contentdes}</div>}
      </div>
    );
  };
};

export default Dropdown;
