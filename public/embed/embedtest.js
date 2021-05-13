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
  let render = document.getElementById(contemplatoConfig.idAppend);
  render.innerHTML = `
    <div>
      <input
        type="text"
        id="nameCon"
        placeholder="Nome"
      />
      <br />
      <input
        type="text"
        id="emailCon"
        placeholder="Email"
      />
      <br />
      <input
        type="text"
        id="phoneCon"
        placeholder="Telefone"
      />
      <br />
      <input style="" type="file" id="fileCon" placeholder="extrato" />
      <br />
      <button onclick="UploadCon()">Enviar</button>
    </div>
  `;
}
window.addEventListener("load", () => {
  getEmbed();
});

/* 
<script> var contemplatoConfig = {
        auth: "EXCREDT21", <key de authenticao>
        idAppend: "formCon",  <id da DIV> 
        </script> 
        <script src="./feature.js"></script>
        */
