import React from "react";
import "./Feilds.css";

export const Delivery = () => {
  return (
    <div className="feild">
      <label htmlFor="delivery" className="feild--label">
        DELIVERY
      </label>
      <input className="feild--input" id="delivery" />
    </div>
  );
};
