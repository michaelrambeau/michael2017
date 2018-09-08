import React from "react";
import Link from "gatsby-link";
// import experience from "./experience.md";

const Experience = ({ experience }) => (
  <div>
    <h2>Experience</h2>
    <div className="card">
      <div dangerouslySetInnerHTML={{ __html: experience }} />
      <div style={{ textAlign: "center" }}>
        For more details, check{" "}
        <Link to="/resume/">Michael Rambeau's resume</Link>.
      </div>
    </div>
  </div>
);

export default Experience;
