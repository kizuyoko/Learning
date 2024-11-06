import React from "react";

export const Tile = ({name, description}) => {
  console.log(description)
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
       {
          Object.values(description).map((item, index) => (
          <p key={index}>{item}</p> 
        ))
        }
    </div>
  );
};