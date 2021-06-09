const maskData = (event) => {
  let v = event.target.value;
  v = v.replace(/D/g, "");
  v = v.replace(/(d{2})(d)/, "$1/$2");
  v = v.replace(/(d{2})(d)/, "$1/$2");

  event.target.value = v;
};

export default maskData;
