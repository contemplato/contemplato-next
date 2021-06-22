const rgMask = (e) => {
  let v = e.target.value;
  // console.log(v);
  // v = v.replace(/\D/g, "");
  v = v.replace(/(\d{2})(\d{3})(\d{3})(\w{1})$/, "$1.$2.$3-$4");
  e.target.value = v;
};

export default rgMask;
