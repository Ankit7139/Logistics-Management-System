import React from "react";
import "./EditLoad.css";
import { BrokerId } from "../Feilds/BrokerId";
import { BrokerName } from "../Feilds/BrokerName";
import { Delivery } from "../Feilds/Delivery";
import { Driver } from "../Feilds/Driver";
import { Load } from "../Feilds/Load";
import { Pickup } from "../Feilds/Pickup";
import { Date } from "../Feilds/Date";

export const EditLoad = () => {
  return (
    <>
      <h3 style={{ textAlign: "left" }}>Edit Load</h3>
      <div className="editload">
        <Load />
        <Date />
        <Driver />
        <BrokerName />
        <BrokerId />
        <Pickup />
        <Delivery />
      </div>
    </>
  );
};
