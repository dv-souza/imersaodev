function Converter() {
  // criando a variavel para guardar o input do html
  var valorElemento = document.getElementById("valor");
  //capturando o valor como string
  var valor = valorElemento.value;
  //criando variavel para capturar o valor em numerico
  var ValoremDolarNum = parseFloat(valor);

  //calculo do valor em dolar, euro e libra
  var valoremReal = ValoremDolarNum * 5.09;
  var valoremEuro = ValoremDolarNum * 0.92;
  var valoremLibra = ValoremDolarNum * 0.76;
  var valoremBitCoin = ValoremDolarNum * 0.000025;

  //  console.log(valoremReal);
  //  console.log(valoremEuro);
  //  console.log(valoremLibra);

  //Armazenando os dados para exibir no html
  var elementoValorConvertidoReal = document.getElementById(
    "valorConvertidoReal"
  );
  var elementoValorConvertidoEuro = document.getElementById(
    "valorConvertidoEuro"
  );
  var elementoValorConvertidoLibra = document.getElementById(
    "valorConvertidoLibra"
  );
  var elementoValorConvertidoBitCoin = document.getElementById(
    "valorConvertidoBitCoin"
  );

  //Gera a frase para concatenar
  var valorConvertidoReal = "O resultado em real é R$ " + valoremReal;
  var valorConvertidoEuro = "O resultado em Euro é € " + valoremEuro;
  var valorConvertidoLibra = "O resultado em Libra é £ " + valoremLibra;
  var valorConvertidoBitCoin = "O resultado em Bit Coin é ₿ " + valoremBitCoin;

  // passando os valores do javascript para o hmtl
  elementoValorConvertidoReal.innerHTML = valorConvertidoReal;
  elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;
  elementoValorConvertidoLibra.innerHTML = valorConvertidoLibra;
  elementoValorConvertidoBitCoin.innerHTML = valorConvertidoBitCoin;
}