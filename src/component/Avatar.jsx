import React from "react";
import classNames from "classnames";

export function Avatar({ name, image = "", size }) {
  
  const getInitials = (name) => {
    if (!name) return "?";
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0][0].toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  const sizeOptions = {
    sm: "w-8 h-8 text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-16 h-16 text-lg",
    xl: "w-24 h-24 text-xl"
  };

  const sizeClass = sizeOptions[size];

  return (
  <div
    className={classNames(
      "rounded-full bg-gray-200 text-gray-800 font-semibold flex items-center justify-center overflow-hidden",
      sizeClass
    )}
  >
    {image ? (
      <img src={image} alt={name} className="object-cover w-full h-full" />
    ) : (
      getInitials(name)
    )}
  </div>
  );
}
