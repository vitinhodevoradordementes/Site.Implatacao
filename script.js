const telaLogin = document.getElementById("login");
const telaFinal = document.getElementById("final");
const msgErro = document.getElementById("erro");

telaLogin.onsubmit = function(e){
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("Senha").value;

    if (usuario === "aluno" && senha === "1234"){
        telaLogin.classList.add("escondido");
        telaFinal.classList.remove("escondido");
    } else {
        msgErro.textContent = "usuario ou senha incorretos";
    }
};

document.getElementById("sair").onclick = function (){
    telaLogin.reset();
    msgErro.textContent="";
    telaFinal.classList.add("escondido");
    telaLogin.classList.remove("escondido");
};
