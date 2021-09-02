class RestaurantList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2 class="title">${this.getAttribute('title')}</h2>
      <div class="line"></div>
      <div class="box-wrapper" id="restaurantWrapper">
        <skeleton-item></skeleton-item>
      </div>
    `;
  }
}

customElements.define('restaurant-list', RestaurantList);
