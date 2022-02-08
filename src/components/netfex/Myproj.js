import React from "react";
import Card from "./Card";
import "../netfex/netfex.css";
import Sdata from "./Sdata";

export default function Myproj() {
  return (
    <>
      <div className="marrrg">
        {Sdata &&
          Sdata.length &&
          Sdata.map((val, i) => (
            <Card
              key={i}
              imgsrc={val.imgsrc}
              tital={val.tital}
              Sname={val.Sname}
              link={val.link}
            />
          ))}
      </div>
    </>
  );
}
