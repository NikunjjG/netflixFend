import React from "react";
import Featured from "../components/featured/Featured";
// import List from "../components/list/List";
import Navbar from "../components/navbar/Navbar";
import Rowset from "../components/row/Rowset";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar/>
      <Featured/>
      <Rowset/>
    </div>
  );
}
