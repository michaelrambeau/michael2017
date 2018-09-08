import React from "react";
import styled from "styled-components";
import t from "../../../utils/typography";

import svg from "../../../css/triangle.svg";

const Tag = styled.div`
  display: inline-block
  text-transform: uppercase;
  background-color: #ffde74;
  padding: 0.25rem 0.5rem;
  background-image: url(${svg});
  background-size: 100%;
  margin-bottom: ${t.rhythm(1)}
`;

const Grid = styled.div`
  display: flex;
  @media (max-width: 499px) {
    flex-direction: column;
  }
`;

const MainCell = styled.div`
  flex-grow: 1;
`;

const LogoCell = styled.div`
  min-width: 200px;
  @media (max-width: 499px) {
    margin-top: 2rem;
  }
  text-align: center;
`;

const Img = styled.img`
  width: 200px;
`;

const SkillCard = ({ title, skills, logo }) => (
  <div className="card">
    <div className="header">
      <Tag>{title}</Tag>
    </div>
    <Grid>
      <MainCell dangerouslySetInnerHTML={{ __html: skills }} />
      <LogoCell>
        <Img src={logo} />
      </LogoCell>
    </Grid>
  </div>
);

export default SkillCard;
