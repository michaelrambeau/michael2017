import React from "react";
import { Link } from "react-router";

import introduction from "./introduction.md";

const Intro = () => {
  return <div dangerouslySetInnerHTML={{ __html: introduction.body }} />;
};

export default Intro;
