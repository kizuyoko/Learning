import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div>
      {
        props.list.map(({name, ...description}) => {
          return (
            <Tile 
              key={name}
              name={name}
              description={description}
            />
          );
        })
      }
    </div>
  );
};
