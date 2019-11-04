import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon; 

        return /*html*/`
        <li class="pokemon-item">
            <h2>${pokemon.pokemon}</h2>

            <img src="${pokemon.url_image}" alt="${pokemon.pokemon} image">

            <p class="hp">${pokemon.hp}</p>

            <p class="pokemon-gen">${pokemon.generation_id}</p>
        </li>
    
        `;
    }
}

export default PokemonItem;

