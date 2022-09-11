function Converter() {
	var valorElemento = document.getElementById("valor");
	var valor = valorElemento.value;
	var valorFormatado = parseFloat(valor);
  
	var moedaEscolhida = document.getElementById("moeda");
	var moeda = moedaEscolhida.value;
	console.log(moeda);
  
	if (moeda == "Dólar") {
	  valorEmReal = (valorFormatado * 5.25).toFixed(2);
	  console.log(valorEmReal);
	} else if (moeda == "Bitcoin") {
	  valorEmReal = (valorFormatado * 111312).toFixed(2);
	  console.log(valorEmReal);
	} else if (moeda == "Euro") {
	  valorEmReal = (valorFormatado * 5.23).toFixed(2);
	  console.log(valorEmReal);
	} else if (moeda == "Iene") {
		valorEmReal = (valorFormatado * 0.036).toFixed(2);
		console.log(valorEmReal);
	}
  
	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = "O valor convertido em Real é R$ " + valorEmReal;
  
	elementoValorConvertido.innerHTML = valorConvertido;
  }