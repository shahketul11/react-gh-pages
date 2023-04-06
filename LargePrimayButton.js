import React, { useState } from "react";

export const LargePrimayButton = (props) => {
  const [textColor, setTextColor] = useState("shades-50");

  const [BgColor, setBgColor] = useState("primary-500");

  const [HiddenBtn, setHiddenBtn] = useState("hidden");

  const [DefaultBtn, setDefaultBtn] = useState("");

  const handleClickBtn = () => {
    setTextColor("primary-200");
    setBgColor("primary-600");
    setHiddenBtn("");
    setDefaultBtn("hidden");
  };

  return (
    <>
      <button
        className={`bg-${BgColor} h-full rounded-md hover:bg-primary-600 disabled:bg-primary-200 group w-full items-center flex justify-center`}
        onClick={handleClickBtn}
        disabled={props.disabled}
      >
        <div className="flex flex-row px-4 items-center">
          {props.LeftIconDefault && (
            <>
              <div className={`${DefaultBtn} mx-1`}>{props.LeftIconDefault}</div>
              <div className={`${HiddenBtn} mx-1`}>{props.LeftIconHover}</div>
            </>
          )}
          <span className={`text-${textColor} paragraphMediumMedium mx-1`}>
            {props.Name}
          </span>
          {props.RightIconDefault && (
            <img
              src={props.RightIcon}
              alt=""
              className="rounded mx-1 w-6 h-6"
            />
          )}

          {props.badgeText && (
            <span className="px-2.5 py-0.5 rounded-3xl text-primary-500 bg-white group-hover:text-primary-600 mx-1 group-disabled:text-primary-200">
              {props.badgeText}
            </span>
          )}
        </div>
      </button>
    </>
  );
};
