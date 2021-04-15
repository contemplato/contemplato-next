import React, { createRef } from "react";
import axios from "axios";

import CreditCardIcon from "@material-ui/icons/CreditCard";
import DescriptionIcon from "@material-ui/icons/Description";
import Button from "@material-ui/core/Button";

const convertPricingStringToNumber = (pricing) => {
  return parseFloat(pricing.replace(/[.]/g, "").replace(",", "."));
};

const convertStringCpfCnpjToNumber = (pricing) => {
  return parseInt(pricing.replace(/[./-]/g, ""));
};

const cpfCnpjByElementMask = (valueElement, type) => {
  let v = valueElement.current.value;

  v = v.replace(/\D/g, "");

  if (type === "CPF") {
    //CPF
    valueElement.current.maxLength = 14;

    v = v.replace(/(\d{3})(\d)/, "$1.$2");

    v = v.replace(/(\d{3})(\d)/, "$1.$2");

    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  } else {
    valueElement.current.maxLength = 18;

    v = v.replace(/^(\d{2})(\d)/, "$1.$2");

    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");

    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");

    v = v.replace(/(\d{4})(\d)/, "$1-$2");
  }

  valueElement.current.value = v;
};

class meuConsorcio extends React.Component {
  constructor(props) {
    super(props);
    // console.log("meu teste", this.props.router.query);
    // this.id = this.props.router.query.id;
    this.id = this.props.id;
    this.emailRef = createRef();
    this.issuerRef = createRef();
    this.docTypeRef = createRef();
    this.docNumberRef = createRef();
    this.firstNameRef = createRef();
    this.lastNameRef = createRef();
    this.zipCodeRef = createRef();
    this.streetNameRef = createRef();
    this.streetNumberRef = createRef();
    this.neighborhoodRef = createRef();
    this.cityRef = createRef();
    this.federalUnitRef = createRef();
    this.cardNumberRef = createRef();
    this.paymentFormRef = createRef();
    this.installmentsRef = createRef();
    this.paymentMethodRef = createRef();
    this.transactionAmountRef = createRef();
    this.state = {
      doSubmit: false,
      paymentType: "",
      extract: {
        credit: "",
        debit: "",
        paid: "",
        portion: "",
        pricing: "",
        totalDebit: "",
        pricingRange: {
          min: "",
          max: "",
        },
      },
      showpayment: false,
    };
  }

  componentDidMount() {
    window.Mercadopago.setPublishableKey(
      "TEST-6b3758de-b215-40ae-a968-5e8886acaaea"
    );

    window.Mercadopago.getIdentificationTypes();

    const guessPaymentMethod = (event) => {
      let cardnumber = this.cardNumberRef.current.value;

      if (cardnumber.length >= 6) {
        let bin = cardnumber.substring(0, 6);
        window.Mercadopago.getPaymentMethod(
          {
            bin: bin,
          },
          setPaymentMethod
        );
      }
    };

    const setPaymentMethod = (status, response) => {
      if (status == 200) {
        let paymentMethod = response[0];
        this.paymentMethodRef.current.value = paymentMethod.id;

        getIssuers(paymentMethod.id);
      } else {
        alert(`payment method info error: ${response}`);
      }
    };

    function getIssuers(paymentMethodId) {
      window.Mercadopago.getIssuers(paymentMethodId, setIssuers);
    }

    const setIssuers = (status, response) => {
      if (status == 200) {
        let issuerSelect = this.issuerRef.current;
        response.forEach((issuer) => {
          let opt = document.createElement("option");
          opt.text = issuer.name;
          opt.value = issuer.id;
          issuerSelect.appendChild(opt);
        });

        const transactionAmount = convertPricingStringToNumber(
          this.transactionAmountRef.current.value
        );

        getInstallments(
          this.paymentMethodRef.current.value,
          transactionAmount,
          issuerSelect.value
        );
      } else {
        alert(`issuers method info error: ${response}`);
      }
    };

    function getInstallments(paymentMethodId, transactionAmount, issuerId) {
      window.Mercadopago.getInstallments(
        {
          payment_method_id: paymentMethodId,
          amount: parseFloat(transactionAmount),
          issuer_id: parseInt(issuerId),
        },
        setInstallments
      );
    }

    const setInstallments = (status, response) => {
      if (status == 200) {
        this.installmentsRef.current.options.length = 0;
        response[0].payer_costs.forEach((payerCost) => {
          let opt = document.createElement("option");
          opt.text = payerCost.recommended_message;
          opt.value = payerCost.installments;
          this.installmentsRef.current.appendChild(opt);
        });
      } else {
        alert(`installments method info error: ${response}`);
      }
    };

    this.cardNumberRef.current.addEventListener("change", guessPaymentMethod);
    this.transactionAmountRef.current.addEventListener(
      "change",
      guessPaymentMethod
    );

    axios
      .post(
        `http://core-content-cc-co.umbler.net/p/post/contemplato/meuconsorcio/${this.id}`,
        {
          headers: {
            Authorization: "APP-NAME",
          },
        }
      )
      .then(({ data }) => {
        if (data.status) {
          const pricing = convertPricingStringToNumber(data.result.pricing);

          const pricingRange = this.handleCalculatePricing(pricing);

          this.setState({
            extract: {
              ...data.result,
              pricingRange,
            },
          });
        }
      });
  }

