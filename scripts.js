function envio() {
    const tipo = document.getElementById("assunto").value;
    let container = document.getElementById("fundo");
    let novaImagem = document.createElement("img");

    if (tipo == "mao") {
        document.getElementById("img").src = "img/mao.png"
    } else if (tipo == "pe"){
        document.getElementById("img").src = "img/pe.png"
    }
    let cor = document.getElementById("cor").value;
    container.style.backgroundColor = cor
}
