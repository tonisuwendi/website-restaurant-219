class DrawerMenu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <aside id="drawerMenu">
        <ul>
          <li><a href="/">Home</a></li>
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
      </aside>
    `;
  }
}

customElements.define('drawer-menu', DrawerMenu);