  currencyByValueMask = (e) => {
    let v = e.replace(/\D/g, "");
    let lastTwo = v.slice(-2);

    if (lastTwo === "00") {
      v += "00";
    }

    v = `${(+v / 100).toFixed(2)}`;
    v = v
      .replace(".", ",")
      .replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,")
      .replace(/(\d)(\d{3}),/g, "$1.$2,");

    return v;
  };

  currencyByElementMask = (e) => {
    const value = e.target.value;

    let v = value.replace(/\D/g, "");

    v = `${(+v / 100).toFixed(2)}`;
    v = v
      .replace(".", ",")
      .replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,")
      .replace(/(\d)(\d{3}),/g, "$1.$2,");

    e.target.value = v;
  };

  handleCalculatePricing = (pricing) => {
    const percentage = 10;

    const rangeValue = (pricing * percentage) / 100;

    const pricingRange = {
      min: this.currencyByValueMask(`${pricing - rangeValue}`),
      max: this.currencyByValueMask(`${pricing + rangeValue}`),
    };

    return pricingRange;
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    let obj = {};

    const transaction_amount = convertPricingStringToNumber(
      this.transactionAmountRef.current.value
    );
    const description = "";
    const email = this.emailRef.current.value;
    const payment_method_id = this.paymentMethodRef.current.value;

    const handleDoPayment = async (obj) => {
      console.log("carregando");

      const { data } = await axios.post(
        "http://core-content-cc-co.umbler.net/p/post/payment/checkout/default",
        {
          headers: {
            Authorization: "APP-NAME",
          },
          type: this.state.paymentType,
          data: obj,
        }
      );

      console.log(data);
    };

    const setCardTokenAndPay = (status, response) => {
      if (status == 200 || status == 201) {
        const token = response.id;
        const installments = +this.installmentsRef.current.value;

        // dados para enviar pelo cartão
        obj = {
          transaction_amount,
          token,
          description,
          installments,
          payment_method_id,
          payer: {
            email,
          },
        };

        handleDoPayment(obj);
      } else {
        alert("Verify filled data!\n" + JSON.stringify(response, null, 4));
      }
    };
    if (this.state.paymentType === "Card") {
      let $form = this.paymentFormRef.current;

      $form["docNumber"].value = convertStringCpfCnpjToNumber(
        $form["docNumber"].value
      );

      window.Mercadopago.createToken($form, setCardTokenAndPay);
    } else {
      const first_name = this.firstNameRef.current.value;
      const last_name = this.lastNameRef.current.value;
      const doc_type = this.docTypeRef.current.value;
      const doc_number = this.docNumberRef.current.value;
      const zip_code = this.zipCodeRef.current.value;
      const street_name = this.streetNameRef.current.value;
      const street_number = this.streetNumberRef.current.value;
      const neighborhood = this.neighborhoodRef.current.value;
      const city = this.cityRef.current.value;
      const federal_unit = this.federalUnitRef.current.value;

      // dados para enviar pelo boleto
      obj = {
        transaction_amount,
        description,
        payment_method_id: "bolbradesco",
        payer: {
          email,
          first_name,
          last_name,
          identification: {
            type: doc_type,
            number: doc_number,
          },
          address: {
            zip_code,
            street_name,
            street_number,
            neighborhood,
            city,
            federal_unit,
          },
        },
      };

      handleDoPayment(obj);
    }
  };

