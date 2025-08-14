export function cargaLogin(){
    let div = document.createElement("div");
    div.className = "login";

    let divUsuario = document.createElement("div");
    divUsuario.className = "div-usuario";
    let icoUsurio = document.createElement("img");
    icoUsurio.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fvector-premium%2Fvector-iconos-perfil_1240983-64.jpg&f=1&nofb=1&ipt=06d0628a0f871560b1cad4b577febb595789a8b608d8ea249a29de515410abc5";
    divUsuario.appendChild(icoUsuario);
    let inputUsuario = document.createElement("input");
    inputUsuario.placeholder = "correo"
    divUsuario.appendChild(inputUsuario);
    let ico = document.createElement ("img");
    ico.src ="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fvector-premium%2Fvector-iconos-perfil_1240983-64.jpg&f=1&nofb=1&ipt=06d0628a0f871560b1cad4b577febb595789a8b608d8ea249a29de515410abc5";
    divUsuario.appendChild(ico):

    div.appendChild(divUsuario);


    return div;
}