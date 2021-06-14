import React from "react";
import Footer from "../components/common/footer/Footer";
// import background from "../images/header-banner-1.png"
// import logo from "../images/logo-contemplato.png"
import ListEquipe from "../components/common/data/ListEquipe";
import EquipeCard from "../components/common/Avalie/EquipeCard";
import WikiList from "../components/common/data/WikiList";
import Wiki from "../components/common/Home/WikiCard";
// import headerBottom from "../images/header-bottom.png"
// import icon1 from "../images/ico-n-1.png"
// import icon2 from "../images/ico-n-2.png"
// import icon3 from "../images/ico-n-3.png"
// import icon4 from "../images/ico-n-4.png"
// import bgSaiba from "../images/bg-saiba.png"
// import titleComoEFeito from "../images/title-como-e-feito.png"
// import icoSaiba1 from "../images/ico-saiba-1.png"
// import icoSaiba2 from "../images/ico-saiba-2.png"
// import icoSaiba3 from "../images/ico-saiba-3.png"
// import titleQuemSomos from "../images/title-quem-somos.png"
// import LogoAzul from "../images/logo-contemplato-azul.png"
// import quemSomos1 from "../images/quem-somos-1.png"
// import quemSomos2 from "../images/quem-somos-2.png"
// import quemSomos3 from "../images/quem-somos-3.png"
// import quemSomos4 from "../images/quem-somos-4.png"
// import Parceiros from "../images/parceiros.png"

class EnvioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 3,
    };
  }

  //Paginacao
  prev = () => {
    let screen = document.querySelector(".slide").offsetWidth;
    document.querySelector(".slide").scrollLeft -= screen;
  };

  next = () => {
    let screen = document.querySelector(".slide").offsetWidth;
    document.querySelector(".slide").scrollLeft += screen;
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
                  src="/images/logo-contemplato.png"
                  alt="logo"
                  width="135"
                  border="0"
                />
              </a>
            </div>
            <div className="2s 5p row">
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
          </div>
          <div
            className="row center 960y 10p wrap"
            style={{ marginTop: "20px" }}
          >
            <div className="2s 20p mobilecol mobilecenter">
              <p
                style={{
                  fontSize: "42px",
                  color: " #24a5d3",
                  lineHeight: "42px",
                }}
              >
                <b>Muito Obrigado!</b>
              </p>
              <p
                style={{
                  fontSize: "28px",
                  color: "#ffffff",
                  lineHeight: "33px",
                }}
              >
                Sua solicitação foi enviada com sucesso.
                <b style={{ color: "#ff9632" }}>
                  <br /> Aguarde, estamos avaliando a sua cota.
                </b>
              </p>
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
            alt="title como e feito"
            width="100%"
            style={{ maxWidth: "750px" }}
          />
          <br />
          <br />
          <div className="row lft wrap mobilecol">
            <div className="2s 10p row center mobilecol">
              <img
                src="/images/ico-n-1.png"
                alt="icon1"
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
                alt="icon2"
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
                alt="icon3"
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
                alt="icon4"
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
            Saiba por quê fazer parte da{" "}
            <span style={{ color: "#ff9632" }}>
              maior <br />
              rede de consórcio digital do Brasil.
            </span>
          </p>
          <div className="680y 15p row center wrap">
            <div className="2s 10p over-input">
              <img
                src="/images/ico-saiba-1.png"
                alt="icoSaiba1"
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
                alt="icoSaiba2"
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
                alt="icoSaiba3"
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
            alt="title quem somos"
            width="100%"
            style={{ maxWidth: "850px" }}
          />
        </div>
        <div className="1280y row wrap center" style={{ paddingTop: "10px" }}>
          <div className="2s 10p">
            <img
              src="/images/logo-contemplato-azul.png"
              alt="logoAzul"
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
              <b>contempladas, canceladas e em andamento</b> - de
              <b>todas as administradoras</b> de consórcio do Brasil.
            </p>
          </div>
          <div className="2s 10p row ocult">
            <div className="2s 5p">
              <img
                src="/images/quem-somos-1.png"
                alt="quemSomos1"
                width="100%"
                style={{ maxWidth: "400px" }}
              />
              <br />
              <br />
              <img
                src="/images/quem-somos-2.jpeg"
                alt="quemSomos2"
                width="100%"
                style={{ maxWidth: "400px" }}
              />
            </div>
            <div className="2s 5p">
              <img
                src="/images/quem-somos-3.png"
                alt="quemSomos3"
                width="100%"
                style={{ maxWidth: "400px" }}
              />
              <br />
              <br />
              <img
                src="/images/quem-somos-4.png"
                alt="quemSomos4"
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
            <Wiki idy={index.toString()} text={item.text} image={item.image} />
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
          <button
            onClick={this.prev}
            className="Blue 5p 5r"
            style={{ marginRight: "5px", marginBottom: "15px" }}
          ></button>
          <button
            onClick={this.next}
            className="Blue 5p 5r"
            style={{ marginLeft: "5px", marginBottom: "15px" }}
          ></button>
        </div>

        <Footer />
      </>
    );
  }
}

export default EnvioForm;
