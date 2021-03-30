import React from "react";
import "../../../styles/app.css";

function ConAndamento() {
  return (
    <>
      <div className="1280y 20p gray fo32 response row">
        {" "}
        Consórcio em andamento{" "}
      </div>
      <div id="content-consorcio-em-andamento" className="1280y row ocult">
        <div className="f-1 5p col" style={{ maxWidth: "240px" }}>
          <label
            className="labelbox 100w Blanc"
            for="consorcio-andamento-carro"
          >
            <input
              type="radio"
              name="consorcio-andamento"
              id="consorcio-andamento-carro"
              checked=""
            />
            <div className="Blanc 30p row bt-hover-blue f-1 center">
              <div
                className="bg-noarea icon"
                style={{
                  backgroundImage:
                    "url('https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-automobile.png?alt=media&amp;token=ad2c4862-b1db-49d5-a3ab-6afdb9e488cd')",
                  minWidth: "20px",
                  minHeight: "20px",
                  marginRight: "10px",
                }}
              ></div>
              Carro
            </div>
          </label>
          <label className="labelbox 100w Blanc" for="consorcio-andamento-moto">
            <input
              type="radio"
              name="consorcio-andamento"
              id="consorcio-andamento-moto"
            />
            <div className="Blanc 30p row bt-hover-blue f-1 center">
              <div
                className="bg-noarea icon"
                style={{
                  backgroundImage:
                    "url('https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-motorcycle.png?alt=media&amp;token=ad2c4862-b1db-49d5-a3ab-6afdb9e488cd')",
                  minWidth: "20px",
                  minHeight: "20px",
                  marginRight: "10px",
                }}
              ></div>
              Moto
            </div>
          </label>
          <label
            className="labelbox 100w Blanc"
            for="consorcio-andamento-imovel"
          >
            <input
              type="radio"
              name="consorcio-andamento"
              id="consorcio-andamento-imovel"
            />
            <div className="Blanc 30p row bt-hover-blue f-1 center">
              <div
                className="bg-noarea icon"
                style={{
                  backgroundImage:
                    "url('https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-home.png?alt=media&amp;token=ad2c4862-b1db-49d5-a3ab-6afdb9e488cd')",
                  minWidth: "20px",
                  minHeight: "20px",
                  marginRight: "10px",
                }}
              ></div>
              Imóvel
            </div>
          </label>
          <label
            className="labelbox 100w Blanc"
            for="consorcio-andamento-pesados"
          >
            <input
              type="radio"
              name="consorcio-andamento"
              id="consorcio-andamento-pesados"
            />
            <div className="Blanc 30p row bt-hover-blue f-1 center">
              <div
                className="bg-noarea icon"
                style={{
                  backgroundImage:
                    "url('https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-transport.png?alt=media&amp;token=ad2c4862-b1db-49d5-a3ab-6afdb9e488cd')",
                  minWidth: "20px",
                  minHeight: "20px",
                  marginRight: "10px",
                }}
              ></div>
              Pesados
            </div>
          </label>
        </div>
        <div
          id="render-consorcio-andamento-main"
          className="f-1 5p col"
          style={{ maxWidth: "310px", marginRight: "10px" }}
        >
          <div
            className="f-2 Blanc col 20r"
            style={{ minWidth: "310px", cursor: "pointer" }}
            onclick="app.Nav('/consorcio/contemplado/carro/C1','_blank')"
          >
            <div
              className="bg-area 100w col center"
              style={{
                backgroundImage:
                  "url('https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fbg-bandeiras.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe')",
                minHeight: "80px",
                borderRadius: "10px 10px 0 0",
              }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FAdministrator%2FBradesco.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                width="100"
                className="20r"
                style={{ margin: "40px 0 10px" }}
              />
            </div>
            <p className="blue cen fo17" style={{ margin: "14px" }}>
              Carro <b> contemplado </b>
            </p>
            <div style={{ marginBottom: "10px" }}>
              <div
                className="bg-noarea icon"
                style={{
                  backgroundImage:
                    "url('https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-arrow.png?alt=media&amp;token=ad2c4862-b1db-49d5-a3ab-6afdb9e488cd')",
                  minWidth: "20px",
                  minHeight: "20px",
                  margin: "0 0px 0 20px",
                }}
              ></div>
              <span style={{ marginRight: "5px" }}> Crédito </span>{" "}
              <b> R$ 29.542,50 </b>
              <div className="break"></div>
              <div
                className="bg-noarea icon"
                style={{
                  backgroundImage:
                    "url('https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-arrow.png?alt=media&amp;token=ad2c4862-b1db-49d5-a3ab-6afdb9e488cd')",
                  minWidth: "20px",
                  minHeight: "20px",
                  margin: "0 0px 0 20px",
                }}
              ></div>
              <span style={{ marginRight: "5px" }}> Dívida restante </span>{" "}
              <br />
              <b style={{ margin: "0 0px 0 45px" }}> R$ 5.985,58 </b>
              <div className="break"></div>
              <div
                className="bg-noarea icon"
                style={{
                  backgroundImage:
                    "url('https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-dinner.png?alt=media&amp;token=ad2c4862-b1db-49d5-a3ab-6afdb9e488cd')",
                  minWidth: "20px",
                  minHeight: "20px",
                  margin: "0 0px 0 20px",
                }}
              ></div>
              <b style={{ margin: "0px" }}> POR R$ 27.000,00 </b>
            </div>
            <div className="5p cen orange fo17">
              <b> Taxa financeira 0.75% </b> <br />
            </div>
          </div>
        </div>

        <div className="over-input bloco3">
          <div
            className="absol 5p"
            style={{
              left: "0",
              zIndex: "11",
              top: "50%",
              transform: "translateY(-50%) !important",
            }}
          >
            <button className="bt-slide prev 100r">❮</button>
          </div>
          <div id="render-consorcio-andamento-tumb" className="slide 5p col">
            <div id="render-consorcio-andamento-tumb-1" className="row">
              <div
                style={{
                  marginRight: "8px",
                  marginBottom: "3px",
                  minWidth: "160px",
                  maxWidth: "160px",
                  display: " inline-block",
                }}
              >
                <div
                  className="100w 5p 5r"
                  style={{ backgroundColor: "white", cursor: "pointer" }}
                  onclick="app.Nav('/consorcio/cancelado/carro/C3','_blank')"
                >
                  <center>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FAdministrator%2FMagazineLuiza.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="68"
                      style={{ display: "block" }}
                    />
                    <span style={{ color: "#2e4689", fontSize: "12px" }}>
                      Carro <b> cancelado </b>
                    </span>
                  </center>
                  <div className="100w 5p" style={{ fontSize: "11px" }}>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-arrow.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Crédito <b> R$ 28.255,00 </b> <br />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-arrow.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Dívida Restante
                    <b>
                      <br />
                      R$ 28.778,18
                    </b>
                    <br />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-dinner.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Pago <b> R$ 5.190,56 </b> <br />
                    <b style={{ margin: "0px" }}> POR R$ 2.500,00 </b>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginRight: "8px",
                  marginBottom: "3px",
                  minWidth: "160px",
                  maxWidth: "160px",
                  display: "inline-block",
                }}
              >
                <div
                  className="100w 5p 5r"
                  style={{ backgroundColor: "white", cursor: "pointer" }}
                  onclick="app.Nav('/consorcio/cancelado/carro/C4','_blank')"
                >
                  <center>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FAdministrator%2FMagazineLuiza.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="68"
                      style={{ display: "block" }}
                    />
                    <span style={{ color: "#2e4689", fontSize: "12px" }}>
                      Carro <b> cancelado </b>
                    </span>
                  </center>
                  <div className="100w 5p" style={{ fontSize: "11px" }}>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-arrow.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Crédito <b> R$ 35.000,00 </b> <br />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-arrow.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Dívida Restante
                    <b>
                      <br />
                      R$ 39.640,28
                    </b>
                    <br />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-dinner.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Pago <b> R$ 13.200,00 </b> <br />
                    <b style={{ margin: "0px" }}> POR R$ 10.000,00 </b>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginRight: "8px",
                  marginBottom: "3px",
                  minWidth: "160px",
                  maxWidth: "160px",
                  display: "inline-block",
                }}
              >
                <div
                  className="100w 5p 5r"
                  style={{ backgroundColor: "white", cursor: "pointer" }}
                  onclick="app.Nav('/consorcio/cancelado/carro/C5','_blank')"
                >
                  <center>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FAdministrator%2FBancoBrasil.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="68"
                      style={{ display: "block" }}
                    />
                    <span style={{ color: "#2e4689", fontSize: "12px" }}>
                      Carro <b> cancelado </b>
                    </span>
                  </center>
                  <div className="100w 5p" style={{ fontSize: "11px" }}>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-arrow.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Crédito <b> R$ 36.156,00 </b> <br />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-arrow.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Dívida Restante
                    <b>
                      <br />
                      R$ 33.832,67
                    </b>
                    <br />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-dinner.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Pago <b> R$ 8.247,69 </b> <br />
                    <b style={{ margin: "0px" }}> POR R$ 6.000,00 </b>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginRight: "8px",
                  marginBottom: "3px",
                  minWidth: "160px",
                  maxWidth: "160px",
                  display: "inline-block",
                }}
              >
                <div
                  className="100w 5p 5r"
                  style={{ backgroundColor: "white", cursor: "pointer" }}
                  onclick="app.Nav('/consorcio/cancelado/carro/C6','_blank')"
                >
                  <center>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FAdministrator%2FDisal.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="68"
                      style={{ display: "block" }}
                    />
                    <span style={{ color: "#2e4689", fontSize: "12px" }}>
                      Carro <b> cancelado </b>
                    </span>
                  </center>
                  <div className="100w 5p" style={{ fontSize: "11px" }}>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-arrow.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Crédito <b> R$ 42.490,00 </b> <br />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-arrow.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Dívida Restante
                    <b>
                      <br />
                      R$ 34.854,71
                    </b>
                    <br />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-dinner.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Pago <b> R$ 15.403,02 </b> <br />
                    <b style={{ margin: "0px" }}> POR R$ 9.000,00 </b>
                  </div>
                </div>
              </div>
            </div>
            <div id="render-consorcio-andamento-tumb-2" className="row">
              <div
                style={{
                  marginRight: "8px",
                  marginBottom: "0px",
                  minWidth: "160px",
                  maxWidth: "160px",
                  display: "inline-block",
                }}
              >
                <div
                  className="100w 5p 5r"
                  style={{ backgroundColor: "white", cursor: "pointer" }}
                  onclick="app.Nav('/consorcio/nao-contemplado/carro/C8','_blank')"
                >
                  <center>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FAdministrator%2FGovesa.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="68"
                      style={{ display: "block" }}
                    />
                    <span style={{ color: "#2e4689", fontSize: "12px" }}>
                      Carro <b> não contemplado </b>
                    </span>
                  </center>
                  <div className="100w 5p" style={{ fontSize: "11px" }}>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-arrow.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Crédito <b> R$ 143.090,00 </b> <br />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-arrow.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Dívida Restante
                    <b>
                      <br />
                      R$ 167.793,18
                    </b>
                    <br />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-dinner.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Pago <b> R$ 8.207,49 </b> <br />
                    <b style={{ margin: "0px" }}> POR R$ 5.745,24 </b>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginRight: "8px",
                  marginBottom: "0px",
                  minWidth: "160px",
                  maxWidth: "160px",
                  display: "inline-block",
                }}
              >
                <div
                  className="100w 5p 5r"
                  style={{ backgroundColor: "white", cursor: "pointer" }}
                  onclick="app.Nav('/consorcio/nao-contemplado/carro/C9','_blank')"
                >
                  <center>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FAdministrator%2FBradesco.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="68"
                      style={{ display: "block" }}
                    />
                    <span style={{ color: "#2e4689", fontSize: "12px" }}>
                      Carro <b> não contemplado </b>
                    </span>
                  </center>
                  <div className="100w 5p" style={{ fontSize: "11px" }}>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-arrow.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Crédito <b> R$ 39.390,00 </b> <br />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-arrow.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Dívida Restante
                    <b>
                      <br />
                      R$ 35.726,06
                    </b>
                    <br />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-dinner.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Pago <b> R$ 10.365,07 </b> <br />
                    <b style={{ margin: "0px" }}> POR R$ 7.255,55 </b>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginRight: "8px",
                  marginBottom: "0px",
                  minWidth: "160px",
                  maxWidth: "160px",
                  display: "inline-block",
                }}
              >
                <div
                  className="100w 5p 5r"
                  style={{ backgroundColor: "white", cursor: "pointer" }}
                  onclick="app.Nav('/consorcio/nao-contemplado/carro/C10','_blank')"
                >
                  <center>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FAdministrator%2FDisal.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="68"
                      style={{ display: "block" }}
                    />
                    <span style={{ color: "#2e4689", fontSize: "12px" }}>
                      Carro <b> não contemplado </b>
                    </span>
                  </center>
                  <div className="100w 5p" style={{ fontSize: "11px" }}>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-arrow.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Crédito <b> R$ 38.990,00 </b> <br />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-arrow.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Dívida Restante
                    <b>
                      <br />
                      R$ 36.451,94
                    </b>
                    <br />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-dinner.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Pago <b> R$ 9.185,05 </b> <br />
                    <b style={{ margin: "0px" }}> POR R$ 6.429,54 </b>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginRight: "8px",
                  marginBottom: "0px",
                  minWidth: "160px",
                  maxWidth: "160px",
                  display: "inline-block",
                }}
              >
                <div
                  className="100w 5p 5r"
                  style={{ backgroundColor: "white", cursor: "pointer" }}
                  onclick="app.Nav('/consorcio/cancelado/carro/C12','_blank')"
                >
                  <center>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FAdministrator%2FBradesco.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="68"
                      style={{ display: "block" }}
                    />
                    <span style={{ color: "#2e4689", fontSize: "12px" }}>
                      Carro <b> cancelado </b>
                    </span>
                  </center>
                  <div className="100w 5p" style={{ fontSize: "11px" }}>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-arrow.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Crédito <b> R$ 39.390,00 </b> <br />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-arrow.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Dívida Restante
                    <b>
                      <br />
                      R$ 41.448,94
                    </b>
                    <br />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fco-dinner.png?alt=media&amp;token=2821b949-1513-414f-bdeb-53f6535b11fe"
                      width="15"
                      style={{ display: "inline-block" }}
                    />
                    Pago <b> R$ 5.428,86 </b> <br />
                    <b style={{ margin: "0px" }}> POR R$ 3.800,20 </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absol 5p"
            style={{
              right: "0",
              zIndex: "11",
              top: "50%",
              transform: "translateY(-50%) !important",
            }}
          >
            <button className="bt-slide next 100r">❯</button>
          </div>
        </div>
      </div>
      {/*no-Desk */}
      <div className="none show col 10p">
        <div className="Blanc row">
          <div className="f-1 20p">
            Carro <br />
            <b> Veja as opções </b> <br />
            <br />
            <br />
            <br />
            <a
              href="/produto/?filter=contemplado;nao-contemplado;cancelado&amp;item=carro&amp;credit=;&amp;debit=;"
              className="blue"
            >
              Compare agora &gt;
            </a>
          </div>
          <div
            className="f-1 bg-noarea"
            style={{
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fcapt-carro.JPG?alt=media&amp;token=ad2c4862-b1db-49d5-a3ab-6afdb9e488cd')",
              backgroundPosition: "left center",
              backgroundSize: "330px",
            }}
          ></div>
        </div>
        <br />
        <div className="Blanc row">
          <div className="f-1 20p">
            Moto <br />
            <b> Veja as opções </b> <br />
            <br />
            <br />
            <br />
            <a
              href="/produto/?filter=contemplado;nao-contemplado;cancelado&amp;item=moto&amp;credit=;&amp;debit=;"
              className="blue"
            >
              Compare agora &gt;
            </a>
          </div>
          <div
            className="f-1 bg-noarea"
            style={{
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fcapt-moto.JPG?alt=media&amp;token=ad2c4862-b1db-49d5-a3ab-6afdb9e488cd')",
              backgroundPosition: "left center",
              backgroundSize: "330px",
            }}
          ></div>
        </div>
        <br />
        <div className="Blanc row">
          <div className="f-1 20p">
            Imóvel <br />
            <b> Veja as opções </b> <br />
            <br />
            <br />
            <br />
            <a
              href="/produto/?filter=contemplado;nao-contemplado;cancelado&amp;item=imovel&amp;credit=;&amp;debit=;"
              className="blue"
            >
              Compare agora &gt;
            </a>
          </div>
          <div
            className="f-1 bg-noarea"
            style={{
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fcapt-imovel.JPG?alt=media&amp;token=ad2c4862-b1db-49d5-a3ab-6afdb9e488cd')",
              backgroundPosition: "left center",
              backgroundSize: "330px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default ConAndamento;
