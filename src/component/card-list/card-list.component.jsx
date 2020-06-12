import React, { Component } from "react";
import "./cards-list.style.css";

import { Card } from "../card/card-component.jsx";

export const CardList = (props) => (
  <div className="cards-list">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster}></Card>
    ))}
  </div>
);
