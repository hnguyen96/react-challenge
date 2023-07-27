import axios from "axios"
import { useEffect, useState } from "react";
import { redirect  } from 'react-router-dom';

type Pokemon = {
    id: number;
    name: string;
}

export default function Pokemon() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [name, setName] = useState('');

    async function getPokemon() {
        axios.get('http://localhost:3000/pokemons')
            .then(resp => {
                setPokemons(resp.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    async function deletePokemon(id: number) {
        axios.delete(`http://localhost:3000/pokemons/${id}`)
            .then(() => {
                getPokemon()
            })
            .catch(error => {
                console.log(error);
            });
    }

    async function postPokemon(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        axios.post(`http://localhost:3000/pokemons`, { name })
        .then(() => {
            getPokemon()
        }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        getPokemon();
    }, []);

    return (
        <div className=" mx-auto">
            <div className="form-control">
                <div className="input-group">
                    <form className="flex">
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Pokemon name" className="input input-bordered input-secondary w-full max-w-xs" />
                        <button type="submit" onClick={(e) => postPokemon(e)} className="btn btn-active btn-secondary">Add</button>
                    </form>
                </div>
            </div>

            <ul className="list-disc">
                {pokemons.map((pokemon: Pokemon) => {
                    return (
                        <li key={pokemon.id} className="flex flex-row mt-4 justify-between">
                            <p>{pokemon.name}</p>
                            <button className="btn btn-error" onClick={() => deletePokemon(pokemon.id)}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}