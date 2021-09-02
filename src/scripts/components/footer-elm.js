class FooterElm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <p>Copyright &copy; 2021 - Restofud. All Right Reserved.</p>
      </footer>
    `;
  }
}

customElements.define('footer-elm', FooterElm);
