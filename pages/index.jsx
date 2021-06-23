import React from "react";
import axios from "axios";
// CSS
// import "../styles/app.css"
//COMMON
import firebase from "../components/common/data/firebase";
import ListEquipe from "../components/common/data/ListEquipe";

import Footer from "../components/common/footer/Footer";
import maskPhone from "../components/common/utils/masks/phone";
import Alert from "../components/common/alert/index";

import EquipeCard from "../components/common/Avalie/EquipeCard";
import WikiList from "../components/common/data/WikiList";
import Wiki from "../components/common/Home/WikiCard";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import * as gtag from "../components/common/lib/gtag";

// images
// import headerBottom from "../images/header-bottom.png"
// import icoAnexo from "../images/ico-anexo.png"
// import icon1 from "../images/ico-n-1.png"
// import icon2 from "../images/ico-n-2.png"
// import icon3 from "../images/ico-n-3.png"
// import icon4 from "../images/ico-n-4.png"

// import icoSaiba1 from "../images/ico-saiba-1.png"
// import icoSaiba2 from "../images/ico-saiba-2.png"
// import icoSaiba3 from "../images/ico-saiba-3.png"
// import bgSaiba from "../images/bg-saiba.png"
// import background from "../images/header-banner-1.png"
// import logo from "../images/logo-contemplato.png"
// import titleComoEFeito from "../images/title-como-e-feito.png"
// import titleQuemSomos from "../images/title-quem-somos.png"
// import LogoAzul from "../images/logo-contemplato-azul.png"
// import quemSomos1 from "../images/quem-somos-1.png"
// import quemSomos2 from "../images/quem-somos-2.png"
// import quemSomos3 from "../images/quem-somos-3.png"
// import quemSomos4 from "../images/quem-somos-4.png"
// import Parceiros from "../images/parceiros.png"

