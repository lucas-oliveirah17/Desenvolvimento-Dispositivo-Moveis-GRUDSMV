// Interfaces para tipar o retorno da PokeAPI
interface PokemonType {
    type: {
        name: string;
    };
}

interface PokemonData {
    name: string;
    height: number;
    weight: number;
    types: PokemonType[];
}

// URL da API
const urlPokeapi = "https://pokeapi.co/api/v2/pokemon/";
// Recebe o argumento do terminal
const query = process.argv[2];

// Validação simples para quando o usuário esquecer de passar o Pokémon
if (!query) {
  console.log("⚠️ Por favor, informe o nome ou ID de um Pokémon.");
  console.log("Exemplo de uso: npx ts-node --esm pokedex.ts pikachu");
  process.exit(1);
}

// Função principal assíncrona para buscar os dados
const getPokemon = async (idOrName: string): Promise<void> => {
    try {
        // Faz a requisição usando o fetch
        const response = await fetch(urlPokeapi + idOrName.toLowerCase());

        // Trata o erro 404 (Não Encontrado)
        if (response.status === 404) {
            console.log("❌ Pokémon não encontrado!");
            return;
        }

        // Se o status for diferente de 200 (OK) e 404, joga para o bloco catch
        if (!response.ok) {
            throw new Error("⚠️ Erro de rede. Tente novamente.");
        }

        // Converte a resposta para JSON aplicando a interface
        const data: PokemonData = await response.json();

        // Capitaliza a primeira letra do nome
        const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);

        // Converte altura de decímetros para metros
        const heightInMeters = data.height / 10;

        // Converte peso de hectogramas para quilogramas
        const weightInKg = data.weight / 10;

        // Extrai os tipos, capitaliza cada um e junta com vírgula e espaço
        const type = data.types
            .map((t) => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1))
            .join(', ');
        
        // Exibe dados do Pokémon
        console.log(`${name} - ${heightInMeters} m - ${weightInKg} kg - ${type}`);
    }
    
    catch(error) {
        console.log("⚠️ Erro de rede. Tente novamente.");
    }
}

// Executa a função passando o que foi digitado no terminal
getPokemon(query);
