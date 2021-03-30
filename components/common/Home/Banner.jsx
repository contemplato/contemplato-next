import React from "react";

import "../../../styles/app.css";

function Banner() {
  return (
    <div
      id="content-filtro-principal"
      className="bg-area col"
      style={{
        backgroundImage:
          "url(https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fheader-bg-contemplato.png?alt=media&amp;token=9cd6d5c9-78fc-469b-9551-2d06be972383)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="100w col 20p ocult"
        style={{ marginTop: "20px", alignItems: "flex-end" }}
      >
        <a
          href="/avalie/consorcio"
          className="fo18 100w bt-response 10p 10r rgt Orange blanc"
          style={{
            textAlign: "center",
            width: "250px",
          }}
        >
          Venda seu consórcio
        </a>
      </div>
      <div className="100w 40p col">
        <p className="fo32 cen blanc">
          Encontre seu <br className="none show"></br>
          consórcio ideal
        </p>
        <div
          className="960y center 30p 20r ocult"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            marginTop: "20px",
            maxWidth: "1100px",
          }}
        >
          <div className="row">
            <label className="labelbox 100w bt-response ocult">
              <input
                type="radio"
                name="header-filter"
                id="select-type"
                value="0"
                checked
              />
              <div className="mode-1 fo17 10p 20r blanc col cen">
                Contemplado
              </div>
            </label>

            <label className="labelbox 100w bt-response">
              <input
                type="radio"
                name="header-filter"
                id="select-type"
                value="4"
              />
              <div className="mode-1 fo17 10p 20r blanc col cen ocult">
                Não contemplado
              </div>
            </label>

            <label className="labelbox 100w bt-response">
              <input
                type="radio"
                name="header-filter"
                id="select-type"
                value="3"
              />
              <div className="mode-1 fo16 10p 20r blanc col cen ocult">
                Novo
              </div>
            </label>
          </div>
          <div className="100w row" style={{ marginTop: "20px" }}>
            <div
              className="f-1 5p blanc col ocult"
              style={{ maxWidth: "340px" }}
            >
              Bem desejado
              <select
                id="select-item"
                className="10p 10r ocult"
                style={{ marginTop: "10px" }}
              >
                <option value="1">Carro</option>
                <option value="2">Moto</option>
                <option value="0">Imóvel</option>
              </select>
            </div>
            <div
              className="f-1 5p blanc col ocult"
              style={{ maxWidth: "340px" }}
            >
              Crédito
              <div className="row" style={{ marginTop: "10px" }}>
                <input
                  type="tel"
                  id="min-credit-1"
                  className="f-1 10p ocult"
                  placeholder="De"
                  style={{ borderRadius: " 5px 0 0 5px", marginRight: "2px" }}
                />
                <input
                  type="tel"
                  id="max-credit-1"
                  className="f-1  10p ocult"
                  placeholder="Até"
                  style={{ borderRadius: "0 5px 5px 0" }}
                />
              </div>
            </div>
            <div
              className="f-1 5p blanc col ocult"
              style={{ maxWidth: "340px" }}
            >
              Parcelas
              <div className="row" style={{ marginTop: "10px" }}>
                <input
                  type="tel"
                  id="min-debit-1"
                  className="f-1 10p ocult"
                  placeholder="De"
                  style={{ borderRadius: "5px 0 0 5px", marginRight: "2px" }}
                />
                <input
                  type="tel"
                  id="max-debit-1"
                  className="f-1 10p"
                  placeholder="Até"
                  style={{ borderRadius: "0 5px 5px 0" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="100w 20p col ocult"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            id="on-filter"
            className="100w bt-response fo22 10p 20r cen Blue blanc ocult"
            style={{
              textAlign: "center",
            }}
          >
            Buscar
          </button>
        </div>
        <p className="fo18 blanc ocult" style={{ marginTop: "20px" }}>
          #O MAIOR MARKETPLACE DE CONSÓRCIO DO BRASIL
        </p>
        <div className="10p center">
          <a
            href="/produto/?filter=contemplado;nao-contemplado;cancelado&amp;item=imovel;carro;moto&amp;credit=;&amp;debit=;"
            className="100w fo22 20p 30r rgt Blue blanc none show"
            style={{
              textAlign: "center",
            }}
          >
            Buscar
          </a>
        </div>
        <p className="fo16 cen blanc none show" style={{ margin: "20px" }}>
          #O MAIOR MARKETPLACE DE CONSÓRCIO DO BRASIL
        </p>
      </div>
    </div>
  );
}

export default Banner;
