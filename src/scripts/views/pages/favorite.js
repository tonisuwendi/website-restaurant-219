import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import CONFIG from '../../globals/config';
import {
  createErrorMessageTemplate,
  createRestaurantListItem,
} from '../templates/template-creater';

const Favorite = {
  async render() {
    return `
      <section class="restaurant-container">
        <restaurant-list class="restaurant-wrapper" title="Restoran Favorit"></restaurant-list>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    if (restaurants.length > 0) {
      const restaurantWrapper = document.getElementById('restaurantWrapper');
      restaurantWrapper.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantWrapper.innerHTML += createRestaurantListItem(restaurant);
      });
      return;
    }
    const restaurantContainer = document.querySelector('.restaurant-container');
    restaurantContainer.innerHTML = createErrorMessageTemplate(CONFIG.MSG_FAVORITE_ISEMPTPY);
  },
};

export default Favorite;
