import React from "react";
import "../App.css";
// import { Load } from "./Feilds/Load";
// import { BrokerId } from "./Feilds/BrokerId";
// import { BrokerName } from "./Feilds/BrokerName";
// import { Date } from "./Feilds/Date";
// import { Delivery } from "./Feilds/Delivery";
// import { Driver } from "./Feilds/Driver";
// import { Pickup } from "./Feilds/Pickup";
import { Table } from "./Table/Table";

export const Feilds = () => {
  return (
    <div className="feilds">
      {/* <Load />
      <Date />
      <Driver />
      <BrokerName />
      <BrokerId />
      <Pickup />
      <Delivery /> */}
      <Table />

      {/* <Load />
      <Load />
      <Load />
      <Load />
      <Load />
      <Load />
      <Load /> */}

      {/* Date
      <input className="feild--input" />
      Driver
      <input className="feild--input" />
      Broker
      <input className="feild--input" />
      Broker
      <input className="feild--input" />
      Pickup
      <input className="feild--input" />
      Delivery
      <input className="feild--input" /> */}
    </div>
  );
};
