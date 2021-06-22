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
      console.log(token);
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
      this.setState({ loading: true });
      const imagetest =
        "data:image/png;base64,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";
      const { data } = axios.post(
        `http://webapi-server-contempla-to.umbler.net/facematch/document/${this.props.id}`,
        {
          name: "khaled m",
          email: "kha.led002@hotmail.com",
          phone: "(13)99199-7041",
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
