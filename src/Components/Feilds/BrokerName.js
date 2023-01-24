import React from "react";
import "./Feilds.css";

export const BrokerName = () => {
  return (
    <div className="feild">
      <label htmlFor="brokerName" className="feild--label">
        BROKER NAME
      </label>
      <input className="feild--input" id="brokerName" />
    </div>
  );
};
