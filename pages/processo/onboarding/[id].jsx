import React, { Component, createRef } from "react";
import axios from "axios";

import maskPhone from "../../../components/common/utils/masks/phoneOn2";
import maskCpf from "../../../components/common/utils/masks/cpf";
import maskRg from "../../../components/common/utils/masks/rg";
import maskDate from "../../../components/common/utils/masks/data";
import Webcam from "react-webcam";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkInvalid: false,
      modalSubmit: false,
      verifIdent: false,
      input: {},
      alterarCam: false,
      capture1: "",
      capture2: "",
      documents: [],
    };
    this.inputDisplayRef = createRef();
    this.inputPhoneRef = createRef();
    this.inputCpfRef = createRef();
    this.inputRgRef = createRef();
    this.inputEmailRef = createRef();
    this.inputEnderecoRef = createRef();
    this.inputRuaRef = createRef();
    this.inputNumeroRef = createRef();
    this.inputCEPRef = createRef();
    this.inputBairroRef = createRef();
    this.inputCidadeRef = createRef();
    this.inputEstadoRef = createRef();
    this.inputGrupoRef = createRef();
    this.inputCotaRef = createRef();
    this.inputBirthRef = createRef();
    this.inputComplementoRef = createRef();
    this.onChange = this.onChange.bind(this);
  }
  static async getInitialProps({ query }) {
    const id = query.id;

    return {
      id: id,
    };
  }

  closeModal = () => {
    this.setState({ modalSubmit: false });
    this.setState({ verifIdent: false });
    this.setState({ documents: [] });
    this.setState({ loading: false });
  };

  closeModalFoto = () => {
    this.setState({ modalSubmit: false });
    this.setState({ documents: [] });
    this.setState({ loading: false });
  };

  handleReq = (id) => {
    axios
      .get(
        `https://webapi-server-contempla-to.umbler.net/contemplato/onboarding/${id}`,
        {
          headers: {
            Authorization: "APP-AVALIE",
          },
        }
      )
      .then((data) => {
        if (data.data.data.email == null || data.data.data.email == undefined) {
          this.setState({ linkInvalid: true });
        } else if (
          data.data.data.display == null ||
          data.data.data.display == undefined
        ) {
          this.setState({ linkInvalid: true });
        } else if (
          data.data.data.phone == null ||
          data.data.data.phone == undefined
        ) {
          this.setState({ linkInvalid: true });
        } else if (
          data.data.data.phone == null ||
          data.data.data.phone == undefined
        ) {
          this.setState({ linkInvalid: true });
        } else if (typeof data.data == "object") {
          document.getElementById("email").value = data.data.data.email || " ";
          document.getElementById("display").value =
            data.data.data.display || "";
          document.getElementById("phone").value =
            data.data.data.phone.substring(5, 5) !== " "
              ? data.data.data.phone
              : data.data.data.phone.substring(0, 4) +
                " " +
                data.data.data.phone.substring(4, data.data.data.phone.length);

          document.getElementById(
            "credit"
          ).innerHTML = `R$ ${data.data.data.credit}`;

          document.getElementById(
            "debit"
          ).innerHTML = `R$ ${data.data.data.debit}`;

          document.getElementById(
            "adm"
          ).innerHTML = `${data.data.data.displayAdmin}`;

          document.getElementById(
            "pricing"
          ).innerHTML = `R$ ${data.data.data.pricing}`;

          document.getElementById(
            "bem"
          ).innerHTML = `${data.data.data.displayItem}`;

          document.getElementById(
            "tipo"
          ).innerHTML = `${data.data.data.displayType}`;
        }
      });
  };

  onChange = (event) => {
    const inputsMasks = {
      rg: () => maskRg(event),
      cpf: () => maskCpf(event),
      phone: () => maskPhone(event),
      birth: () => maskDate(event),
    };
    const inputMaskFunction = inputsMasks[event.target.name];

    if (inputMaskFunction) {
      inputMaskFunction(event);
    }
  };

  validaCpfCnpj = (val) => {
    if (val.length == 14) {
      var cpf = val.trim();

      cpf = cpf.replace(/\./g, "");
      cpf = cpf.replace("-", "");
      cpf = cpf.split("");

      var v1 = 0;
      var v2 = 0;
      var aux = false;

      for (var i = 1; cpf.length > i; i++) {
        if (cpf[i - 1] != cpf[i]) {
          aux = true;
        }
      }

      if (aux == false) {
        return false;
      }

      for (var i = 0, p = 10; cpf.length - 2 > i; i++, p--) {
        v1 += cpf[i] * p;
      }

      v1 = (v1 * 10) % 11;

      if (v1 == 10) {
        v1 = 0;
      }

      if (v1 != cpf[9]) {
        return false;
      }

      for (var i = 0, p = 11; cpf.length - 1 > i; i++, p--) {
        v2 += cpf[i] * p;
      }

      v2 = (v2 * 10) % 11;

      if (v2 == 10) {
        v2 = 0;
      }

      if (v2 != cpf[10]) {
        return false;
      } else {
        return true;
      }
    } else if (val.length == 18) {
      var cnpj = val.trim();

      cnpj = cnpj.replace(/\./g, "");
      cnpj = cnpj.replace("-", "");
      cnpj = cnpj.replace("/", "");
      cnpj = cnpj.split("");

      var v1 = 0;
      var v2 = 0;
      var aux = false;

      for (var i = 1; cnpj.length > i; i++) {
        if (cnpj[i - 1] != cnpj[i]) {
          aux = true;
        }
      }

      if (aux == false) {
        return false;
      }

      for (var i = 0, p1 = 5, p2 = 13; cnpj.length - 2 > i; i++, p1--, p2--) {
        if (p1 >= 2) {
          v1 += cnpj[i] * p1;
        } else {
          v1 += cnpj[i] * p2;
        }
      }

      v1 = v1 % 11;

      if (v1 < 2) {
        v1 = 0;
      } else {
        v1 = 11 - v1;
      }

      if (v1 != cnpj[12]) {
        return false;
      }

      for (var i = 0, p1 = 6, p2 = 14; cnpj.length - 1 > i; i++, p1--, p2--) {
        if (p1 >= 2) {
          v2 += cnpj[i] * p1;
        } else {
          v2 += cnpj[i] * p2;
        }
      }

      v2 = v2 % 11;

      if (v2 < 2) {
        v2 = 0;
      } else {
        v2 = 11 - v2;
      }

      if (v2 != cnpj[13]) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };

  validPhone = (phone) => {
    // let regexPhone = /\(\d{2}\)\d{5,6}\-\d{4,5}\b/;
    let regexPhone = /([\(])?([0-9]{2})(.) ([0-9]{5})([\-])?([0-9]{4})/g;
    if (regexPhone.test(phone)) {
      return true;
    } else return false;
  };

  validRg = (rg) => {
    let regexRg = /\d{2}\.\d{3}\.\d{3}\-.\b/;
    if (regexRg.test(rg)) {
      return true;
    } else return false;
  };

  validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  handleInfoProfile = async (event) => {
    event.preventDefault();
    if (
      this.inputDisplayRef.current.value == "" ||
      this.inputDisplayRef.current.value == null ||
      this.inputDisplayRef.current.value.length <= 3
    ) {
      document.getElementById(
        "error"
      ).innerHTML = `<div style="background-color: red; border-radius: 5px;
      text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
      Digite o seu nome
      </div>`;
    } else if (
      this.inputPhoneRef.current.value == "" ||
      this.inputPhoneRef.current.value == null
    ) {
      document.getElementById(
        "error"
      ).innerHTML = `<div style="background-color: red; border-radius: 5px;
      text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
      Digite o telefone
      </div>`;
    } else if (this.validPhone(this.inputPhoneRef.current.value) == false) {
      document.getElementById(
        "error"
      ).innerHTML = `<div style="background-color: red; border-radius: 5px;
      text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
      Digite um Telefone válido
      </div>`;
    } else if (
      this.inputCpfRef.current.value == "" ||
      this.inputCpfRef.current.value == null
    ) {
      document.getElementById(
        "error"
      ).innerHTML = `<div style="background-color: red; border-radius: 5px;
      text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
      Digite o CPF
      </div>`;
    } else if (this.validaCpfCnpj(this.inputCpfRef.current.value) == false) {
      document.getElementById(
        "error"
      ).innerHTML = `<div style="background-color: red; border-radius: 5px;
      text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
      Digite um CPF/CNPJ válido
      </div>`;
    } else if (
      this.inputRgRef.current.value == "" ||
      this.inputRgRef.current.value == null ||
      this.inputRgRef.current.value <= 10
    ) {
      document.getElementById(
        "error"
      ).innerHTML = `<div style="background-color: red; border-radius: 5px;
      text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
      Digite o RG
      </div>`;
    } else if (this.validRg(this.inputRgRef.current.value) == false) {
      document.getElementById(
        "error"
      ).innerHTML = `<div style="background-color: red; border-radius: 5px;
      text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
      Digite um RG válido
      </div>`;
    } else if (
      this.inputEmailRef.current.value == "" ||
      this.inputEmailRef.current.value == null
    ) {
      document.getElementById(
        "error"
      ).innerHTML = `<div style="background-color: red; border-radius: 5px;
      text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
      Digite o email
      </div>`;
    } else if (this.validateEmail(this.inputEmailRef.current.value) == false) {
      document.getElementById(
        "error"
      ).innerHTML = `<div style="background-color: red; border-radius: 5px;
      text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
      Digite um email válido
      </div>`;
    } else if (
      this.inputBirthRef.current.value == "" ||
      this.inputBirthRef.current.value == null
    ) {
      document.getElementById(
        "error"
      ).innerHTML = `<div style="background-color: red; border-radius: 5px;
      text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
      Digite sua data de nascimento
      </div>`;
    } else if (
      this.inputRuaRef.current.value == "" ||
      this.inputRuaRef.current.value == null
    ) {
      document.getElementById(
        "error"
      ).innerHTML = `<div style="background-color: red; border-radius: 5px;
      text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
      Digite a Rua
      </div>`;
    } else if (
      this.inputNumeroRef.current.value == "" ||
      this.inputNumeroRef.current.value == null
    ) {
      document.getElementById(
        "error"
      ).innerHTML = `<div style="background-color: red; border-radius: 5px;
      text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
      Digite a Número
      </div>`;
    } else if (
      this.inputCEPRef.current.value == "" ||
      this.inputCEPRef.current.value == null
    ) {
      document.getElementById(
        "error"
      ).innerHTML = `<div style="background-color: red; border-radius: 5px;
      text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
      Digite a CEP
      </div>`;
    } else if (
      this.inputBairroRef.current.value == "" ||
      this.inputBairroRef.current.value == null
    ) {
      document.getElementById(
        "error"
      ).innerHTML = `<div style="background-color: red; border-radius: 5px;
      text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
      Digite a Bairro
      </div>`;
    } else if (
      this.inputCidadeRef.current.value == "" ||
      this.inputCidadeRef.current.value == null
    ) {
      document.getElementById(
        "error"
      ).innerHTML = `<div style="background-color: red; border-radius: 5px;
      text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
      Digite a Cidade
      </div>`;
    } else if (
      this.inputEstadoRef.current.value == "" ||
      this.inputEstadoRef.current.value == null
    ) {
      document.getElementById(
        "error"
      ).innerHTML = `<div style="background-color: red; border-radius: 5px;
      text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
      Digite a Estado
      </div>`;
    }
    // else if (
    //   this.inputGrupoRef.current.value == "" ||
    //   this.inputGrupoRef.current.value == null
    // ) {
    //   document.getElementById(
    //     "error"
    //   ).innerHTML = `<div style="background-color: red; border-radius: 5px;
    //   text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
    //   Digite o número do grupo
    //   </div>`;
    // }
    // else if (
    //   this.inputCotaRef.current.value == "" ||
    //   this.inputCotaRef.current.value == null
    // ) {
    //   document.getElementById(
    //     "error"
    //   ).innerHTML = `<div style="background-color: red; border-radius: 5px;
    //   text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
    //   Digite o número da cota
    //   </div>`;
    // }
    else {
      const { data: token } = await axios.post(
        `https://webapi-server-contempla-to.umbler.net/bgchecked/generate_token`,
        {
          document: this.inputCpfRef.current.value.replace(/[^\d]*/g, "") || "",
          birth: this.inputBirthRef.current.value || "",
        },
        {
          headers: {
            Authorization: "APP-AVALIE",
          },
        }
      );
      // console.log(token);
      const data = await new Promise((resolve) => {
        const requestInterval = setInterval(async () => {
          const { data: infoProfile } = await axios.put(
            `https://webapi-server-contempla-to.umbler.net/bgchecked/update_onboarding/${this.props.id}`,
            {
              token: token.token,
              document: this.inputCpfRef.current.value || "",
              birth: this.inputBirthRef.current.value || "",
              display: this.inputDisplayRef.current.value || "",
              email: this.inputEmailRef.current.value || "",
              phone: this.inputPhoneRef.current.value || "",
              document2: this.inputRgRef.current.value || "",
              district: this.inputBairroRef.current.value || "",
              number: this.inputNumeroRef.current.value,
              city: this.inputCidadeRef.current.value,
              state: this.inputEstadoRef.current.value,
              address: this.inputRuaRef.current.value,
              codePostal: this.inputCEPRef.current.value || "",
              complement: this.inputComplementoRef.current.value || "",
              group: this.inputGrupoRef.current.value || "",
              quota: this.inputCotaRef.current.value || "",
            },
            {
              headers: {
                Authorization: "APP-AVALIE",
              },
            }
          );
          if (infoProfile.status) {
            clearInterval(requestInterval);
            resolve(infoProfile);
          }
        }, 2000);
      });

      // console.log(data.status);

      if (data.status == true) {
        this.setState({ verifIdent: true });
        document.getElementById(
          "error"
        ).innerHTML = `<div style="background-color: green; border-radius: 5px;
      text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
      Formulário enviado
      </div>`;
      }
      if (data.status == false) {
        document.getElementById(
          "error"
        ).innerHTML = `<div style="background-color: red; border-radius: 5px;
      text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
      Falha ao enviar formulario
      </div>`;
      }
    }
  };

  UploadPhotos = async (event) => {
    event.preventDefault();
    if (this.state.documents.length == [] || this.state.documents.length < 2) {
      document.getElementById(
        "error"
      ).innerHTML = `<div style="background-color: red; border-radius: 5px;
      text-align: center; color: white; border: 10px; margin-bottom: 5px; padding: 5px">
      Tire as fotos dos documentos
      </div>`;
    } else {
      const { data } = axios.post(
        `http://webapi-server-contempla-to.umbler.net/facematch/document/${this.props.id}`,
        {
          // name: this.inputDisplayRef.current.value || "",
          // email: this.inputEmailRef.current.value || "",
          // phone: this.inputPhoneRef.current.value || "",
          images: this.state.documents || "",
          // [imagetest, imagetest]
        },
        {
          headers: {
            Authorization: "APP-AVALIE",
          },
        }
      );
      // console.log(this.state.documents);
      // console.log(data);

      // this.setState({ InvalidImage: data.result.data.affectedRows });
      this.setState({ modalSubmit: true });
    }
  };

  searchCEP = (ev) => {
    const { value } = ev.target;
    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    fetch(`http://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        document.getElementById("rua").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("estado").value = data.uf;
      });
  };
  // Funcoes Camera
  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture1 = () => {
    const imageSrc1 = this.webcam.getScreenshot();
    this.setState({ capture1: imageSrc1 });
  };

  submitFoto = () => {
    this.setState({
      documents: [...this.state.documents, this.state.capture1],
    });
    this.setState({ capture1: "" });
  };

  render() {
    if (!this.state.verifIdent) {
      this.handleReq(this.props.id);
    }
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: this.state.alterarCam ? "user" : "environment",
    };

    return (
      <div
        style={{
          backgroundImage: `url(/images/bg_contemplay_login.png)`,
          backgroundSize: "38%",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          height: "100vh",
        }}
      >
        {/* <div>ID: {this.props.id} </div> */}
        <div className="680y col">
          <p
            style={{
              fontSize: "40px",
              color: "#434443",
              lineHeight: "40px",
              textAlign: "center",
            }}
          >
            {" "}
            Finalize seu <b style={{ color: "#345d9d" }}> cadastro</b>
          </p>

          {this.state.linkInvalid ? (
            <div>
              <div
                className="content 5r 30p Blanc shadow col"
                style={{ width: "600px" }}
              >
                <h1 className="center">LINK INVÁLIDO</h1>
              </div>
            </div>
          ) : (
            <div>
              {this.state.modalSubmit ? (
                <div>
                  <div
                    className="content 5r 30p Blanc shadow col"
                    style={{ width: "600px" }}
                  >
                    <h1 className="center">Muito Obrigado!</h1>
                    <b className="center">
                      Seus dados foram enviados para análise.
                    </b>
                    <b className="center">Aguarde nosso contato.</b>
                    <br />
                    <div className="2s 5p">
                      <button
                        className="100w 10p 5r"
                        style={{
                          backgroundColor: "#345d9d",
                          fontSize: "14px",
                          color: "#ffffff",
                        }}
                        onClick={this.closeModal}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="content 5r 30p Blanc shadow col"
                  style={{ width: "500px" }}
                >
                  <div className="row center">
                    <div>
                      <img
                        src="/images/ico_contemplay_key_login.png"
                        alt="ico-login"
                        width="48"
                      />
                    </div>

                    <div
                      style={{
                        fontSize: 16,
                        color: "#4a4a4a",
                        paddingLeft: 14,
                      }}
                    >
                      Cadastro Contemplato
                    </div>
                  </div>
                  <div id="error"></div>

                  {/* button verificacao de identidade */}
                  {/* {this.state.verifIdent ? (
                <button
                  onClick={() => {
                    this.setState({ verifIdent: false });
                  }}
                  className="100w 10p 5r"
                  style={{
                    backgroundColor: "#1e8cf9",
                    fontSize: "14px",
                    color: "#ffffff",
                  }}
                >
                  {" "}
                  Verificacao Identidade
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.setState({ verifIdent: true });
                  }}
                  className="100w 10p 5r"
                  style={{
                    backgroundColor: "#1e8cf9",
                    fontSize: "14px",
                    color: "#ffffff",
                  }}
                >
                  Verificacao Identidade
                </button>
              )}
               */}

                  {/* verificacao de identidade */}
                  {this.state.verifIdent ? (
                    <details open>
                      <summary>Verificação de identidade</summary>

                      {this.state.documents.length < 2 ? (
                        <div>
                          <div style={{ marginTop: "20px" }}>
                            {this.state.documents < 1 ? (
                              <b>Foto do documento</b>
                            ) : (
                              <b>Selfie com o documento</b>
                            )}
                          </div>
                          {this.state.capture1 == "" ? (
                            <div className="col center sizeCam">
                              <Webcam
                                audio={false}
                                ref={this.setRef}
                                screenshotFormat="image/png"
                                height={250}
                                width={400}
                                videoConstraints={videoConstraints}
                                className="camMobile"
                              />
                            </div>
                          ) : (
                            <img src={this.state.capture1} alt="foto1" />
                          )}
                          <div className="camButton">
                            {/* alterar camera */}
                            {this.state.alterarCam ? (
                              <button
                                onClick={() => {
                                  this.setState({ alterarCam: false });
                                }}
                                className="100w 10p 5r"
                                style={{
                                  backgroundColor: "#345d9d",
                                  fontSize: "14px",
                                  color: "#ffffff",
                                }}
                              >
                                {" "}
                                Alterar Câmera
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  this.setState({ alterarCam: true });
                                }}
                                className="100w 10p 5r"
                                style={{
                                  backgroundColor: "#345d9d",
                                  fontSize: "14px",
                                  color: "#ffffff",
                                }}
                              >
                                Alterar Câmera
                              </button>
                            )}
                            {/*  */}
                            {this.state.capture1 ? (
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  this.setState({ capture1: "" });
                                }}
                                className="100w 10p 5r"
                                style={{
                                  backgroundColor: "#345d9d",
                                  fontSize: "14px",
                                  color: "#ffffff",
                                  marginTop: "10px",
                                }}
                              >
                                Tirar outra foto
                              </button>
                            ) : (
                              <button
                                onClick={(e) => {
                                  this.capture1();
                                }}
                                className="100w 10p 5r"
                                style={{
                                  backgroundColor: "#345d9d",
                                  fontSize: "14px",
                                  color: "#ffffff",
                                  marginTop: "10px",
                                }}
                              >
                                Tirar foto
                              </button>
                            )}

                            {/* confirmar foto */}
                            {this.state.capture1 ? (
                              <button
                                onClick={(e) => {
                                  this.submitFoto();
                                }}
                                className="100w 10p 5r"
                                style={{
                                  backgroundColor: "#345d9d",
                                  fontSize: "14px",
                                  color: "#ffffff",
                                  marginTop: "10px",
                                }}
                              >
                                Confirmar foto
                              </button>
                            ) : (
                              <p></p>
                            )}
                            {/*  */}
                          </div>
                        </div>
                      ) : (
                        <div
                          style={{
                            marginTop: "30px",
                            marginBottom: "30px",
                            textAlign: "center",
                          }}
                        >
                          <b>Fotos salvas!</b>
                        </div>
                      )}
                      <div className="2s 5p">
                        <button
                          id="on-load"
                          className="100w 10p 5r"
                          style={{
                            backgroundColor: "#345d9d",
                            fontSize: "14px",
                            color: "#ffffff",
                          }}
                          onClick={this.UploadPhotos}
                        >
                          Enviar Fotos
                        </button>
                      </div>
                    </details>
                  ) : (
                    <details open>
                      <summary>Formulário</summary>

                      <br />
                      <div className="col wrap">
                        <h5 style={{ marginBottom: "10px", marginTop: "0px" }}>
                          Dados pessoais
                        </h5>
                        <div className="row" style={{ marginBottom: "10px" }}>
                          <div className="over-input">
                            <input
                              id="display"
                              type="text"
                              name="display"
                              value={this.state.input.display}
                              onChange={this.onChange}
                              className="Blanc 100w 10p 10r"
                              required=""
                              ref={this.inputDisplayRef}
                              placeholder="Nome sobrenome*"
                              style={{ backgroundColor: "#F5F5F5" }}
                            />

                            <label htmlFor="display" className="fo12 black">
                              {" "}
                              Nome sobrenome*{" "}
                            </label>
                          </div>
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
                              ref={this.inputPhoneRef}
                              maxLength={15}
                              placeholder="Telefone*"
                              style={{
                                backgroundColor: "#F5F5F5",
                                marginLeft: "15px",
                              }}
                            />
                            <label htmlFor="phone" className="fo12 black">
                              {" "}
                              Telefone{" "}
                            </label>
                          </div>
                          {/*  */}
                        </div>
                        <div className="row" style={{ marginBottom: "10px" }}>
                          {/* CPF */}
                          <div className="over-input">
                            <input
                              id="cpf"
                              type="text"
                              name="cpf"
                              value={this.state.input.cpf}
                              onInput={this.onChange}
                              className="Blanc 100w 10p 10r"
                              // maxLength="14"
                              required=""
                              ref={this.inputCpfRef}
                              placeholder="CPF/CNPJ*"
                              style={{ backgroundColor: "#F5F5F5" }}
                            />

                            <label htmlFor="cpf" className="fo12 black">
                              {" "}
                              CPF{" "}
                            </label>
                          </div>
                          {/*  */}

                          {/* RG */}
                          <div className="over-input">
                            <input
                              id="rg"
                              type="text"
                              name="rg"
                              value={this.state.input.rg}
                              onChange={this.onChange}
                              className="Blanc 100w 10p 10r"
                              maxLength="12"
                              ref={this.inputRgRef}
                              required=""
                              placeholder="RG"
                              style={{
                                backgroundColor: "#F5F5F5",
                                marginLeft: "15px",
                              }}
                            />

                            <label htmlFor="rg" className="fo12 black">
                              {" "}
                              RG{" "}
                            </label>
                          </div>
                          {/*  */}
                        </div>
                        <div className="row" style={{ marginBottom: "10px" }}>
                          {/* Email */}
                          <div className="over-input">
                            <input
                              id="email"
                              type="email"
                              name="email"
                              value={this.state.input.email}
                              onChange={this.onChange}
                              className="Blanc 100w 10p 10r"
                              required=""
                              ref={this.inputEmailRef}
                              placeholder="E-mail*"
                              style={{ backgroundColor: "#F5F5F5" }}
                            />
                            <label htmlFor="email" className="fo12 black">
                              {" "}
                              E-mail*{" "}
                            </label>
                          </div>
                          {/*  */}
                          {/* data de nascimento  */}
                          <div className="over-input">
                            <input
                              id="birth"
                              name="birth"
                              type="tel"
                              maxLength="10"
                              value={this.state.input.birth}
                              onChange={this.onChange}
                              className="Blanc 10p 10r"
                              ref={this.inputBirthRef}
                              placeholder="Data de nascimento"
                              style={{
                                backgroundColor: "#F5F5F5",
                                marginLeft: "15px",
                                marginRight: "0",
                                width: "100%",
                              }}
                            />
                            {/* <label htmlFor="birth" className="fo12 black">
                          {" "}
                          Data de nascimento{" "}
                        </label> */}
                          </div>
                          {/*  */}
                        </div>

                        <h5 style={{ marginBottom: "10px", marginTop: "0px" }}>
                          Endereço
                        </h5>
                        <div className="row" style={{ marginBottom: "10px" }}>
                          {/* CEP */}
                          <div className="over-input">
                            <input
                              id="CEP"
                              type="text"
                              name="CEP"
                              value={this.state.input.CEP}
                              onBlur={this.searchCEP}
                              // onChange={this.searchCEP}
                              className="Blanc 100w 10p 10r"
                              required=""
                              ref={this.inputCEPRef}
                              placeholder="CEP*"
                              style={{ backgroundColor: "#F5F5F5" }}
                            />

                            <label htmlFor="CEP" className="fo12 black">
                              {" "}
                              CEP*{" "}
                            </label>
                          </div>
                          {/*  */}

                          {/* Rua */}
                          <div className="over-input">
                            <input
                              id="rua"
                              type="text"
                              name="rua"
                              value={this.state.input.rua}
                              // onChange={this.onChange}
                              className="Blanc 100w 10p 10r"
                              required=""
                              ref={this.inputRuaRef}
                              placeholder="Rua*"
                              style={{
                                backgroundColor: "#F5F5F5",
                                marginLeft: "15px",
                              }}
                            />

                            <label htmlFor="rua" className="fo12 black">
                              {" "}
                              Rua{" "}
                            </label>
                          </div>
                          {/*  */}
                        </div>

                        <div className="row" style={{ marginBottom: "10px" }}>
                          {/* numero do endereco */}
                          <div className="over-input">
                            <input
                              id="numero"
                              type="text"
                              name="numero"
                              value={this.state.input.numero}
                              // onChange={this.onChange}
                              className="Blanc 100w 10p 10r"
                              required=""
                              ref={this.inputNumeroRef}
                              placeholder="Número*"
                              style={{ backgroundColor: "#F5F5F5" }}
                            />

                            <label htmlFor="numero" className="fo12 black">
                              {" "}
                              Número*{" "}
                            </label>
                          </div>
                          {/*  */}

                          {/* bairro */}
                          <div className="over-input">
                            <input
                              id="bairro"
                              type="text"
                              name="bairro"
                              value={this.state.input.bairro}
                              onChange={this.onChange}
                              className="Blanc 100w 10p 10r"
                              required=""
                              ref={this.inputBairroRef}
                              placeholder="Bairro*"
                              style={{
                                backgroundColor: "#F5F5F5",
                                marginLeft: "15px",
                              }}
                            />

                            <label htmlFor="bairro" className="fo12 black">
                              {" "}
                              Bairro*{" "}
                            </label>
                          </div>
                          {/*  */}
                        </div>

                        <div className="row" style={{ marginBottom: "10px" }}>
                          {/* cidade */}
                          <div className="over-input">
                            <input
                              id="cidade"
                              type="text"
                              name="cidade"
                              value={this.state.input.cidade}
                              onChange={this.onChange}
                              className="Blanc 100w 10p 10r"
                              required=""
                              ref={this.inputCidadeRef}
                              placeholder="Cidade*"
                              style={{
                                backgroundColor: "#F5F5F5",
                              }}
                            />

                            <label htmlFor="cidade" className="fo12 black">
                              {" "}
                              Cidade*{" "}
                            </label>
                          </div>
                          {/*  */}

                          {/* estado */}
                          <div className="over-input">
                            <input
                              id="estado"
                              type="text"
                              name="estado"
                              value={this.state.input.estado}
                              onChange={this.onChange}
                              className="Blanc 100w 10p 10r"
                              required=""
                              ref={this.inputEstadoRef}
                              placeholder="Estado*"
                              style={{
                                backgroundColor: "#F5F5F5",
                                marginLeft: "15px",
                              }}
                            />

                            <label htmlFor="estado" className="fo12 black">
                              {" "}
                              Estado*{" "}
                            </label>
                          </div>
                          {/*  */}
                        </div>

                        {/* Complemento */}
                        <div className="over-input">
                          <input
                            id="complemento"
                            type="text"
                            name="complemento"
                            value={this.state.input.complemento}
                            // onChange={this.onChange}
                            className="Blanc 100w 10p 10r"
                            required=""
                            ref={this.inputComplementoRef}
                            placeholder="Complemento (opcional)"
                            style={{ backgroundColor: "#F5F5F5" }}
                          />

                          <label htmlFor="complemento" className="fo12 black">
                            {" "}
                            Complemento (opcional){" "}
                          </label>
                        </div>
                        {/*  */}

                        <h5 style={{ marginBottom: "10px", marginTop: "0px" }}>
                          Informações do Consórcio
                        </h5>
                        <div className="row" style={{ marginBottom: "10px" }}>
                          {/* número do grupo */}
                          <div className="over-input">
                            <input
                              id="grupo"
                              type="text"
                              name="grupo"
                              value={this.state.input.grupo}
                              onChange={this.onChange}
                              className="Blanc 100w 10p 10r"
                              required=""
                              ref={this.inputGrupoRef}
                              placeholder="Número do grupo"
                              style={{ backgroundColor: "#F5F5F5" }}
                            />

                            <label htmlFor="grupo" className="fo12 black">
                              {" "}
                              Número do grupo{" "}
                            </label>
                          </div>
                          {/*  */}

                          {/* Número da Cota */}
                          <div className="over-input">
                            <input
                              id="cota"
                              type="text"
                              name="cota"
                              value={this.state.input.cota}
                              onChange={this.onChange}
                              className="Blanc 100w 10p 10r"
                              required=""
                              ref={this.inputCotaRef}
                              placeholder="Número da Cota"
                              style={{
                                backgroundColor: "#F5F5F5",
                                marginLeft: "15px",
                              }}
                            />

                            <label htmlFor="cota" className="fo12 black">
                              {" "}
                              Número da Cota{" "}
                            </label>
                          </div>
                          {/*  */}
                        </div>
                      </div>
                      {/*  */}
                      <br />

                      <div className="row">
                        <b>Administradorora:</b>
                        <p
                          id="adm"
                          style={{ marginTop: "0", marginLeft: "5px" }}
                        ></p>
                      </div>

                      <div className="row">
                        <b>Bem:</b>
                        <p
                          id="bem"
                          style={{ marginTop: "0", marginLeft: "5px" }}
                        ></p>
                      </div>

                      <div className="row">
                        <b>Tipo:</b>
                        <p
                          id="tipo"
                          style={{ marginTop: "0", marginLeft: "5px" }}
                        ></p>
                      </div>

                      <div className="row">
                        <b style={{ maxWidth: "180px" }}>Preço de compra: </b>

                        <p
                          id="pricing"
                          style={{
                            marginTop: "0",
                            marginLeft: "20px",
                          }}
                        ></p>
                      </div>
                      <div className="row">
                        <b>Crédito:</b>
                        <p
                          id="credit"
                          style={{
                            marginTop: "0",
                            marginLeft: "5px",
                          }}
                        ></p>
                      </div>

                      <div className="row">
                        <b>Saldo devedor: </b>
                        <p
                          id="debit"
                          style={{ marginTop: "0", marginLeft: "5px" }}
                        ></p>
                      </div>

                      {/* button envio de dados pessoais */}
                      <div className="2s 5p">
                        <button
                          id="on-load"
                          className="100w 10p 5r"
                          style={{
                            backgroundColor: "#345d9d",
                            fontSize: "14px",
                            color: "#ffffff",
                            marginTop: "10px",
                          }}
                          onClick={this.handleInfoProfile}
                        >
                          Enviar
                        </button>
                      </div>
                      {/*  */}
                    </details>
                  )}
                  {/*  */}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Form;
