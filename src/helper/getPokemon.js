export const getPokemon = async (pokemon) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${encodeURI(pokemon)}`;
    const resp = await fetch(url);
    const data = await resp.json();

    // console.log(pkmn);
    return data;
}
