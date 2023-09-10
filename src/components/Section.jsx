import React from "react";

export const Section = ({ title, inner }) => {
  console.log("Section", title);
  const Inner = inner
  return (
    <div>
      <h1>{title}</h1>
      <div className="content"><Inner /></div>
    </div>
  );
};
