import React from "react";

export const DefaultInputField = (props) => {
  return (
    <>
      <div className="w-full">
        {(props.Label || props.Action) && (
          <div className="flex flex-row justify-between w-full mb-1">
            <label className="h-5  font-medium disabled:text-neutral-300 text-sm leading-5">
              {props.Label}
            </label>
            <span className="text-primary-500 font-medium disabled:text-neutral-300">
              {props.Action}
            </span>
          </div>
        )}
        <div className="relative">
          <input
            type="text"
            placeholder={props.PlaceHolder}
            className={`w-full h-12 border rounded-md border-neutral-300 pl-12 pr-${props.Addon||props.AddonIcon?["100px"]:"4"} placeholder:text-neutral-300 font-normal focus:border-primary-500 outline-none focus:outline-none focus:ring-4 text-sm focus:ring-primary-100 caret-primary-500`}
          />

          <div className="flex flex-row absolute right-4 top-3">
            <span className="text-neutral-300 text-sm leading-5">
              {props.Addon}
            </span>
            {props.AddonIcon && (
              <img
                src={props.AddonIcon}
                alt=""
                className="h-6 w-6 ml-1 rounded"
              />
            )}
          </div>
          {props.PlaceHolderIcon && (
            <img
              src={props.PlaceHolderIcon}
              alt=""
              className="h-6 w-6 rounded absolute top-3 left-4"
            />
          )}
        </div>
        {props.HelperText && (
          <p className="w-full pt-2 text-neutral-500 font-normal group-disabled:text-neutral-300">
            {props.HelperText}
          </p>
        )}
      </div>
    </>
  );
};

export const DestructiveInputField = (props) => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-row justify-between w-full">
          <label className="h-5  font-medium">{props.Label}</label>
          <span className="text-primary-500 font-medium">{props.Action}</span>
        </div>
        <div className="relative mt-1">
          {props.PlaceHolderIcon ? (
            <input
              type="text"
              placeholder={props.PlaceHolder}
              className="w-full h-12 border  rounded-md border-destructive-500 pl-12 pr-[100px] placeholder:text-neutral-300 font-normal focus:border-destructive-500 outline-none focus:outline-none focus:ring-4 focus:ring-destructive-100 caret-destructive-500"
            />
          ) : (
            <input
              type="text"
              placeholder={props.PlaceHolder}
              className="w-full h-12 border  rounded-md border-destructive-500 pl-4 pr-[100px] placeholder:text-neutral-300 font-normal focus:border-destructive-500 outline-none focus:outline-none focus:ring-4 focus:ring-destructive-100 caret-destructive-500"
            />
          )}

          <div className="flex flex-row absolute right-4 top-3">
            <span className="text-neutral-300">{props.Addon}</span>
            {props.AddonIcon && (
              <img
                src={props.AddonIcon}
                alt=""
                className="h-6 w-6 rounded ml-1"
              />
            )}
          </div>
          {props.PlaceHolderIcon && (
            <img
              src={props.PlaceHolderIcon}
              alt=""
              className="h-6 w-6 rounded absolute top-3 left-4"
            />
          )}
        </div>

        <p className="w-full pt-2 text-destructive-500 font-normal">
          {props.HelperText}
        </p>
      </div>
    </>
  );
};

export const DisabledInputField = (props) => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-row justify-between w-full">
          <label className="h-5 text-neutral-300 font-medium">
            {props.Label}
          </label>
          <span className="text-neutral-300 font-medium">{props.Action}</span>
        </div>
        <div className="relative mt-1">
          {props.PlaceHolderIcon ? (
            <input
              type="text"
              placeholder={props.PlaceHolder}
              className="w-full h-12 border text-neutral-300 rounded-md border-neutral-300 pl-12 pr-[100px] placeholder:text-neutral-300 font-normal focus:border-neutral-300 outline-none focus:outline-none focus:ring-0 focus:ring-primary-100"
            />
          ) : (
            <input
              type="text"
              placeholder={props.PlaceHolder}
              className="w-full h-12 border text-neutral-300 rounded-md border-neutral-300 pl-4 pr-[100px] placeholder:text-neutral-300 font-normal focus:border-neutral-300 outline-none focus:outline-none focus:ring-0 focus:ring-primary-100"
            />
          )}
          <div className="flex flex-row absolute right-4 top-3">
            <span className="text-neutral-300">{props.Addon}</span>
            {props.AddonIcon && (
              <img
                src={props.AddonIcon}
                alt=""
                className="w-6 h-6 rounded ml-1"
              />
            )}
          </div>

          {props.PlaceHolderIcon && (
            <img
              src={props.PlaceHolderIcon}
              alt=""
              className="h-6 w-6 rounded absolute top-3 left-4"
            />
          )}
        </div>

        <p className="w-full pt-2 text-neutral-300 font-normal group-disabled:text-neutral-300">
          {props.HelperText}
        </p>
      </div>
    </>
  );
};
