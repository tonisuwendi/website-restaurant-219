const { createSkeletonUIRestaurantItem } = require('../views/templates/template-creater');

class SkeletonItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = createSkeletonUIRestaurantItem().repeat(6);
  }
}

customElements.define('skeleton-item', SkeletonItem);
