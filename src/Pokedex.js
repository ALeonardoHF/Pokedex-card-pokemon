import React, {useState} from 'react';
import { SearchPokemon } from './components/SearchPokemon';
import { PokemonGrid } from './components/PokemonGrid';

const Pokedex = () => {

    function aleatorio(inferior, superior) {
        var numPosibilidades = superior - inferior;
        var aleatorio = Math.random() * (numPosibilidades + 1);
        aleatorio = Math.floor(aleatorio);
        return inferior + aleatorio;
    }

    const pkmn = aleatorio (1, 898);

    const [pokemon, setPokemon] = useState(pkmn);

    return (
        <>
            {/* <h2>Pokedex</h2>
             */}
             <img src="https://fontmeme.com/permalink/211023/4cb64e943694981d154ca5e5fe995908.png" alt="fuente-pokemon" border="0"/>
            <SearchPokemon setPokemon={setPokemon} />
            <PokemonGrid pokemon={pokemon} />
        </>
    );
}

export default Pokedex;