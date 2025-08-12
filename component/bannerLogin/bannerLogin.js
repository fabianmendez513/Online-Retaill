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
  p2.textContent = "Each men and women has their own style, Geeta help you to create your unique style.";
  div.appendChild(p2);

  const btnLogin = document.createElement("button");
  btnLogin.className = "btn-login";
  btnLogin.textContent = "LOG IN";
  
  // Event Listener para ocultar banner y mostrar formulario
  btnLogin.addEventListener('click', () => {
    const banner = document.querySelector('.contenedor-banner-login');
    const loginForm = document.querySelector('.login-form-container'); // Asegúrate de tener esta clase en tu formulario
    
    if (banner) banner.style.display = 'none';
    if (loginForm) loginForm.style.display = 'block';
  });
  
  div.appendChild(btnLogin);

  const p3 = document.createElement("p");
  p3.textContent = "OR";
  div.appendChild(p3);

  const btnRegister = document.createElement("button");
  btnRegister.className = "btn-register";
  btnRegister.textContent = "REGISTER";
  div.appendChild(btnRegister);

  contenedor.appendChild(div);
  return contenedor;
}