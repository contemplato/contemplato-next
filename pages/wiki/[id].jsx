import React, { Component } from "react";

import Footer from "../../components/common/footer/Footer";
import wiki from "../../components/common/wiki/index";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
    this.showMenu = this.showMenu.bind(this);
  }
  static async getInitialProps({ query }) {
    const id = query.id;
    const name = query.name;

    return {
      id: id,
      name: name,
      showMenu: false,
    };
  }

  showMenu(event) {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    let propsId = this.props.id;

    return (
      <>
        <div className="Blue ico cover" style={{ marginBottom: "50px" }}>
          <div className="960y row center 10p wrap ">
            <div className="1s 5p">
              <a href="/">
                <img
                  className="ocult"
                  src="/images/logo-contemplato.png"
                  alt="image1"
                  width="135"
                  border="0"
                />
              </a>
            </div>
            <div className="2s 5p row ocult">
              <a
                href="/wiki/Inicio-wiki"
                className="blanc 5p"
                style={{ marginRight: "30px" }}
              >
                Wiki
              </a>
              <a
                href="https://www.contemplay.com.br/"
                className="blanc 5p"
                style={{ marginRight: "30px" }}
              >
                Portal do corretor
              </a>
            </div>
            {/* menu mobile */}
            <nav
              style={{
                backgroundColor: "#345d9d",
                width: "100%",
                padding: "10px",
              }}
              className="20r none show"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <a href="/">
                  <img
                    src="/images/logo-contemplato.png"
                    alt="image1"
                    width="180"
                    border="0"
                  />
                </a>
                <IconButton size="small" onClick={this.showMenu}>
                  {" "}
                  {this.state.showMenu ? (
                    <CloseIcon
                      className="menu-icon "
                      fontSize="large"
                      style={{
                        color: "white",
                        marginRight: "0px",
                        positon: "absolute",
                      }}
                    />
                  ) : (
                    <FormatListBulletedIcon
                      className="blanc menu-icon 10r"
                      fontSize="large"
                      style={{ color: "white" }}
                    />
                  )}{" "}
                </IconButton>
              </div>
              <div
                style={{ marginTop: "20px" }}
                className={this.state.showMenu ? "" : "ocult"}
              >
                <ul>
                  <li>
                    <a
                      className="aMenu"
                      href="/wiki/Inicio-wiki"
                      target="_blank"
                    >
                      Wiki
                    </a>
                  </li>
                  <li>
                    <a
                      className="aMenu"
                      href="https://www.contemplay.com.br/"
                      target="_blank"
                    >
                      {" "}
                      Portal do corretor
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            {/*  */}
          </div>
        </div>

        <div
          className="1280y content col 20r 30p Blanc shadow "
          style={{ marginBottom: "50px" }}
        >
          <div dangerouslySetInnerHTML={{ __html: wiki[propsId].title }} />
          <div dangerouslySetInnerHTML={{ __html: wiki[propsId].value }} />
        </div>

        <Footer />
      </>
    );
  }
}
