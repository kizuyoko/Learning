import React from "react";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1); // Capitalize the first letter
};

export const Tile = ({name, description}) => {
  console.log(description);
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {
        Object.entries(description).map(([key, value], index) => (
          <p key={index} id={index}>{capitalizeFirstLetter(key)}: {value}</p>
        ))
      }
    </div>
  );
};
