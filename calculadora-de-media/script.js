function media(){
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);

    var media = (nota1 + nota2 + nota3 +nota4)/4 ;

    var resultado = document.getElementById("resultado");
  
    resultado.innerHTML = "Sua média é: "+media;
    
    if (media >= 6) {
        var statusMedia = document.getElementById("status-da-media");
        statusMedia.innerHTML = "Você está <p id='status-aprovado'>APROVADO!</p>";
    } else {
        var statusMedia = document.getElementById("status-da-media");
        statusMedia.innerHTML = "Você está <p id='status-reprovado'>REPROVADO!</p>";
    }
}
