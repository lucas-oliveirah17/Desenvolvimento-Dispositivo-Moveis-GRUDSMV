interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

type UsuarioSemSenha = Omit<Usuario, "senha">; 

type UsuarioAtualizacao = Partial<Usuario>; 

function exibirPerfil(u: UsuarioSemSenha): void {
  console.log(`=== Perfil do Usuário ===`);
  console.log(`ID: ${u.id}`);
  console.log(`Nome: ${u.nome}`);
  console.log(`E-mail: ${u.email}`);
  console.log(`=========================\n`);
}

function atualizarUsuario(id: number, dados: UsuarioAtualizacao): void {
  console.log(`[API] Atualizando usuário de ID ${id}...`);
  console.log(`Dados recebidos para atualização:`, dados, `\n`);
}

const perfilSeguro: UsuarioSemSenha = {
  id: 101,
  nome: "João da Silva",
  email: "joao@gmail.com"
};

exibirPerfil(perfilSeguro);

atualizarUsuario(101, { nome: "João da Silva Sauro" });
atualizarUsuario(101, { email: "novo_joao@gmail.com", senha: "novaSenha123" });