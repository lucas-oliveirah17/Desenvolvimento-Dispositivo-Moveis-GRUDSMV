import { useState } from "react";
import "./Pokedex.css";
import { PokeCard } from "./PokeCard";

type Pokemon = {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string | null;
  };
  types: Array<{
    type: { name: string };
  }>;
};

export default function Pokedex() {
  const [nome, setNome] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  
  const [listaPokemons, setListaPokemons] = useState<Pokemon[]>([]);

  const buscarPokemon = async () => {
    if (!nome.trim()) return;

    if (listaPokemons.some(p => p.name === nome.toLowerCase())) {
      setErro("Este Pokémon já está na lista!");
      return;
    }

    setCarregando(true);
    setErro("");

    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`
      );
      if (!resposta.ok) throw new Error("Pokémon não encontrado");

      const dados: Pokemon = await resposta.json();
      
      setListaPokemons((prevLista) => [dados, ...prevLista]);
      setNome(""); // Limpa o campo de busca
    } catch (e) {
      setErro("Pokémon não encontrado 😢");
    } finally {
      setCarregando(false);
    }
  };

  const limparLista = () => {
    setListaPokemons([]);
    setErro("");
  };

  return (
    <div className="pokedex-container">
      <h2 className="pokedex-title">🔎 Pokédex</h2>

      <input
        className="pokedex-input"
        type="text"
        placeholder="Digite o nome do Pokémon (ex: ditto)"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <button className="pokedex-button" onClick={buscarPokemon}>
        Buscar
      </button>

      {listaPokemons.length > 0 && (
        <button className="pokedex-button limpar" onClick={limparLista}>
          Limpar Lista
        </button>
      )}

      {carregando && <p className="pokedex-loading">Carregando...</p>}
      {erro && <p className="pokedex-error">{erro}</p>}

      <div className="pokedex-lista">
        {listaPokemons.map((pokemonBuscado) => (
          <PokeCard key={pokemonBuscado.name} pokemon={pokemonBuscado} />
        ))}
      </div>
    </div>
  );
}