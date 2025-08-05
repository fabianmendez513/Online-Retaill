import { banner2 } from "../../component/bannerLogin/bannerLogin.js"
export function bannerLogin (){
    let login = document.createElement("div");
    login.className = "login";
    login.appendChild.appendChild(banner2());

    return login;
}

document.body.appendChild(login());