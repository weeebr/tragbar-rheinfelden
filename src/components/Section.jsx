import React from "react";

export const Section = ({ title, children }) => {
  console.log("Section", title);
  return (
    <div>
      <h1>{title}</h1>
      <div className="content">{children}</div>
    </div>
  );
};
