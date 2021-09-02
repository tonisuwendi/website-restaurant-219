class JumbotronContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="jumbotron" id="mainContent">
        <div class="overlay"></div>
        <div class="text">
          <h1 tabindex="0">Temukan Restoran Sekarang</h1>
          <p tabindex="0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ab
            provident ad assumenda corrupti ipsum autem id. Totam ab quia
          </p>
        </div>
      </section>
    `;
  }
}

customElements.define('jumbotron-content', JumbotronContent);
