import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {

        return /*html*/`
            <li class="pokemon-item">
                <h2>
                    <a href="./" target="_blank">
                        Harry Potter and the Deathly Hallows: Part 2
                    </a>
                </h2>
                <img 
                    src="https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
                    alt="Harry Potter and the Deathly Hallows: Part 2 movie poster"
                >
                <time>2011</time>
            </li>
        `;
    }
}

export default PokemonItem;