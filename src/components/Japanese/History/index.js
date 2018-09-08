import React from "react";
// import history from './history.md'

const History = ({ history }) => (
  <div className="main-document" style={{ marginTop: "2rem" }}>
    <h2>職務経歴書</h2>
    <div dangerouslySetInnerHTML={{ __html: history }} />
  </div>
);

export default History;