class Avalie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 3,
      input: {},
      errors: {},
      image: null,
      showMenu: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.showMenu.bind(this);
  }

  showMenu(event) {
    this.setState({ showMenu: !this.state.showMenu });
  }

  handleChange = (event) => {
    if (event.target.files) {
      document.getElementById("image-anexo").src =
        "https://image.flaticon.com/icons/png/512/98/98866.png";
      this.state.image = event.target.files;
    }
  };

  onChange = (event) => {
    let input = this.state.input;
    input[event.target.name] =
      event.target.name === "phone"
        ? maskPhone(event.target.value)
        : event.target.value;
    this.setState({ input });
  };

  handleUpload = async (event) => {
    event.preventDefault();
    gtag.event({
      action: "submit_form",
      category: "Contact",
      label: "Item added",
      value: "Playing cards",
    });

    const { data } = await axios.post(
      /* "http://core-content-cc-co.umbler.net/p/post/contemplato/avalie/default", */
      "http://webapi-server-contempla-to.umbler.net/contemplato/avalie",
      {
        display: this.state.input.display || "",
        email: this.state.input.email || "",
        phone: this.state.input.phone || "",
        extract: this.state.image && this.state.image.length > 0 ? 1 : 0,
      },
      {
        headers: {
          Authorization: "APP-AVALIE",
        },
      }
    );
    // console.log(this.state.input.phone);
    // console.log(data);
    if (!data.status) Alert(data);
    else {
      let file = this.state.image;
      let upload = [];

      if (file !== null) {
        for (let _ of file) {
          const type = _.type.split("/")[1];
          const rename = Math.random().toString(36).substring(5);
          let task = await firebase
            .storage()
            .ref(`Documentos/CRM/Avaliacao/${data.result.id}/${rename}.${type}`)
            .put(_, { contentType: _.type });
          upload.push(task);
        }

        try {
          Promise.all([...upload]);
          document.location.href = "/enviado";
        } catch (error) {
          alert(error);
        }
      } else {
        document.location.href = "/enviado";
      }
    }
  };

  //Paginacao

  prev = () => {
    let screen = document.querySelector(".slide").offsetWidth;
    document.querySelector(".slide").scrollLeft -= screen;
  };

  next = () => {
    let screen = document.querySelector(".slide").offsetWidth;
    document.querySelector(".slide").scrollLeft += screen;
  };

  // Alert({message: "asdas", status: true})

  //function event to googleAnalitics
  addToCart = () => {
    console.log("chamou");
    gtag.event({
      action: "Whatsapp",
      category: "ecommerce",
      label: "Item added",
      value: "Playing cards",
    });
  };

  render() {
    return (
      <>
        <div
          className="ico cover"
          style={{
            backgroundImage: `url(/images/header-banner-1.png)`,
            backgroundPosition: "top center",
          }}
        >
          <div className="row center 960y 10p wrap">
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
              {/* <a
                href="/produto/?filter=contemplado;nao-contemplado;cancelado&amp;item=imovel;carro;moto&amp;credit=;&amp;debit=;"
                className="blanc 5p"
                style={{ marginRight: "30px" }}
              >
                Comprar
              </a> */}
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
            {/* menu Mobile */}
            <nav
              style={{
                backgroundColor: "#345d9d",
                width: "92%",
                padding: "10px",
                position: "fixed",
                marginTop: "10px",
                top: "0",
                zIndex: "99",
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
                      className="blanc menu-icon "
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
                      style={{
                        color: "white",
                      }}
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
            {/*menu mobile  */}
          </div>
          <div
            className="row center 960y 10p wrap"
            style={{ marginTop: "20px" }}
          >
            <div className="2s 10p mobilecol mobilecenter">
              <p
                style={{
                  fontSize: "42px",
                  color: " #24a5d3",
                  lineHeight: "42px",
                }}
              >
                <b>
                  Venda seu <br />
                  consórcio agora!
                </b>
              </p>
              <p
                style={{
                  fontSize: "28px",
                  color: "#ffffff",
                  lineHeight: "33px",
                }}
              >
                Nós compramos ou auxiliamos você a vender
                <b style={{ color: "#ff9632" }}> sua cota de consórcio.</b>
              </p>
            </div>
            <div id="form-avalie" className="2s 10p mobilecol">
              <div
                className="30p 20r"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  boxShadow: "0px 10px 20px 0px rgba(1, 74, 143, 0.1)",
                  maxWidth: "360px",
                  margin: "0px auto",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    color: "#345d9d",
                    lineHeight: "22x",
                  }}
                >
                  Preencha os dados que nós
                  <b> entraremos em contato em menos de 24 horas. </b>
                </p>
                <br />

                <div id="error-emited"></div>
                {/*  */}

                {/* input nome */}
                <div className="over-input">
                  <input
                    id="display"
                    type="text"
                    name="display"
                    value={this.state.input.display}
                    onChange={this.onChange}
                    className="Blanc 100w 10p 10r"
                    required=""
                    placeholder="Nome sobrenome*"
                  />

                  <label htmlFor="display" className="fo12 black">
                    {" "}
                    Nome sobrenome*{" "}
                  </label>
                </div>
                {/*  */}
                <br />
                {/* input email */}
                <div className="over-input">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={this.state.input.email}
                    onChange={this.onChange}
                    className="Blanc 100w 10p 10r"
                    required=""
                    placeholder="E-mail"
                  />
                  {/* <div>{this.state.errors.email}</div> */}

                  <label htmlFor="email" className="fo12 black">
                    {" "}
                    E-mail{" "}
                  </label>
                </div>
                {/*  */}
                <br />
                {/* input Telefone */}
                <div className="over-input">
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={this.state.input.phone}
                    onChange={this.onChange}
                    className="Blanc 100w 10p 10r"
                    required=""
                    maxLength={15}
                    placeholder="Telefone"
                  />
                  {/* <div>{this.state.errors.telefone}</div> */}

                  <label htmlFor="phone" className="fo12 black">
                    {" "}
                    Telefone{" "}
                  </label>
                </div>
                {/*  */}

                <br />
                <div className="row center">
                  <div className="2s 5p cen">
                    {/* input File */}
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
                      <img
                        id="image-anexo"
                        alt="image2"
                        src="/images/ico-anexo.png"
                        className="cen"
                        width="50"
                        border="0"
                        style={{ cursor: "pointer", marginBottom: "0px" }}
                      />
                      <br />
                      <span style={{ fontSize: "11px", marginTop: "0px" }}>
                        {" "}
                        Anexar extrato{" "}
                      </span>
                    </label>
                    {/*  */}
                  </div>
                  <div className="2s 5p">
                    <button
                      id="on-load"
                      className="100w 10p 5r"
                      style={{
                        backgroundColor: "#ff9632",
                        fontSize: "14px",
                        color: "#ffffff",
                      }}
                      onClick={this.handleUpload}
                    >
                      Continuar
                    </button>
                  </div>
                </div>
                {/*  */}
                <br />
                <div
                  style={{
                    fontSize: "13px",
                    color: "#434443",
                    textAlign: "center",
                    lineHeight: "19px",
                  }}
                >
                  Faça uma avaliação da sua cota de consórcio conosco e venda
                  pelo melhor preço!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ico cover"
          style={{
            backgroundImage: `url(/images/header-bottom.png)`,
            backgroundPosition: "bottom center",
            height: "80px",
          }}
        >
          {" "}
        </div>

        <div className="1280y 10p cen" style={{ marginTop: "50px" }}>
          <img
            src="/images/title-como-e-feito.png"
            alt="image3"
            width="100%"
            style={{ maxWidth: "750px" }}
          />
          <br />
          <br />
          <div className="row lft wrap mobilecol">
            <div className="2s 10p row center mobilecol">
              <img
                src="/images/ico-n-1.png"
                alt="image4"
                width="100%"
                style={{ maxWidth: "160px" }}
              />
              <div className="2s">
                <p
                  style={{
                    fontSize: "18px",
                    color: "#434443",
                    lineHeight: "23px",
                  }}
                >
                  <b> Preencha o formulário </b>
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#828282",
                    lineHeight: "21px",
                  }}
                >
                  Informe os dados de contato e insira o extrato atualizado do
                  seu consórcio.
                </p>
              </div>
            </div>
            <div className="2s 10p row center mobilecol">
              <img
                src="/images/ico-n-2.png"
                alt="image5"
                width="100%"
                style={{ maxWidth: "160px" }}
              />
              <div className="2s">
                <p
                  style={{
                    fontSize: "18px",
                    color: "#434443",
                    lineHeight: "23px",
                  }}
                >
                  <b> Validação dos dados </b>
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#828282",
                    lineHeight: "21px",
                  }}
                >
                  As informações serão validadas para a segurança da negociação.
                </p>
              </div>
            </div>
            <div className="1s"></div>
          </div>
          <div className="row lft wrap mobilecol">
            <div className="1s"></div>
            <div className="2s 10p row center mobilecol">
              <img
                src="/images/ico-n-3.png"
                alt="image6"
                width="100%"
                style={{ maxWidth: "160px" }}
              />
              <div className="2s">
                <p
                  style={{
                    fontSize: "18px",
                    color: "#434443",
                    lineHeight: "23px",
                  }}
                >
                  <b> Avaliação da cota </b>
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#828282",
                    lineHeight: "21px",
                  }}
                >
                  Nosso time irá analisar o valor da sua cota e enviar uma
                  proposta.
                </p>
              </div>
            </div>
            <div className="2s 10p row center mobilecol">
              <img
                src="/images/ico-n-4.png"
                alt="image7"
                width="100%"
                style={{ maxWidth: "160px" }}
              />
              <div className="2s">
                <p
                  style={{
                    fontSize: "18px",
                    color: "#434443",
                    lineHeight: "23px",
                  }}
                >
                  <b> Dinheiro na conta </b>
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#828282",
                    lineHeight: "21px",
                  }}
                >
                  Pronto! Você está livre do consórcio e com o dinheiro na
                  conta!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ico cover rel"
          style={{
            backgroundImage: `url(/images/bg-saiba.png)`,
            backgroundPosition: "top center",
          }}
        >
          <p
            style={{
              fontSize: "38px",
              paddingTop: "150px",
              fontWeight: "800",
              color: "#ffffff",
              textAlign: "center",
              lineHeight: "43px",
            }}
          >
            Saiba por que fazer parte da{" "}
            <span style={{ color: "#ff9632" }}>
              maior <br />
              rede de consórcio digital do Brasil.
            </span>
          </p>
          <div className="680y 15p row center wrap">
            <div className="2s 10p over-input">
              <img
                src="/images/ico-saiba-1.png"
                alt="image8"
                width="150"
                className="absol"
                style={{ top: "-30px", left: "25%" }}
              />
              <p
                style={{
                  fontSize: "24px",
                  color: "#ffffff",
                  marginBottom: "-20px",
                }}
              >
                Mais de
              </p>
              <p
                style={{
                  fontSize: "67px",
                  fontWeight: "800",
                  color: "#24a5d3",
                  marginTop: "-20px",
                  marginBottom: "-20px",
                }}
              >
                20
                <span
                  style={{
                    fontSize: "47px",
                    fontWeight: "800",
                    color: "#24a5d3",
                  }}
                >
                  Milhões
                </span>
              </p>
              <p
                style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                  color: "#ff9632",
                  marginTop: "-20px",
                  marginBottom: "-20px",
                }}
              >
                em créditos originados
              </p>
            </div>
            <div className="2s 10p over-input">
              <img
                src="/images/ico-saiba-2.png"
                alt="image9"
                width="85"
                className="absol"
                style={{ top: "-10px", left: "35%" }}
              />
              <p
                style={{
                  fontSize: "24px",
                  color: "#ffffff",
                  marginBottom: "-20px",
                }}
              >
                Mais de
              </p>
              <p
                style={{
                  fontSize: "67px",
                  fontWeight: "800",
                  color: "#24a5d3",
                  marginTop: "-20px",
                  marginBottom: "-20px",
                }}
              >
                500
              </p>
              <p
                style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                  color: "#ff9632",
                  marginTop: "-20px",
                  marginBottom: "-20px",
                  lineHeight: "26px",
                }}
              >
                corretores
                <br />
                credenciados
              </p>
            </div>
          </div>
          <div className="960y 15p row center wrap">
            <div className="2s 10p over-input">
              <img
                src="/images/ico-saiba-3.png"
                alt="image10"
                width="105"
                className="absol"
                style={{ top: "0px", left: "35%" }}
              />
              <p
                style={{
                  fontSize: "24px",
                  color: "#ffffff",
                  marginBottom: "-20px",
                }}
              >
                Mais de
              </p>
              <p
                style={{
                  fontSize: "67px",
                  fontWeight: "800",
                  color: "#24a5d3",
                  marginTop: "-20px",
                  marginBottom: "-20px",
                }}
              >
                5
                <span
                  style={{
                    fontSize: "47px",
                    fontWeight: "800",
                    color: "#24a5d3",
                  }}
                >
                  Mil
                </span>
              </p>
              <p
                style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                  color: "#ff9632",
                  marginTop: "-20px",
                  lineHeight: "26px",
                }}
              >
                clientes
                <br />
                satisfeitos
              </p>
            </div>
            <div className="2s 10p">
              <p
                style={{
                  fontSize: "24px",
                  color: "#ffffff",
                  marginBottom: "0px",
                }}
              >
                Processo
              </p>
              <p
                style={{
                  fontSize: "32px",
                  color: "#ff9632",
                  marginTop: "0px",
                  fontWeight: "bold",
                  lineHeight: "33px",
                }}
              >
                ágil, seguro
                <br />e digital
              </p>
            </div>
            <div className="2s 10p">
              <p
                style={{
                  fontSize: " 24px",
                  color: "#ffffff",
                  marginBottom: "0px",
                }}
              >
                Negociação
              </p>
              <p
                style={{
                  fontSize: "32px",
                  color: "#ff9632",
                  marginTop: "0px",
                  fontWeight: "bold",
                  lineHeight: "33px",
                }}
              >
                em todo <br />o Brasil
              </p>
            </div>
            <div className="2s 10p">
              <p
                style={{
                  fontSize: "32px",
                  color: "#ff9632",
                  marginBottom: "0px",
                  fontWeight: "bold",
                  lineHeight: "33px",
                }}
              >
                A melhor
                <br />
                avaliação
              </p>
              <p
                style={{ fontSize: "24px", color: "#ffffff", marginTop: "0px" }}
              >
                do mercado
              </p>
            </div>
          </div>
        </div>
        <div className="1280y 10p cen" style={{ marginTop: "100px" }}>
          <img
            src="/images/title-quem-somos.png"
            alt="image11"
            width="100%"
            style={{ maxWidth: "850px" }}
          />
        </div>
        <div className="1280y row wrap center" style={{ paddingTop: "10px" }}>
          <div className="2s 10p">
            <img
              src="/images/logo-contemplato-azul.png"
              alt="image12"
              width="200"
            />{" "}
            <br />
            <p
              style={{ fontSize: "20px", color: "#828282", lineHeight: "25px" }}
            >
              Somos uma fintech que nasceu para prover{" "}
              <b>eficiência e liquidez</b> ao mercado secundário de consórcio,
              com <b>tecnologia de ponta</b>,<b>segurança</b> e{" "}
              <b>agilidade nas transferências.</b> Comercializamos cotas{" "}
              <b>contempladas, canceladas e em andamento</b> - de{" "}
              <b>todas as administradoras</b> de consórcio do Brasil.
            </p>
          </div>
          <div className="2s 10p row ocult">
            <div className="2s 5p">
              <img
                src="/images/quem-somos-1.png"
                alt="image13"
                width="100%"
                style={{ maxWidth: "400px" }}
              />
              <br />
              <br />
              <img
                src="/images/quem-somos-2.jpeg"
                alt="image14"
                width="100%"
                style={{ maxWidth: "400px" }}
              />
            </div>
            <div className="2s 5p">
              <img
                src="/images/quem-somos-3.png"
                alt="image15"
                width="100%"
                style={{ maxWidth: "400px" }}
              />
              <br />
              <br />
              <img
                src="/images/quem-somos-4.png"
                alt="image16"
                width="100%"
                style={{ maxWidth: "400px" }}
              />
            </div>
          </div>
        </div>

        {/* Nossos Parceiros */}
        <div className="1280y 10p cen" style={{ marginTop: "50px" }}>
          <img
            src="/images/parceiros.png"
            alt="Nossos Parceiros"
            width="100%"
            style={{ maxWidth: "750px" }}
          />
          <br />
          <br />
          <div className="row wrap">
            <div className="2s 5p row center" style={{ maxWidth: "230px" }}>
              <img
                src="/images/logo-PinheiroNeto.png"
                alt="PinheiroNeto Advogados"
                width="100%"
                style={{
                  maxWidth: "230px",
                  filter: "invert(100%)",
                  border: "0px",
                }}
              />
            </div>
            <div
              className="2s 5p row center"
              style={{ maxWidth: "230px", marginLeft: "10px" }}
            >
              <img
                src="/images/logo-contea.png"
                alt="Contea Capital"
                width="100%"
                style={{ maxWidth: "230px" }}
              />
            </div>
          </div>
        </div>

        {/* Wiki Contemplato */}
        <h1 style={{ color: "#434443", marginTop: "50px" }} align="center">
          {" "}
          Wiki Contemplato{" "}
        </h1>
        <div
          id="content-wiki"
          className=" 1280y row"
          style={{ flexFlow: "wrap" }}
        >
          {WikiList.map((item, index) => (
            <Wiki
              text={item.text}
              image={item.image}
              url={item.url}
              target={"_blank"}
              idy={index.toString()}
            />
          ))}
        </div>
        {/* nossa Equipe */}
        <h1 style={{ color: "#434443" }} align="center">
          {" "}
          Nossa equipe{" "}
        </h1>
        <div className="1280y cen slide">
          {ListEquipe.map((el, index) => (
            <EquipeCard
              idy={index.toString()}
              start={this.state.start}
              img={el.img}
              title={el.title}
              description={el.description}
            />
          ))}
        </div>
        <div className="cen 10p">
          <ArrowLeftIcon
            fontSize="large"
            onClick={this.prev}
            style={{
              marginRight: "5px",
              marginBottom: "15px",
              cursor: "pointer",
            }}
          />

          <ArrowRightIcon
            fontSize="large"
            onClick={this.next}
            style={{
              marginLeft: "5px",
              marginBottom: "15px",
              cursor: "pointer",
            }}
          />
          {/* <button
            onClick={this.prev}
            className="Blue 5p 5r"
            style={{ marginRight: "5px", marginBottom: "15px" }}
          ></button> */}
          {/* <button
            onClick={this.next}
            className="Blue 5p 5r"
            style={{ marginLeft: "5px", marginBottom: "15px" }}
          ></button> */}
        </div>

        {/* Outros serviços */}
        {/* <h1 style={{ color: "#434443" }} align="center">
          {" "}
          Outros serviços Contemplato{" "}
        </h1>

        <div className="1280y row wrap">
          <div className="5p f-1">
            <div className="Blanc row">
              <div className="f-2 30p">
                <b className="fo22 gray"> Avaliação Gratuita </b> <br />
                <br />
                Use nosso Avaliador de Cotas gratuíto para chegar no preço ideal
                da sua cota. <br />
                <br />
                <br />
                <a href="/avalie/consorcio" className="blue">
                  Avalie minha cota
                </a>
              </div>
              <div
                className="f-1 bg-noarea ocult"
                style={{
                  backgroundImage:
                    "url('https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fbox-avaliacao.png?alt=media&amp;token=9f31ce25-c3c3-452d-acfb-3677ccbaf2ae')",
                  backgroundPosition: "center center",
                }}
              ></div>
            </div>
          </div>
          <div className="5p f-1 mobilecol">
            <div className="Blanc row">
              <div className="f-2 30p ">
                <b className="fo22 gray"> Portal do Corretor </b> <br />
                <br />
                Faça seu cadastro e negocie com os maiores corretores de
                consórcio do Brasil <br />
                <br />
                <br />
                <a href="https://www.contemplay.com.br" className="blue">
                  Inscreva-se
                </a>
              </div>
              <div
                className="f-1 bg-noarea 10p ocult"
                style={{
                  backgroundImage:
                    "url('https://firebasestorage.googleapis.com/v0/b/contemplato-app.appspot.com/o/Images%2FPublic%2Fbox-portal-corretor.png?alt=media&amp;token=8a13d2a8-d4eb-496f-aafb-d766ef0699fb')",
                  backgroundPosition: "center center",
                }}
              ></div>
            </div>
          </div>
        </div> */}

        {/* <img
          src="/images/whatsapp-logo.png"
          alt="logo-whatsApp"
          width="100px"
          style={{ float: "right", position: "fixed", zIndex: "99" }}
        /> */}

        <a
          href="https://api.whatsapp.com/send?phone=5511932967865&text=Ol%C3%A1!%20Tenho%20interesse%20em%20vender%20minha%20cota"
          target="_blank"
          onClick={this.addToCart}
        >
          <div className="button-whatsapp">
            <img src="/images/whatsapp-logo.png" alt="Whatsapp" width="35px" />
          </div>
        </a>

        <button onClick={this.addToCart}>analitics</button>

        <Footer />
      </>
    );
  }
}

export default Avalie;
