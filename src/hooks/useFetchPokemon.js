import { useState, useEffect } from "react";

import {getPokemon} from '../helper/getPokemon';

export const useFetchPokemon = (pokemon) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getPokemon(pokemon)
        .then(data => {

            setTimeout(()=> {
                setState({
                    data,
                    loading: false
                });
            }, 1000);

            // setState({
            //     data: data,
            //     loading: false
            // });
        });
    },[pokemon]);

    return state;
}