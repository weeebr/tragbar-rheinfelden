import React from "react";

export const Link = ({ label, url, onClick }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick || void 0}
    >
      {label}
    </a>
  );
};
