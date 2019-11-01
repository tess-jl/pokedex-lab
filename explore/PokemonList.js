import Component from '../Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {
    
    onRender(element) {
        const pokemonItem = new PokemonItem();
        element.prepend(pokemonItem.renderDOM());
    }

    renderHTML() {
        
        return /*html*/`
            <ul class="pokemon-list">
                <li class="pokemon-item"></li>
                <li class="pokemon-item"></li>
                <li class="pokemon-item"></li>
                <li class="pokemon-item"></li>
                <li class="pokemon-item"></li>
                <li class="pokemon-item"></li>
                <li class="pokemon-item"></li>
                <li class="pokemon-item"></li>
                <li class="pokemon-item"></li>
                <li class="pokemon-item"></li>
                <li class="pokemon-item"></li>
                <li class="pokemon-item"></li>
                <li class="pokemon-item"></li>
                <li class="pokemon-item"></li>
                <li class="pokemon-item"></li>
                <li class="pokemon-item"></li>
                <li class="pokemon-item"></li>
                <li class="pokemon-item"></li>
            </ul>
        `;
    }
}

export default PokemonList;