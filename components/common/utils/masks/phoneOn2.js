const maskPhoneNumber = (event) => {
  let v = event.target.value;
  v = v.replace(/\D/g, "");
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
  v = v.replace(/(\d)(\d{4})$/, "$1-$2");

  event.target.value = v;
};

export default maskPhoneNumber;
