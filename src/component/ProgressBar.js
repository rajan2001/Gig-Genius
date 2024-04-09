import React from "react";

function ProgressBar({ progress }) {
  const value = (progress / 4) * 100;
  return (
    <div className={` mt-12 w-3/4 bg-gray-300 rounded-full`}>
      <div className={`h-[5px] bg-green-800 w-[${value}%]  rounded-full`}></div>
    </div>
  );
}

export default ProgressBar;
