import React from "react";
import styled from "styled-components";

import Intro from "./Intro";
import History from "./History";
import Skillsheet from "./Skillsheet";

const Div = styled.div`
  font-family: sans-serif;
`;

const Japanese = () => (
  <Div>
    <Intro />
    <History />
    <Skillsheet />
  </Div>
);

export default Japanese;
