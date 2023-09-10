import React from "react";

export const InfoBox = ({ title, text }) => {
  return (
    <div>
        <p>{title}</p>
        <span>{text}</span>
    </div>
  );
};
