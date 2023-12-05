import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import classes from "./CustomSelect.module.scss";
import Icon from "pages/icons/Icon";

const CustomSelect = ({ options, onSelect, value: selectedOption = null, placeholder = "Select" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const selectRef = useRef(null);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // useEffect(() => {
  //   if (externalValue !== undefined) {
  //     setSelectedOption(externalValue);
  //   }
  // }, [externalValue]);

  useEffect(() => {
    if (selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      const zIndex = window.getComputedStyle(selectRef.current).getPropertyValue("z-index");
      setCoords({
        x: rect.x,
        y: rect.bottom,
        width: rect.width,
        zIndex: zIndex,
      });
    }
  }, [selectRef, isOpen]);

  return (
    <div ref={selectRef} className={classes["select"]} onClick={() => setIsOpen(!isOpen)}>
      <div className={classes["selectedOption"]}>
        <div>{options.find((el) => el.value === selectedOption)?.label || placeholder}</div>
        <Icon name={isOpen ? "ARROW_DOWN_SIGN_TO_NAVIGATE" : "ARROW_DOWN_SIGN_TO_NAVIGATE"} iconsize="15px" />
      </div>

      {isOpen &&
        createPortal(
          <div
            className={classes["options"]}
            style={{
              position: "absolute",
              top: coords.y,
              left: coords.x,
              width: coords.width,
              zIndex: coords.zIndex + 1,
            }}
          >
            {options.map((option, index) => (
              <div key={index} className={classes["option"]} onClick={() => handleSelect(option)}>
                {option.label}
              </div>
            ))}
          </div>,
          document.body
        )}
    </div>
  );
};

export default CustomSelect;
