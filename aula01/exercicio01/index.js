import { unique, groupBy, sumBy } from './arrayUtils.js';

// 1. Função unique()
// FUNCIONAMENTO: O objeto 'Set' no JavaScript armazena apenas valores únicos. 
// A função joga o array dentro de um Set, removendo as duplicatas, e 
// depois usa o spread operator (...) para transformar o Set de volta em um array.

console.log('--- Testando unique() ---');

const numbers = [1, 1, 2, 3, 3, 4, 5, 5, 5];
console.log('Exemplo 1 (Números):', unique(numbers)); 
// Saída esperada: [1, 2, 3, 4, 5]

const letters = ['a', 'b', 'a', 'c', 'b', 'z'];
console.log('Exemplo 2 (Letras):', unique(letters)); 
// Saída esperada: ['a', 'b', 'c', 'z']


// 2. Função groupBy()
// FUNCIONAMENTO: Usa o método 'reduce' para passar por cada objeto do array.
// Ele olha para o valor da chave (key) informada. Se a lista para esse valor 
// ainda não existir no acumulador (acc), ele cria uma lista vazia ([]). 
// Em seguida, empurra (push) o objeto atual para dentro dessa lista.

console.log('\n--- Testando groupBy() ---');

const alunos = [
  { nome: 'Ana', turma: 'A' },
  { nome: 'João', turma: 'B' },
  { nome: 'Maria', turma: 'A' }
];
console.log('Exemplo 1 (Turmas):', groupBy(alunos, 'turma'));
/* Saída esperada: 
{ 
  A: [ { nome: 'Ana', turma: 'A' }, { nome: 'Maria', turma: 'A' } ],
  B: [ { nome: 'João', turma: 'B' } ] 
}
*/

const produtos = [
  { item: 'Maçã', categoria: 'Fruta' },
  { item: 'Alface', categoria: 'Verdura' },
  { item: 'Banana', categoria: 'Fruta' }
];
console.log('Exemplo 2 (Categorias):', groupBy(produtos, 'categoria'));
/* Saída esperada: 
{ 
  Fruta: [
    { item: 'Maçã', categoria: 'Fruta' },
    { item: 'Banana', categoria: 'Fruta' }
  ],
  Verdura: [ 
    { item: 'Alface', categoria: 'Verdura' }
  ]
}
*/

// 3. Função sumBy()
// FUNCIONAMENTO: Também usa o 'reduce', mas aqui para somar números.
// O '(obj[key] ?? 0)' verifica se a propriedade existe no objeto. Se ela não 
// existir ou for null/undefined, ele usa 0 para não quebrar a soma matemática.

console.log('\n--- Testando sumBy() ---');

const cart = [
  { price: 10.5 },
  { price: 20.0 },
  { price: 5.5 }
];
console.log('Exemplo 1 (Carrinho):', sumBy(cart, 'price')); 
// Saída esperada: 36

const inventory = [
  { name: 'Caneta', quantity: 50 },
  { name: 'Lápis', quantity: 30 },
  { name: 'Borracha' } // Este item não tem quantidade, logo o "?? 0" vai manter a contagem.
];
console.log('Exemplo 2 (Estoque com item sem quantidade):', sumBy(inventory, 'quantity')); 
// Saída esperada: 80