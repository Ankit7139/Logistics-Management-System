import React from "react";
import "./Feilds.css";

export const Load = () => {
  return (
    <div className="feild">
      <label htmlFor="load" className="feild--label">
        LOAD
      </label>
      <input className="feild--input" id="load" />
    </div>
  );
};
