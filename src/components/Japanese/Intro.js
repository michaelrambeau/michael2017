import React from "react";
import img from "../Resume/michael-2017-400x400.png";

// import overview from "./overview.md";
import data from "../../data/core.json";
import PageBreak from "../Resume/PageBreak";

const Intro = ({ overview }) => (
  <div className="main-document">
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1 }}>
        <h1>履歴書 / プロフィール</h1>
        <p>【名前】Michael Rambeau ミカエル　ランボー (41歳)</p>
        <p>
          【WEBサイト】
          <a href={data.website}>{data.website}</a>
        </p>
        <p>
          【メール】
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </p>
        <p>【住所】大阪府　茨木市</p>
      </div>
      <div>
        <img src={img} width={150} style={{ margin: 0 }} />
      </div>
    </div>
    <div dangerouslySetInnerHTML={{ __html: overview }} />
  </div>
);

export default Intro;
