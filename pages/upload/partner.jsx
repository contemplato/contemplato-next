import React, { Component } from "react";
import axios from "axios";

import Footer from "../../components/common/footer/Footer";
import firebase from "../../components/common/data/firebase";

import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

class others extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      input: {},
      image: null,
      anexo: false,
    };
    this.showMenu = this.showMenu.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  showMenu(event) {
    this.setState({ showMenu: !this.state.showMenu });
  }

  onChange = (event) => {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({ input });
    //console.log(input);
  };

  handleChange = (event) => {
    if (event.target.files) {
      this.setState({ anexo: true });
      this.state.image = event.target.files;
    }
    //console.log(this.state.image.length);
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let file = this.state.image;

    if (file !== null) {
      const { data } = await axios.post(
        "http://core-content-cc-co.umbler.net/p/post/contemplato/upload_arch/default",
        {
          key: this.state.input.key || "",
        },
        {
          headers: {
            Authorization: "APP-NAME",
          },
        }
      );
      //console.log(data);
      if (!data.status) alert("Verifique sua chave de envio.");
      else {
        let upload = [];
        if (file !== null) {
          for (let _ of file) {
            const chave = this.state.input.key;
            const rename = chave + "_" + Date.now();
            const type = _.name.split(".")[1];
            let d = new Date();
            let mes = d.toLocaleString("pt-br", { month: "long" });
            let ano = d.getFullYear();

            let task = await firebase
              .storage()
              .ref(`/Documentos/Outros/Upload/${mes}_${ano}/${rename}.${type}`)
              .put(_, { contentType: _.type });
            upload.push(task);
          }

          try {
            Promise.all([...upload]);
            alert("Arquivo enviado com sucesso");
            document.location.reload(true);
          } catch (error) {
            alert(error);
          }
        } else {
          alert("Arquivo enviado com sucesso");
        }
      }
    } else {
      alert("Não há arquivo anexado.");
    }
  };

  render() {
    return (
      <>
        <div className="Blue ico cover">
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
                href="https://contemplato.wikidot.com/"
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
                      href="https://contemplato.wikidot.com/"
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
          className="960y form-container mobilecenter"
          style={{ marginTop: "50px" }}
        >
          <h1 className="title-h1 mobilecenter cen">Envio de Documentos</h1>
          <div className="formField-container" style={{ marginTop: "30px" }}>
            <input
              id="key"
              type="text"
              name="key"
              value={this.state.input.key}
              onChange={this.onChange}
              className="Blanc 100w 10p 10r"
              required=""
              placeholder="Digite a chave"
            />
          </div>
          <br />
          <div className="formField-container cen">
            <label>
              <input
                id="file-upload"
                type="file"
                className="100w 10r none"
                accept="application/pdf,application/doc,application/docx,image/png,image/jpeg,image/jpg"
                multiple=""
                name="file"
                onChange={this.handleChange}
              />
              {this.state.anexo ? (
                <DoneOutlineIcon className="menu-icon" fontSize="large" />
              ) : (
                <InsertDriveFileIcon
                  className="menu-icon"
                  fontSize="large"
                  style={{ cursor: "pointer" }}
                />
              )}

              <br />
              <span style={{ fontSize: "11px", marginTop: "0px" }}>
                {" "}
                Anexar arquivo{" "}
              </span>
            </label>
          </div>
          <br />
          <button
            style={{
              width: "100%",
              border: 0,
              borderRadius: "5px",
              backgroundColor: "#345d9d",
              marginBottom: "18%",
            }}
            onClick={this.handleSubmit}
          >
            <p className="title-header blanc" style={{ textAlign: "center" }}>
              Enviar
            </p>
          </button>
        </div>

        <Footer />
      </>
    );
  }
}

export default others;
