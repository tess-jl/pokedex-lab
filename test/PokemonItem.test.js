import PokemonItem from '../explore/PokemonItem.js';
const test = QUnit.test;

QUnit.module('Render Movie Item');

test('renders html from data', assert => {
    // arrange
    const pokemon = {
        Title: 'Harry Potter and the Deathly Hallows: Part 2',
        Year: '2011',
        imdbID: 'tt1201607',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'
    };

    const expected = /*html*/`
        <li class="movie-item">
            <h2>
                <a href="https://www.imdb.com/title/tt1201607" target="_blank">
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

    // act
    const props = { pokemon: pokemon };
    const pokemonItem = new PokemonItem(props);
    const html = pokemonItem.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});