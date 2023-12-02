const nomeUsuario = 
document.getElementById("nome-usuario");

const instagramLink 
= document.querySelector(".insta span");

const imagemPerfil 
= document.querySelector("header img");

const statusPerfil 
= document.querySelector("header span.status");

const linkedinLink 
= document.querySelector(".linkedin span");

const whatsappLink 
= document.querySelector(".zap span");

const corpoPagina 
= document.body;

const containerPerfil = 
document.querySelector(".container");

//Capturando elementos dos formulário
const inputNome 
= document.getElementById("nome-perfil");
const selectAvatar 
= document.getElementById("avatar");
const selectStatus 
= document.getElementById('status');
const inputInstagram 
= document.getElementById('instagram');
const inputLinkedin 
= document.getElementById('linkedin');
const inputWhatsapp 
= document.getElementById('whatsapp');
const inputCorFundoPagina 
= document.getElementById('cor-fundo-pagina');
const inputCorFundoPerfil 
= document.getElementById('cor-fundo-perfil');
const botaoAplicar 
= document.getElementById("aplicar");

botaoAplicar.addEventListener("click", atualizarPerfil);

function atualizarPerfil(){
nomeUsuario.textContent = inputNome.value;
instagramLink.textContent = inputInstagram.value;
linkedinLink.textContent = inputLinkedin.value;
whatsappLink.textContent = inputWhatsapp.value;
imagemPerfil.src = selectAvatar.value;
corpoPagina.style.backgroundColor = inputCorFundoPagina.value;
containerPerfil.style.backgroundColor = inputCorFundoPerfil.value;
}