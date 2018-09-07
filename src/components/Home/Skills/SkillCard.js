import React from "react";
import styled from "styled-components";

import Logo from "../../../svg/Logo";

const Grid = styled.div`
  @media (max-width: 499px) {
    display: flex {
      flex-direction: column;
    }
  }
`;

const MainCell = styled.div`
  flex-grow: 1;
`;

const LogoCell = styled.div`
  @media (max-width: $break) margin-top: 2rem;
`;

const SkillCard = ({ title, skills, icon }) => (
  <div className="SkillCard card">
    <p className="header">
      <span className="tag">{title}</span>
    </p>
    <Grid>
      <MainCell dangerouslySetInnerHTML={{ __html: skills.body }} />
      <LogoCell>
        <Logo id={icon} className="svg-logo" />
      </LogoCell>
    </Grid>
  </div>
);

export default SkillCard;
