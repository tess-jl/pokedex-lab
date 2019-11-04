import Component from '../Component.js';
import Header from '../common/Header.js';
import SearchSort from './SearchSort.js';
import Pagination from './Pagination.js';
import PokemonList from './PokemonList.js';
import Footer from '../common/Footer.js';

const pokemon = [ 
    {
        _id: '5cef3501ef6005a77cd4fdd0',
        pokemon: 'pichu',
        id: 187,
        species_id: 172,
        height: 3,
        weight: 20,
        base_experience: 41,
        type_1: 'electric',
        type_2: 'NA',
        attack: 40,
        defense: 15,
        hp: 20,
        special_attack: 35,
        special_defense: 35,
        speed: 60,
        ability_1: 'static',
        ability_2: 'NA',
        ability_hidden: 'lightning-rod',
        color_1: '#F8D030',
        color_2: 'NA',
        color_f: 'NA',
        egg_group_1: 'no-eggs',
        egg_group_2: 'NA',
        url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png',
        generation_id: 2,
        evolves_from_species_id: 'NA',
        evolution_chain_id: 10,
        shape_id: 8,
        shape: 'quadruped',
        pokebase: 'pichu',
        pokedex: 'http://www.pokemon.com/us/pokedex/pichu'
    }
]


class ExploreApp extends Component {

    onRender(element) {
        const header = new Header(); 
        element.prepend(header.renderDOM());

        const searchSortSection = element.querySelector('.search-sort-section');
        const searchSort = new SearchSort();
        searchSortSection.prepend(searchSort.renderDOM());

        const pokemonSection = element.querySelector('.pokemon-section');
        const paging = new Pagination();
        pokemonSection.appendChild(paging.renderDOM());

        const pokemonList = new PokemonList({ pokemon: pokemon });
        pokemonSection.appendChild(pokemonList.renderDOM());

        const footer = new Footer(); 
        element.append(footer.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header with nav-->
                
                <main>
                    <section class="search-sort-section">
                        <!-- search and sort -->
                    </section>
                        
                    <section class="pokemon-section">
                        <!-- pagination -->
                        <!-- pokemon list full of pokemon items -->     
                    </section>
                </main>

            </div>
        `;
    }
}

export default ExploreApp; 