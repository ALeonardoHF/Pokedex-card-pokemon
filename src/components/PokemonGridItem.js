import React from 'react';
import './css/pokemon.css';

export const PokemonGridItem = ({id, name, sprites, stats, types, abilities}) => {

    if (id === undefined) {
        return ''
    }

    const cardType = `card card--${types[0].type.name}`;
    let types_array = [];

    types.map((type)=>
      types_array.push(type.type.name)
    )

    return (
        <>
        <div id="cards">  

            <figure className={cardType}>
            <div className="card__image-container">
                <img src={sprites.front_default} alt={name} className="card__image"/>

                {sprites.front_female ? <img src={sprites.front_female} alt={name} className="card__image"/> : ''}
                <img src={sprites.front_shiny} alt={name} className="card__image"/>   
            </div>
            
            <figcaption className="card__caption">
                <h3 className="card__name"> No. {id}</h3>
                <h1 className="card__name">{name}</h1>
                <div className='container'>
                <h3 className="card__type"> {types_array[0]} </h3>
                {types_array[1] ? <h3 className="card__type__2">{types_array[1]}</h3>:''}
                </div>
                <hr className="hr_line" /><hr className="hr_line" />
                <table className="card__stats">
                <tbody>
                {stats.map((s,i)=> {
                    return (<tr key={i}><th className="stat_name">{s.stat.name}</th><td>{s.base_stat}</td></tr>)
                })}
                </tbody>
                </table>
                <div className="card__abilities">
                {abilities.map((a,slot)=> {
                    return (<h4 key={slot} className="card__ability" id="ability_cap">
                            <span className="card__label">{a.is_hidden ? 'Hidden Ability' : 'Ability'}</span>
                            {a.ability.name}
                            </h4>
                        )
                })}
                </div>
            </figcaption>
            </figure>
        </div>
        </>
    )
}
