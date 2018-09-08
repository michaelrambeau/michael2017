import React from "react";

const Bio = ({ bio }) => (
  <div>
    <h2>自己PR</h2>
    <div dangerouslySetInnerHTML={{ __html: bio }} />
  </div>
);

export default Bio;
