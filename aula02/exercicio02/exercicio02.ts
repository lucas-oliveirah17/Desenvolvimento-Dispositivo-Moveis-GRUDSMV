type Sucesso = { tipo: "sucesso"; dados: string[] };
type Erro = { tipo: "erro"; mensagem: string };

type Resultado = Sucesso | Erro;

function exibirResultado(r: Resultado): void {
  if (r.tipo === "sucesso") {
    console.log("Sucesso! Dados recebidos:", r.dados);
  } else {
    console.log("Erro! Ocorreu um problema:", r.mensagem);
  }
}

const respostaOK: Resultado = { 
  tipo: "sucesso", 
  dados: ["React Native", "TypeScript", "Expo"] 
};

const respostaFalha: Resultado = { 
  tipo: "erro", 
  mensagem: "Tempo limite de requisição excedido." 
};

exibirResultado(respostaOK);
exibirResultado(respostaFalha);