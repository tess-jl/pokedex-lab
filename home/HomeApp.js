import Component from '../Component.js';
import Header from '../common/Header.js';

class HomeApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
    }



    renderHTML() {
        return /*html*/`
            <div>
                <!-- where I dynamically render the header -->
                
                <main>
                    <p>
                        Home page of Pokedex!
                        <a href="explore.html">Click here to search and sort 'em all!</a>
                    </p>
                </main>
            </div>
        `;
    }
}

export default HomeApp;