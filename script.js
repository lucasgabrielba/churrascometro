let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
  console.log("Calculando");

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qdtTotalCarne =
    carnePorPessoa(duracao) * adultos +
    (carnePorPessoa(duracao) / 2) * criancas;
  console.log(qdtTotalCarne);

  let qdtTotalCerveja = cervejaPorPessoa(duracao) * adultos;
  console.log(qdtTotalCerveja);

  let qdtTotalBebidas =
    bebidasPorPessoa(duracao) * adultos +
    (bebidasPorPessoa(duracao) / 2) * criancas;
  console.log(qdtTotalBebidas);

  resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de carne</p>`;
  resultado.innerHTML += `<p>${Math.ceil(
    qdtTotalCerveja / 355
  )} latas de cerveja</p>`;
  resultado.innerHTML += `<p>${Math.ceil(
    qdtTotalBebidas / 2000
  )} garrafas de 2L de refrigerante</p>`;
}

function carnePorPessoa(duracao) {
  if (duracao >= 6) {
    return 650;
  }
  return 400;
}

function cervejaPorPessoa(duracao) {
  if (duracao >= 6) {
    return 2000;
  }
  return 1200;
}

function bebidasPorPessoa(duracao) {
  if (duracao >= 6) {
    return 1500;
  }
  return 1000;
}
