import React from "react";
import styled from "styled-components";

import Icon from "../../svg/Icon";
import img from "./michael-2017-400x400.png";
import data from "../../data/core.json";

const Grid = styled.div`
  display: flex;
  > div:first-child {
    width: 2rem;
  }
`;

const ProfileIcon = styled(Icon)`
  fill: #b58d10;
  margin-right: 5px;
  width: 24px;
  height: 24px;
`;

const Profile = () => (
  <div style={{ display: "flex" }}>
    <div style={{ flexGrow: 1 }}>
      <h1>Full-stack web engineer</h1>
      <Grid>
        <ProfileIcon id="person" />
        <p>Michael Rambeau (ミカエル ランボー), 41 years old, French</p>
      </Grid>
      <Grid>
        <ProfileIcon id="home" />
        <p>Residing in Ibaraki city, Osaka, Japan since April 2010</p>
      </Grid>
      <Grid>
        <ProfileIcon id="mail" />
        <p>
          <a className="email" href={`mailto:${data.email}`}>
            {data.email}
          </a>
        </p>
      </Grid>
      <Grid>
        <ProfileIcon id="github" />
        <p>
          Creator of <em>Best of JavaScript</em>:{" "}
          <a href={`https://bestofjs.org/`}>https://bestofjs.org/</a>{" "}
        </p>
      </Grid>
    </div>
    <div>
      <img src={img} width={150} style={{ margin: 0 }} />
    </div>
  </div>
);

export default Profile;
