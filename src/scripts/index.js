import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import './components/app-bar';
import './components/drawer-menu';
import './components/jumbotron-content';
import './components/restaurant-list';
import './components/loading-content';
import './components/skeleton-item';
import './components/footer-elm';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.getElementById('imgButtonMenuIcon'),
  drawer: document.getElementById('drawerMenu'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
