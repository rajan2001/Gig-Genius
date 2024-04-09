import React from "react";

function AvatarWithText({ heading, subheading }) {
  return (
    <div className="text-xl text-stone-700">
      {heading} <span className="text-stone-500">{subheading}</span>
    </div>
  );
}

export default AvatarWithText;
