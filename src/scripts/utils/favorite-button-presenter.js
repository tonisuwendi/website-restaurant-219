import {
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
} from '../views/templates/template-creater';

const FavoriteButtonPresenter = {
  async init({ favoriteButton, favoriteRestaurant, restaurant }) {
    this._favoriteButton = favoriteButton;
    this._restaurant = restaurant;
    this._favoriteRestaurant = favoriteRestaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._favoriteButton.innerHTML = createFavoriteButtonTemplate();

    const favoriteButton = document.getElementById('favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favoriteButton.innerHTML = createFavoritedButtonTemplate();

    const favoriteButton = document.getElementById('favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonPresenter;
