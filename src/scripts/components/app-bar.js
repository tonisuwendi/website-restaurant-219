class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header tabindex="0">
        <a href="/#/">
          <img
            src="/images/logo/logo-restofud.svg"
            class="logo-app"
            alt="logo restofod"
          />
        </a>
        <nav>
          <ul>
            <li><a href="/#/">Home</a></li>
            <li><a href="/#/favorite">Favorite</a></li>
            <li>
              <a
                href="https://linkedin.com/in/tonisuwendi"
                target="_blank"
                rel="noopener"
                >About Us</a
              >
            </li>
          </ul>
        </nav>
        <button id="imgButtonMenuIcon" aria-label="tombol menu">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
      </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
