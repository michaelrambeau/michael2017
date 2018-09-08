import React from "react";

import Introduction from "./Introduction";
import Experience from "./Experience";
import Skills from "./Skills";
import { log } from "util";

const Home = ({ md }) => {
  const { frontend, backend, introduction, experience } = md;
  return (
    <div id="homepage">
      <Introduction introduction={introduction} />
      <Skills frontend={frontend} backend={backend} />
      <Experience experience={experience} />
    </div>
  );
};

export default Home;
