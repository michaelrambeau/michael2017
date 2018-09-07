import React from "react";
import experiences from "./data/history";
import HistoryItem from "./HistoryItem";

const Experience = () => (
  <div>
    <h2>Professional experience</h2>
    {experiences.map((item, i) => (
      <HistoryItem item={item} key={i} />
    ))}
  </div>
);

export default Experience;
