import React from "react";
import Tilta from "react-vanilla-tilt";

export default function Card(props) {
  return (
    <>
      <div className="cards">
        <Tilta>
          <div className="container">
            <div className="peddina">
              <div className="card">
                <div className="contet">
                  <img src={props.imgsrc} alt="not img" className="img_card" />
                  <div className="card_info">
                    <span className="card_categry">{props.tital}</span>
                    <h3 className="card_tital">{props.Sname}</h3>
                    <a
                      href={props.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>Whoch Now</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tilta>
      </div>
    </>
  );
}
