import React from "react";

import experiences from "./data/history";
import HistoryItem from "./HistoryItem";
import PageBreak from "./PageBreak";
const byId = id => experiences.find(item => item.id === id);

const Experience = () => (
  <div>
    <h2>Professional experience</h2>
    <HistoryItem item={byId("PACTERA")} />
    <HistoryItem item={byId("BENTO&CO")} />
    <HistoryItem item={byId("FIRSTSERVER")} />
    <PageBreak />
    <HistoryItem item={byId("AIRFRANCE")} />
    <HistoryItem item={byId("CCR")} />
  </div>
);

export default Experience;
