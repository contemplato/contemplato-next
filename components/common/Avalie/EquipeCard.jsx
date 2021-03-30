import React from "react"

function EquipeCard(props) {
  return (
    <div
      key={props.idy}
      className="20p cen about-profile"
      style={{
        minWidth: "230px",
        margin: "0px auto",
      }}
    >
      <img src={props.img} alt="imagem da equipe" width="84" className="100r" />{" "}
      <br />
      <p className="title">{props.title}</p>
      <p style={{ fontSize: "12px", color: "#828282" }}>
        {" "}
        {props.description}{" "}
      </p>
    </div>
  )
}

export default EquipeCard
