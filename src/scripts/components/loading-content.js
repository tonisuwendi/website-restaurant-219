class LoadingContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="loading-content">
        <img src="/images/loading.gif" alt="loading animation" />
        <strong>Tunggu sebentar, sedang mengambil data..</strong>
      </div>
    `;
  }
}

customElements.define('loading-content', LoadingContent);
