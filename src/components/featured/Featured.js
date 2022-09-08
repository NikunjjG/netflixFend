import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./Featured.css";

export default function Featured() {
  return (
    <div className="featured">
      <img
        src="https://i0.wp.com/thefutureoftheforce.com/wp-content/uploads/2021/11/The-Matrix-Resurrections-International-Poster-Header.jpg?fit=1920%2C1080&ssl=1"
        alt=""
        className="featuredImg"
      />
      <div className="info">
      <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
          className="featuredTitleImg"
        />
        <span className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto blanditiis libero sunt quo, nisi quia delectus itaque? Reiciendis sint esse cum, non eveniet velit laboriosam exercitationem! Ipsam quo hic blanditiis delectus dolorum dolorem et iusto nisi maiores libero perspiciatis aliquid, unde sed maxime quod nemo voluptatibus voluptatum consequatur distinctio placeat.</span>
        <div className="buttons">
            <button className="play"><PlayArrow/><span className="playSpan">Play</span></button>
            <button className="more"><InfoOutlined/><span className="moreSpan">Info</span></button>
        </div>
      </div>
    </div>
  );
}
