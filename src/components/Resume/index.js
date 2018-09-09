import React from "react";

import Profile from "./Profile";
import Languages from "./Languages";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import PageBreak from "./PageBreak";

const Resume = () => (
  <div>
    <Profile />
    <Languages />
    <Skills />
    <PageBreak />
    <Experience />
    <Education />
  </div>
);

export default Resume;
