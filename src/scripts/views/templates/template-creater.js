import CONFIG from '../../globals/config';

const createThumbnailListRestaurant = (restaurant) => `
  <img class="lazyload" src="/images/placeholder.jpg" data-src="${CONFIG.SMALL_IMG_URL + restaurant.pictureId}"
    alt="${restaurant.name}" />
  ${restaurant.city ? `<span class="city">Kota ${restaurant.city}</span>` : ''}
`;

const createRestaurantListItem = (restaurant) => `
  <div class="box-item" tabIndex="0">
    <div class="thumb">${createThumbnailListRestaurant(restaurant)}</div>
    <div class="info">
      <span class="rating">Rating: ${restaurant.rating}</span>
      <h3 class="name">${restaurant.name}</h3>
      <p class="description">${restaurant.description}</p>
      <a href="${`/#/detail/${restaurant.id}`}" tabIndex="0" class="btn-see-more">Lihat Detail</a>
    </div>
  </div>`;

const createSkeletonUIRestaurantItem = () => `
  <div class="box-item">
    <div class="shimmer-skeleton thumb-skeleton"></div>
    <div class="info">
      <div class="shimmer-skeleton rating-skeleton"></div>
      <div class="shimmer-skeleton name-skeleton"></div>
      <div class="shimmer-skeleton description-skeleton" style="width: 90%"></div>
      <div class="shimmer-skeleton description-skeleton" style="width: 95%"></div>
      <div class="shimmer-skeleton description-skeleton" style="width: 59%"></div>
      <div class="shimmer-skeleton button-skeleton"></div>
    </div>
  </div>
`;

const createDetailRestaurant = (restaurant) => `
  <div class="section">
    <img src="${CONFIG.MEDIUM_IMG_URL + restaurant.pictureId}" class="img-restaurant" alt="${restaurant.name}" tabIndex="0" />
    <div class="info">
      <h1 class="name" tabIndex="0">${restaurant.name}</h1>
      <span class="rating" tabIndex="0">Rating: ${restaurant.rating}</span>
      <p class="city" tabIndex="0">Kota: ${restaurant.city}</p>
      <p class="address" tabIndex="0">${restaurant.address}</p>
      <div id="favoriteButtonContainer"></div>
    </div>
  </div>
  <p class="description" tabIndex="0">${restaurant.description}</p>
  <p class="menu-title" tabIndex="0">Menu Makanan</p>
  <span tabIndex="0">${restaurant.menus.foods.map((food) => ` ${food.name}`)}</span>
  <p class="menu-title" tabIndex="0">Menu Makanan</p>
  <span tabIndex="0">${restaurant.menus.drinks.map((drink) => ` ${drink.name}`)}</span>
  <div class="reviews" id="customerReviews"></div>
  <div class="reviews" id="insertReview"></div>
`;

const createCustomerReviewItem = (review) => `
  <div class="item" tabIndex="0">
    <strong>${review.name}</strong><br/>
    <small>${review.date}</small>
    <p>${review.review}</p>
  </div>
  `;

const createFormInsertReviewWrapper = () => `
  <form id="formInsertReview">
    <div class="form-group">
      <label for"nameReview">Masukan Namamu</label>
      <input type="text" id="nameReview" class="form-control" autocomplete="off" />
    </div>
    <div class="form-group">
      <label for"contentReview">Masukan Review</label>
      <textarea id="contentReview" class="form-control" /></textarea>
    </div>
    <button type="submit" id="buttonSubmitReview">Submit Review</button>
  </form>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="like this restaurant" id="favoriteButton" class="favorite">
    <i class="fa fa-heart-o" aria-hidden="true"></i> Jadikan Favorit
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="favoriteButton" class="favorite favorited">
    <i class="fa fa-heart" aria-hidden="true"></i> Hapus dari Favorit
  </button>
`;

const createErrorMessageTemplate = (msg = CONFIG.MSG_ERROR_CONNECTION) => `
  <div class="error-message">
    <strong>${msg}</strong>
  </div>
`;

export {
  createRestaurantListItem,
  createSkeletonUIRestaurantItem,
  createDetailRestaurant,
  createCustomerReviewItem,
  createFormInsertReviewWrapper,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
  createErrorMessageTemplate,
};
