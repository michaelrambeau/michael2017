import React from "react";

import Bio from "./Bio";

const Skillsheet = ({ bio }) => (
  <div className="main-document" style={{ marginTop: "2rem" }}>
    <Bio bio={bio} />
  </div>
);

export default Skillsheet;
