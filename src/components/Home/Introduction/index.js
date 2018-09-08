import React from "react";

// import introduction from "./introduction.md";

const Intro = ({ introduction }) => {
  return <div dangerouslySetInnerHTML={{ __html: introduction }} />;
};

export default Intro;
