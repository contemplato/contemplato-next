import React, { Component } from "react";

class EquipeCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        key={this.props.idy}
        className="20p cen about-profile"
        style={{
          minWidth: "425px",
          margin: "0px auto",
        }}
      >
        <img
          src={this.props.img}
          alt="imagem da equipe"
          width="84"
          className="100r"
        />{" "}
        <br />
        <p className="title">{this.props.title}</p>
        <p style={{ fontSize: "12px", color: "#828282" }}>
          {" "}
          {this.props.description}{" "}
        </p>
      </div>
    );
  }
}

export default EquipeCard;
