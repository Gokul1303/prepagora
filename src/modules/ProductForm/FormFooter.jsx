import React from "react";
import { ICONS } from "../../assets";

const FormFooter = ({}) => {
  return (
    <div className="mt-8 pt-5 border-t border-[var(--border)] flex items-end justify-end gap-3">
      <button
        type="button"
        className=" items-center px-4 py-2 border border-[#32383E]  text-sm font-[550] rounded-full text-[var(--title)] bg-white"
      >
        Save & Continue Later
      </button>

      <button
        type="button"
        className="flex items-center justify-center py-2 px-4 text-sm font-[550] rounded-full text-white bg-[#D92C27] gap-2"
      >
        Continue
        <img src={ICONS.Vector} alt="Vector" className="w-3 h-3" />
      </button>
    </div>
  );
};

export default FormFooter;
