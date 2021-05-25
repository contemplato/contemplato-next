import React from "react";

function WikiCard(props) {
  return (
    <div
      key={props.idy}
      className="f-1 Blanc bt-hover-blue row wiki 40p"
      style={{ cursor: "pointer" }}
      onClick={() => {
        window.open(`${props.url}`, `${props.target}`);
      }}
    >
      <div className="col cen">
        <div
          className="bg-noarea icon cen"
          style={{
            backgroundImage: `url(${props.image})`,
            width: "45px",
            height: "45px",
          }}
        ></div>
        <span className="fo11 5p"> {props.text} </span>
      </div>
    </div>
  );
}

export default WikiCard;
