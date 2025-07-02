import React from "react";
import Navba from "./NavBa.jsx";
import { albumsData, songsData } from "../assets/assets.js";
import Albumitem from "./Albumitem.jsx";
import SongItem from "./SongItem.jsx";

const DisplayHome = () => {
  return (
    <>
      <Navba />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured charts</h1>
        <div className="flex overflow-auto">
          {albumsData?.map((item, index) => {
            return (
              <Albumitem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Todays biggest hots</h1>
        <div className="flex overflow-auto">
          {songsData?.map((item, index) => {
            return (
              <SongItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
