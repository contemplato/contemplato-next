function UploadCon() {
  let data = [
    {
      key: "name",
      value: document.getElementById("nameCon").value,
    },
    {
      key: "email",
      value: document.getElementById("emailCon").value,
    },
    {
      key: "phone",
      value: document.getElementById("phoneCon").value,
    },
    {
      key: "file",
      value: document.getElementById("fileCon").files[0],
    },
  ];

  let formDataCon = new FormData();
  data.forEach((form) => {
    formDataCon.append(form.key, form.value);
  });

  const url = "https://webapi-contemplato-co.umbler.net/";
  let config = {
    method: "POST",
    headers: {
      authorization: contemplatoConfig.auth,
    },
    body: formDataCon,
    mode: "no-cors",
  };

  // console.log(config);

  fetch(url, config).then(function (response) {
    console.log(response); //response.data
  });
}
function getEmbed() {
  //themes
  if (contemplatoConfig.theme == "default" || !contemplatoConfig.theme) {
    contemplatoConfig.text = "color: #345d9d;";
    contemplatoConfig.button = "background-color: #ff9632;";
  } else if (contemplatoConfig.theme == "red") {
    contemplatoConfig.text = "color: #FF0000;";
    contemplatoConfig.button = "background-color: #FF0000;";
  } else if (contemplatoConfig.theme == "yellow") {
    contemplatoConfig.text = "color: #FFD700;";
    contemplatoConfig.button = "background-color: #FFD700;";
  } else if (contemplatoConfig.theme == "purple") {
    contemplatoConfig.text = "color: #7B68EE;";
    contemplatoConfig.button = "background-color: #7B68EE;";
  }

  let render = document.getElementById(contemplatoConfig.idAppend);
  render.innerHTML = `
   <div
      style="border-radius: 20px;
              border: 30px;background-color: #F6F7F9; box-shadow: 0px 10px 20px 0px rgba(1, 74, 143, 0.1);
        max-width: 360px;
        margin: 0px auto;  "
    >
      <p
        style="
              ${contemplatoConfig.text}
              font-size: 15px;
              line-height: 22x;
              padding: 10px;
              margin-top: 30px
              "
      >
        Preencha os dados que nós
        <b> entraremos em contato em menos de 24 horas. </b>
      </p>
      <br />
      <input
        style="display: flex; width: 80%; background-color: white; border: 10px ;border-radius: 10px; margin-left: 10%; margin-right: 10%; padding: 5px"
        type="text"
        id="nameCon"
        placeholder="Nome"
      />
      <br />
      <input
        style="display: flex; width: 80%; background-color: white; border: 10px ;border-radius: 10px; margin-left: 10%; margin-right: 10%; padding: 5px"
        type="email"
        id="emailCon"
        placeholder="Email"
      />
      <br />
      <input
        style="display: flex; width: 80%; background-color: white; border: 10px ;border-radius: 10px; margin-left: 10%; margin-right: 10%; padding: 5px"
        type="text"
        id="phoneCon"
        placeholder="Telefone"
      />
      <br />
      <label>
      <input
        style="display: none; visibility: hidden; margin-left: 10%; margin-right: 10%"
        type="file"
        id="fileCon"
      />
      <img
        src="https://img.icons8.com/ios/452/google-docs.png"
        alt="anexo"
        width="30"
        style="cursor: pointer; margin-left: 60px; margin-right: 10%"
      />
      </label>
      <br />
      <span style="fontsize: 11px; margintop: 0px; margin-left: 10%; margin-right: 10%"> Anexar arquivo</span>
      <button style="${contemplatoConfig.button};
                        font-size: 14px;
                        color: #ffffff;
                        border-radius: 10px;
                        border: 5px;
                        padding: 5px 20px 5px 20px;
                        margin-bottom: 20px;
                        margin-left: 80px;
                        cursor: pointer"
      onclick="UploadCon()">Enviar</button>
      <br />
        <div
          style="
          font-size: 13px;
          color: #434443;
          text-align: center;
          line-height: 19px;
          "
        >
        Faça uma avaliação da sua cota de consórcio conosco e venda pelo melhor
        preço!
      </div>
    </div>
  `;
}
window.addEventListener("load", () => {
  getEmbed();
});

/* 
<script> var contemplatoConfig = {
        auth: "<key de authenticao>", 
        idAppend: "<id da DIV> ",  
        theme: "<cor-theme>",  default, red, yellow, purple
        </script> 
        <script src="https://contemplato.com/embed/embedtest.js"></script>
        */
