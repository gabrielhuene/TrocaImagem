function TrocarImagem() {
    var imagem = document.getElementById("MinhaImagem");
    if (imagem.src.match("defesa.jpg")) {
        imagem.src = "defesa2.jpg";

    } else {
        imagem.src = "defesa.jpg";
    }
}