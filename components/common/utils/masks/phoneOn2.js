const maskPhoneNumber = (event) => {
  let v = event.target.value;
  v = v.replace(/\D/g, "");
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
  v = v.replace(/(\d)(\d{4})$/, "$1-$2");

  event.target.value = v;
};

export default maskPhoneNumber;

// let v = event.target.value;
// v = v.replace(/\D/g, "");
// v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
// v = v.replace(/(\d)(\d{4})$/, "$1-$2");

// event.target.value = v;

// let tel = event.target.value;
// tel = tel.replace(/\D/g, "");
// tel = tel.replace(/^(\d)/, "+$1");
// tel = tel.replace(/(.{3})(\d)/, "$1($2");
// tel = tel.replace(/(.{6})(\d)/, "$1)$2");

// event.target.value = tel;