  buttonPayment(e) {
    let pay = "";
    if (e === "Card") {
      pay = "Realizar Pagamento";
    } else if (e === "Bolet") {
      pay = "Gerar boleto";
    }
    return pay;
  }

  render() {
    return (
      <>
        <script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
        <div className="content 960y 10p wrap col">
          <h1 className="title-h1" style={{ marginBottom: "20px" }}>
            {" "}
            Detalhes da cota
          </h1>
          <div
            className="box-div cen"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ul>
              <li className="li-box">Credit</li>
              <li className="li-box">Debit </li>
              <li className="li-box">Paid </li>
              <li className="li-box">Portion </li>
              <li className="li-box">Pricing </li>
              <li className="li-box">
                totalDebit {this.state.extract.totalDebit}
              </li>
            </ul>

            <ul>
              <li className="li-box">
                {this.state.extract.credit} XXXXXXXXXXXX
              </li>
              <li className="li-box">
                {this.state.extract.debit} XXXXXXXXXXXX
              </li>
              <li className="li-box">{this.state.extract.paid} XXXXXXXXXXXX</li>
              <li className="li-box">
                {this.state.extract.portion} XXXXXXXXXXXX
              </li>
              <li className="li-box">
                {this.state.extract.pricing} XXXXXXXXXXXX
              </li>
              <li className="li-box">
                {this.state.extract.totalDebit} XXXXXXXXXXXX
              </li>
            </ul>
          </div>
        </div>

        <div className="content 960y 10p wrap col">
          <form
            method="post"
            ref={this.paymentFormRef}
            onSubmit={this.handleOnSubmit}
          >
            <div className="formField-container">
              *Sugestão*
              <p style={{ marginBottom: "20px" }}>
                XXX{this.state.extract.pricingRange.min}&nbsp;-&nbsp;
                {this.state.extract.pricingRange.max}XXX
              </p>
              <input
                type="text"
                name="transactionAmount"
                ref={this.transactionAmountRef}
                maxLength={9}
                onChange={(e) => this.currencyByElementMask(e)}
                required
              />
            </div>
            <div className="form-container">
              <h1 className="title-h1">Detalhe do comprador</h1>
              <div className="formField-container">
                <label htmlFor="email">
                  <p
                    className="fo16"
                    style={{ color: "#434A53", textAlign: "left" }}
                  >
                    Email
                  </p>
                </label>
                <br />
                <input
                  id="email"
                  name="email"
                  type="email"
                  ref={this.emailRef}
                />
              </div>
              <div className="formField-container row">
                <div>
                  <label htmlFor="docType">
                    <p
                      className="fo16"
                      style={{ color: "#434A53", textAlign: "left" }}
                    >
                      {" "}
                      Documento{" "}
                    </p>
                  </label>
                  <select
                    id="docType"
                    name="docType"
                    ref={this.docTypeRef}
                    data-checkout="docType"
                    onChange={() => (this.docNumberRef.current.value = "")}
                    type="text"
                    style={{ marginTop: "21px" }}
                  ></select>
                </div>
                <div
                  className="formField-container"
                  style={{
                    width: "90%",
                    marginTop: "46px",
                    marginLeft: "10px",
                  }}
                >
                  <input
                    id="docNumber"
                    name="docNumber"
                    ref={this.docNumberRef}
                    data-checkout="docNumber"
                    onChange={() =>
                      cpfCnpjByElementMask(
                        this.docNumberRef,
                        this.docTypeRef.current.value
                      )
                    }
                    type="text"
                  />
                </div>
              </div>
            </div>
            <br />
            <h3 className="title-h1" style={{ textAlign: "center" }}>
              Forma de pagamento
            </h3>
            {/* buttons Cars and Bolet */}
            <div className="cen">
              <Button
                type="button"
                onClick={(this.state.paymentType = "Card")}
                style={{ marginRight: "5%" }}
              >
                <CreditCardIcon
                  className="menu-icon"
                  fontSize="large"
                ></CreditCardIcon>
              </Button>
              <Button
                type="button"
                onClick={() => (this.state.paymentType = "Bolet")}
              >
                <DescriptionIcon
                  className="menu-icon"
                  fontSize="large"
                ></DescriptionIcon>
              </Button>
            </div>
            {/* buttons Card and Bolet */}
            {/* detalhe cartao  */}
            <div>
              <h3 className="title-h1">Detalhes do cartão</h3>
              <div className="form-container">
                <div className="row formField-container">
                  <div style={{ width: "80%" }}>
                    <label
                      htmlFor="cardNumber"
                      style={{
                        textAlign: "left",
                      }}
                    >
                      {" "}
                      Número do cartão{" "}
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      data-checkout="cardNumber"
                      onselectstart="return false"
                      onPaste={() => false}
                      ref={this.cardNumberRef}
                      onCopy={() => false}
                      onCut={() => false}
                      onDrag={() => false}
                      onDrop={() => false}
                      autoComplete="off"
                    />
                  </div>

                  <div style={{ marginLeft: "2%", width: "17%" }}>
                    <label
                      htmlFor=""
                      style={{
                        textAlign: "left",
                      }}
                    >
                      {" "}
                      Data de vencimento
                    </label>
                    <div className="row">
                      <input
                        type="number"
                        min={1}
                        max={12}
                        placeholder="MM"
                        id="cardExpirationMonth"
                        data-checkout="cardExpirationMonth"
                        onselectstart="return false"
                        onPaste={() => false}
                        onCopy={() => false}
                        onCut={() => false}
                        onDrag={() => false}
                        onDrop={() => false}
                        autoComplete="off"
                      />
                      <span
                        className="date-separator fo25"
                        style={{ margin: "0px 5px 0px 5px" }}
                      >
                        {" "}
                        /{" "}
                      </span>
                      <input
                        type="number"
                        min={1}
                        max={99}
                        placeholder="YY"
                        id="cardExpirationYear"
                        data-checkout="cardExpirationYear"
                        onselectstart="return false"
                        onPaste={() => false}
                        onCopy={() => false}
                        onCut={() => false}
                        onDrag={() => false}
                        onDrop={() => false}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
                {/*  */}

                <div className="row formField-container">
                  <div style={{ width: "80%" }}>
                    <div className="row">
                      <label
                        className="fo16"
                        style={{
                          textAlign: "left",
                        }}
                        htmlFor="cardholderName"
                      >
                        Nome do Titular
                      </label>
                      <b
                        className="fo11"
                        style={{
                          textAlign: "left",
                          marginBottom: "10px",
                          marginLeft: "5px",
                        }}
                      >
                        (como está gravado no cartão)
                      </b>
                    </div>

                    <input
                      id="cardholderName"
                      data-checkout="cardholderName"
                      type="text"
                    />
                  </div>

                  <div
                    style={{
                      marginLeft: "17px",
                      marginTop: "5px",
                      width: "17%",
                    }}
                  >
                    <label
                      htmlFor="securityCode"
                      className="fo16"
                      style={{
                        textAlign: "left",
                      }}
                    >
                      {" "}
                      Código de segurança
                    </label>
                    <input
                      id="securityCode"
                      data-checkout="securityCode"
                      type="text"
                      onselectstart="return false"
                      onPaste={() => false}
                      onCopy={() => false}
                      onCut={() => false}
                      onDrag={() => false}
                      onDrop={() => false}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div id="issuerInput" hidden>
                  <label htmlFor="issuer">Banco emissor</label>
                  <select
                    id="issuer"
                    name="issuer"
                    ref={this.issuerRef}
                    data-checkout="issuer"
                  ></select>
                </div>

                <div className="formField-container" style={{ width: "80%" }}>
                  <div>
                    <label htmlFor="installments">Parcelar em:</label>
                    <select
                      type="text"
                      id="installments"
                      name="installments"
                      ref={this.installmentsRef}
                    ></select>
                  </div>
                  <div>
                    <input
                      type="hidden"
                      name="paymentMethodId"
                      id="paymentMethodId"
                      ref={this.paymentMethodRef}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <h3 className="title-h1">Detalhes do boleto</h3>
              <div className="formField-container fo16">
                <div>
                  <label htmlFor="cardNumber">Nome completo: </label>
                  <input
                    type="text"
                    id="firstName"
                    ref={this.firstNameRef}
                    // placeholder="Nome completo"
                  />
                </div>
                {/* <div>
              <label htmlFor="lastName">Ultimo nome</label>
              <input
                type="text"
                id="lastName"
                ref={this.lastNameRef}
                placeholder="Ultimo nome"
              />
            </div> */}
                <div style={{ marginTop: "20px" }}>
                  <label htmlFor="zipCode">CEP</label>
                  <input
                    type="text"
                    id="zipCode"
                    ref={this.zipCodeRef}
                    // placeholder="CEP"
                  />
                </div>
                <div style={{ marginTop: "20px" }}>
                  <label htmlFor="streetName">Endereço</label>
                  <input
                    type="text"
                    id="streetName"
                    ref={this.streetNameRef}
                    // placeholder="Endereço"
                  />
                </div>
                <div style={{ marginTop: "20px" }}>
                  <label htmlFor="streetNumber">Número</label>
                  <input
                    type="text"
                    id="streetNumber"
                    ref={this.streetNumberRef}
                    // placeholder="Número"
                  />
                </div>
                <div style={{ marginTop: "20px" }}>
                  <label htmlFor="neighborhood">Bairro</label>
                  <input
                    type="text"
                    id="neighborhood"
                    ref={this.neighborhoodRef}
                    // placeholder="Bairro"
                  />
                </div>
                <div style={{ marginTop: "20px" }}>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    ref={this.cityRef}
                    // placeholder="Cidade"
                  />
                </div>
                <div style={{ marginTop: "20px" }}>
                  <label htmlFor="federalUnit">Estado</label>
                  <input
                    type="text"
                    id="federalUnit"
                    ref={this.federalUnitRef}
                    // placeholder="Estado"
                  />
                </div>
              </div>
            </div>
            ){/* Detalhe Boleto */}
            <br />
            <button
              style={{
                width: "100%",
                height: "74px",
                borderRadius: "5px",
                backgroundColor: " #4AEE78",
              }}
              type="submit"
            >
              <p className="title-h1" style={{ textAlign: "center" }}>
                {/* Realizar pagamento*/}
                {this.buttonPayment(this.state.paymentType)}
              </p>
            </button>
            <br />
          </form>
        </div>
      </>
    );
  }
}

export default meuConsorcio;
