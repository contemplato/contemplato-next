export default function Error(data = {}) {
  const error = document.querySelector("#error-emited");
  error.removeAttribute("class", "none");
  error.setAttribute("class", "360y 10p 5r");
  error.setAttribute(
    "style",
    `
        background-color: ${data.status ? "green" : "#B22222"};
        color: ${data.status ? "yellow" : "white"};
        margin-bottom: 10px;
    `
  );
  error.innerHTML = data.message;
  setTimeout(
    () => error.setAttribute("class", "none"),
    data.time ? data.time : "4000"
  );
  error.addEventListener("click", () => error.setAttribute("class", "none"));
}
