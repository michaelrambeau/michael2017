import React from "react";
import styled from "styled-components";

import Intro from "./Intro";
import History from "./History";
import Skillsheet from "./Skillsheet";
import PageBreak from "../Resume/PageBreak";

const Div = styled.div`
  font-family: sans-serif;
`;

const Japanese = ({ md }) => {
  const { history, bio, overview } = md;
  return (
    <Div>
      <Intro overview={overview} />
      <PageBreak />
      <History history={history} />
      <PageBreak />
      <Skillsheet bio={bio} />
    </Div>
  );
};

export default Japanese;
