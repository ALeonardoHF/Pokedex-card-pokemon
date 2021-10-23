import React from 'react';
import { useFetchPokemon } from '../hooks/useFetchPokemon';
import {PokemonGridItem} from './PokemonGridItem'
import './css/searchPokemon.css';


export const PokemonGrid = ({pokemon}) => {

    const {data, loading} = useFetchPokemon(pokemon);

    return (
        <>
            {loading && <p className="loadingText">Loading ...</p>}

            <div>
                <PokemonGridItem key={data.id} {...data}/>
            </div>
        </>
    )
}
