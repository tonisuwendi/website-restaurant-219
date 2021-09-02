import RestaurantAPISource from '../../data/restaurantapi-source';
import {
  createRestaurantListItem,
  createErrorMessageTemplate,
} from '../templates/template-creater';

const List = {
  async render() {
    return `
      <jumbotron-content></jumbotron-content>
      <section class="restaurant-container">
        <restaurant-list class="restaurant-wrapper" title="Rekomendasi Restoran"></restaurant-list>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantAPISource.listRestaurants();
    if (restaurants) {
      const restaurantWrapper = document.getElementById('restaurantWrapper');
      restaurantWrapper.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantWrapper.innerHTML += createRestaurantListItem(restaurant);
      });
      return;
    }
    const restaurantContainer = document.querySelector('.restaurant-container');
    restaurantContainer.innerHTML = createErrorMessageTemplate();
  },
};

export default List;
