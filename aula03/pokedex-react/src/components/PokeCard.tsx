import { useState, useEffect } from "react";
import "./PokeCard.css"; 

type PokeCardProps = {
  pokemon: {
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
};

export function PokeCard({ pokemon }: PokeCardProps) {
  const [favorito, setFavorito] = useState(() => {
    const salvo = localStorage.getItem(`favorito-${pokemon.name}`);
    return salvo === "true";
  });

  useEffect(() => {
    console.log(`Pokémon ${pokemon.name} carregado com sucesso!`);
  }, [pokemon]);

  useEffect(() => {
    localStorage.setItem(`favorito-${pokemon.name}`, favorito.toString());
  }, [favorito, pokemon.name]);

  const handleFavoritar = () => {
    const novoEstado = !favorito;
    setFavorito(novoEstado);

    if (novoEstado) {
      console.log(`⭐ ${pokemon.name} foi adicionado aos favoritos!`);
    } else {
      console.log(`💔 ${pokemon.name} foi removido dos favoritos.`);
    }
  };

  return (
    <div className="pokecard-container">
      <h3 className="pokecard-name">
        {pokemon.name} {favorito ? "⭐" : ""}
      </h3>
      
      {pokemon.sprites.front_default && (
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokecard-image"
        />
      )}
      
      <div className="pokecard-info">
        <p><strong>Altura:</strong> {pokemon.height * 10} cm</p>
        <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
        <p><strong>Tipos:</strong> {pokemon.types.map((t) => t.type.name).join(" / ")}</p>
      </div>

      <button 
        className={`pokecard-button ${favorito ? 'favorito' : ''}`}
        onClick={handleFavoritar}
      >
        {favorito ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
      </button>
    </div>
  );
}