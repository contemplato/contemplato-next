import React from "react"

function Footer() {
  return (
    <div className="Blue" style={{ width: "100%", float: "left" }}>
      <div className="1280y 50p row wrap">
        <div className="fo16 10p col mobilecenter">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2FContemplato_Logo_White.png?alt=media&token=a293fbd2-1790-49b3-9d6c-f1ce311a0c5c"
            alt="Contemplato"
            className="mobilecenter"
            width="150"
          />
        </div>

        {/* <div
          className="fo16 10p col mobilecenter"
          style={{ slineHeight: "26px" }}
        >
          <a href="/anucie" className="blanc">
            Anucie
          </a>
          <br />
          <a
            href="https://www.contemplato.com/produto/?filter=contemplado;nao-contemplado;cancelado&item=imovel;carro;moto&credit=;&debit=;"
            className="blanc"
          >
            Comprar
          </a>
          <br />
          <a href="/anucie" className="blanc">
            Vender
          </a>
          <br />
          <a
            href="https://contemplato.wikidot.com/"
            target="_blank"
            className="blanc"
          >
            Wiki
          </a>
          <br />
          <a href="/avalie/consorcio" className="blanc">
            Avalie
          </a>
        </div> */}

        <div
          className="fo16 10p blanc col mobilecenter"
          style={{ slineHeight: "26px" }}
        >
          <b> Endereço </b>
          <br />
          Rua Helena, 218. Sala 1007
          <br />
          Vila Olímpa - São Paulo - SP
          <br />
          CEP 04552-050
        </div>

        <div
          className="fo16 10p blanc col mobilecenter"
          style={{ lineHeight: "20px" }}
        >
          <b> Atendimento </b>
          <br />
          Horário de atendimento:
          <br />
          9h00 às 18h00
          <br />
          contato@contemplato.com
          <br /> (11) 93296-7865
        </div>
      </div>

      <div className="cen 10p fo14 blanc mobilecenter">
        © Contemplato 2021 - Todos os direitos reservados
      </div>
    </div>
  )
}
export default Footer
