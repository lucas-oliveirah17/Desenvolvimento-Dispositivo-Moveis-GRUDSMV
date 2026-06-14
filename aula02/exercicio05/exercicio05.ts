interface PropsBotao {
  titulo: string;
  ativo?: boolean;
}

function renderizarBotao({ titulo, ativo = true }: PropsBotao): string {
  return ativo ? `[ ${titulo} ]` : `( ${titulo} )`;
}

const botaoPadrao = renderizarBotao({ titulo: "Salvar" });

const botaoAtivo = renderizarBotao({ titulo: "Confirmar", ativo: true });

const botaoInativo = renderizarBotao({ titulo: "Excluir", ativo: false });

console.log("Botão Padrão:", botaoPadrao);
console.log("Botão Ativo:", botaoAtivo);
console.log("Botão Inativo:", botaoInativo);