import React from "react";
import styled from "styled-components";

import Icon from "../../svg/Icon";
import marked from "marked";

const getDate = item => {
  const year = item.from === item.to ? item.from : `${item.from} ⇒ ${item.to}`;
  const duration = item.duration ? ` (${item.duration})` : "";
  return `${year}${duration}`;
};

const Experience = styled.div`
  padding-left: 1rem;
  border-left: solid 3px #f5bc06;
  margin-bottom: 2.5rem;
  header {
    display: flex;
    color: #b58d10;
  }
  header > div {
    flex: 0 0 50%;
    display: flex;
  }
`;

const Location = styled.div`
  justify-content: flex-end;
`;

const HistoryItem = ({ item }) => (
  <Experience>
    <header>
      <div className="date">
        <Icon id="calendar" className="svg-icon" />
        {getDate(item)}
      </div>
      <Location>
        <Icon id="globe" className="svg-icon" />
        {item.location}
      </Location>
    </header>
    <h3 dangerouslySetInnerHTML={{ __html: marked(item.title) }} />
    {item.resp && <p dangerouslySetInnerHTML={{ __html: marked(item.resp) }} />}
    {item.points && (
      <ul>
        {item.points.map((point, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: marked(point) }} />
        ))}
      </ul>
    )}
  </Experience>
);

export default HistoryItem;
