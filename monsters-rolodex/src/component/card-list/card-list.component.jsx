import React, { Component } from "react";
import "./cards-list.style.css";

export const CardList = (props) => {
  console.log(props);
  return <div className="cards-list">{props.children}</div>;
};
