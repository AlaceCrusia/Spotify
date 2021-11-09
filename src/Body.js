import React from "react";
import "./Body.css";
import Header from "./Header.js";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify}></Header>
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__InfoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledRoundedIcon className="body__shuffle" />
          <FavoriteRoundedIcon fontSize="large" />
          <MoreHorizRoundedIcon />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
