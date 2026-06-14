interface Livro {
  titulo: string;
  autor: string;
  ano: number;
  disponivel: boolean;
}

const biblioteca: Livro[] = [
  {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954,
    disponivel: true,
  },
  {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J. K. Rowling",
    ano: 1997,
    disponivel: false,
  },
  {
    titulo: "O Guia do Mochileiro das Galáxias",
    autor: "Douglas Adams",
    ano: 1979,
    disponivel: true,
  }
];

function listarTitulosDisponiveis(livros: Livro[]): string[] {
  return livros
    .filter((livro: Livro) => livro.disponivel === true)
    .map((livro: Livro) => livro.titulo);
}

const disponiveis = listarTitulosDisponiveis(biblioteca);
console.log(disponiveis);