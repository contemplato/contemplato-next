const cpfMask = (event) => {
  let value = event.target.value;
  let total = value.length || 0;
  if (total === 11) {
    value = value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
  } else if (total > 11) {
    value = value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
  }

  // .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
  // .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
  // .replace(/(\d{3})(\d)/, "$1.$2")
  // .replace(/(\d{3})(\d{1,2})/, "$1-$2")
  // .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada

  event.target.value = value;
};

export default cpfMask;

// if (total === 9) {
//   this.value = this.value
//     .replace(/\D/g, "")
//     .replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4");
// } else if (total === 11) {
//   this.value = this.value
//     .replace(/\D/g, "")
//     .replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
// } else if (total > 11) {
//   this.value = this.value
//     .replace(/\D/g, "")
//     .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
// }
