
function obterPrimeiro<T>(lista: T[]): T | undefined {
  return lista[0];
}

interface Produto {
  nome: string;
  preco: number;
}

const listaDeNomes: string[] = ["Ana", "Carlos", "João"];
const listaDeNumeros: number[] = [10, 20, 30, 40];
const listaDeProdutos: Produto[] = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 150 }
];


const primeiroNome = obterPrimeiro(listaDeNomes);

const primeiroNumero = obterPrimeiro(listaDeNumeros);

const primeiroProduto = obterPrimeiro(listaDeProdutos);

console.log("Primeiro nome:", primeiroNome);
console.log("Primeiro número:", primeiroNumero);
console.log("Primeiro produto:", primeiroProduto);