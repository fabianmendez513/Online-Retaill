export function bannerLogin() {
  const contenedor = document.createElement("div");
  contenedor.className = "contenedor-banner-login";

  const div = document.createElement("div");
  div.className = "banner-login";

  const h2 = document.createElement("h2");
  h2.textContent = "Geeta.";
  div.appendChild(h2);

  const p1 = document.createElement("p");
  p1.innerHTML = "<b>Create your fashion in your own way</b>";
  div.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent =
    "Each men and women has their own style, Geeta help you to create your unique style.";
  div.appendChild(p2);

  const btnLogin = document.createElement("a");
  btnLogin.className = "btn-login";
  btnLogin.textContent = "LOG IN";
  div.appendChild(btnLogin);

  const p3 = document.createElement("p");
  p3.textContent =
  "OR";
  div.appendChild(p3);

  const btnRegister = document.createElement("button");
  btnRegister.className = "btn-register";
  btnRegister.textContent = "REGISTER";
  div.appendChild(btnRegister);

  contenedor.appendChild(div);
  return contenedor;
}
