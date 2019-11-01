import Component from '../Component.js';
import Header from '../common/Header.js';
import SearchSort from './SearchSort.js';
import Pagination from './Pagination.js';

class ExploreApp extends Component {

    onRender(element) {
        const header = new Header(); 
        element.prepend(header.renderDOM());

        const searchSortSection = element.querySelector('.search-sort-section');
        const searchSort = new SearchSort();
        searchSortSection.prepend(searchSort.renderDOM());

        const listSection = element.querySelector('.pokemon-section');
        const paging = new Pagination();
        listSection.appendChild(paging.renderDOM());

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