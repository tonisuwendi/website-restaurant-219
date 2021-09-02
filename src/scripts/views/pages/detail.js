import RestaurantAPISource from '../../data/restaurantapi-source';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import FormReview from '../../utils/form-reviews';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import {
  createCustomerReviewItem,
  createDetailRestaurant,
  createErrorMessageTemplate,
  createFormInsertReviewWrapper,
} from '../templates/template-creater';

const Detail = {
  async render() {
    return `
      <section class="restaurant-container detail-restaurant">
        <loading-content></loading-content>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.ParseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantAPISource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('.restaurant-container');
    if (!restaurant.success) {
      restaurantContainer.innerHTML = createErrorMessageTemplate(restaurant.msg);
      return;
    }
    restaurantContainer.innerHTML = createDetailRestaurant(restaurant.data);
    const customerReviews = document.getElementById('customerReviews');
    customerReviews.innerHTML = '<strong>Reviews Pelanggan</strong>';
    restaurant.data.customerReviews.forEach((review) => {
      customerReviews.innerHTML += createCustomerReviewItem(review);
    });

    FavoriteButtonPresenter.init({
      favoriteButton: document.getElementById('favoriteButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: restaurant.data,
    });

    const insertReview = document.getElementById('insertReview');
    insertReview.innerHTML = createFormInsertReviewWrapper();

    FormReview.init({
      formReview: document.getElementById('formInsertReview'),
      id: restaurant.data.id,
      buttonReview: document.getElementById('buttonSubmitReview'),
    });
  },
};

export default Detail;
