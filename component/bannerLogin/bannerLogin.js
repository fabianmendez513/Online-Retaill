import { cargaLogin } from " ../login/loginComponent.js";
export function banner2(){
  let div = document.createElement("div");
  div.className = "div-banner";

  let h2 = document.createElement ("div");
  h2.textContent = "Geeta.";
  div.appendChild(h2);

  let boldP1 = document.createElement("b");
  let p1 = document.createElement ("p");
  p1.textContent = "Create your fashion in your own wat";
  boldP1.appendChild(p1);

  let p2 = document.createElement ("p");
  p2.textContent = "Each men and women has their own style";
  div.appendChild(p2);

  let loginBtn = document.createElement("div");
  loginBtn.textContent = "LOG IN";
  loginBtn.className = "btn-login";
  div.appendChild(loginBtn);
  btnLogin.addEventListener'click', () => {
  let banner = document.querySelector('.div-banner-login');
  let loginForm = document.querySelector('.login-form-div-banner');

  let p3 = document.createElement("p");
  p3.textContent = "OR";
  div.appendChild(p3);

  let registerBtn = document.createElement("button");
  registerBtn.textContent = "REGISTER";
  registerBtn.className = "btn-register";
  div.appendChild(registerBtn);

  banner2.appendChild(div);
  return div-banner;
  }
}
