import React from "react";
import "./Button.scss";

interface IButton {
  indexPage: number;
  index: number;
  pageSwitch: (index: number) => void;
  handleClick: () => void;
}

export const Button: React.FC<IButton> = ({ indexPage, index, pageSwitch, handleClick }) => {
  return (
    <button
      type="button"
      className={indexPage === index ? "btn active-btn" : "btn page-btn"}
      onClick={() => {
        handleClick();
        pageSwitch(index);
      }}>{index}
    </button>
  );
};