import React from "react";
import { BrokerId } from "../Feilds/BrokerId";
import { BrokerName } from "../Feilds/BrokerName";
import { Delivery } from "../Feilds/Delivery";
import { Driver } from "../Feilds/Driver";
import { Load } from "../Feilds/Load";
import { Pickup } from "../Feilds/Pickup";
import { Date } from "../Feilds/Date";
import "./Table.css";

export const Table = () => {
  return (
    // <div className="table">
    <table>
      <tr>
        <th>
          <Load />
        </th>
        <th>
          <Date />
        </th>
        <th>
          <Driver />
        </th>
        <th>
          <BrokerName />
        </th>
        <th>
          <BrokerId />
        </th>
        <th>
          <Pickup />
        </th>
        <th>
          <Delivery />
        </th>
      </tr>
      <tr>
        <td>123456</td>
        <td>10/07/2022</td>
        <td>Alfreds Futterkiste</td>
        <td>Anders Corp.</td>
        <td>345127</td>
        <td>7th Street Olen Island</td>
        <td>83 Michighan Apt.283</td>
      </tr>
      <tr>
        <td>123456</td>
        <td>10/07/2022</td>
        <td>Alfreds Futterkiste</td>
        <td>Anders Corp.</td>
        <td>345127</td>
        <td>7th Street Olen Island</td>
        <td>83 Michighan Apt.283</td>
      </tr>
    </table>
    // </div>
  );
};
