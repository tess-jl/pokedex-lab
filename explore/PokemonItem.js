import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {

        return /*html*/`
            <li class="pokemon-item">
                <h2>pokemon title</h2>
                
                <img src="./assets/placeholder.jpg" alt="image">
                
                
                <p class="hp">hp</p>

                <p class="pokemon-gen">generation</p>
            </li>
        `;
    }
}

export default PokemonItem;

// {/* <li class="pokemon-item">
// <h2>${pokemon.pokemon} pokemon title</h2>

// <img src="./assets/placeholder.jpg" alt="image">
// <!-- <img src="${pokemon.url_image}" alt="${pokemon.pokemon} image"> -->

// <p class="hp">${pokemon.hp}</p>

// <p class="pokemon-gen">${pokemon.generation_id}</p>
// </li> */}