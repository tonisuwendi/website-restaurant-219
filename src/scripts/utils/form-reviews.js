import RestaurantAPISource from '../data/restaurantapi-source';
import CONFIG from '../globals/config';
import { createCustomerReviewItem } from '../views/templates/template-creater';

const FormReview = {
  init({ formReview, id, buttonReview }) {
    formReview.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('nameReview').value;
      const review = document.getElementById('contentReview').value;
      if (this._checkRequired({ name, review })) {
        this._loadingButton(buttonReview);
        const dataReview = {
          id,
          name,
          review,
        };
        this._insertReview({ dataReview, buttonReview });
      }
    });
  },

  _checkRequired({ name, review }) {
    if (name.trim() === '' || review.trim() === '') {
      alert('Semua kolom harus diisi');
      return false;
    }
    return true;
  },

  _loadingButton(buttonReview) {
    buttonReview.setAttribute('disabled', 'disabled');
    buttonReview.innerText = 'Loading..';
    buttonReview.style.opacity = '0.4';
  },

  _resetButton(buttonReview) {
    buttonReview.removeAttribute('disabled');
    buttonReview.innerText = 'Submit Review';
    buttonReview.style.opacity = 1;
  },

  _checkConnection() {
    return window.navigator.onLine;
  },

  async _insertReview({ dataReview, buttonReview }) {
    if (!this._checkConnection()) {
      alert(CONFIG.MSG_ERROR_CONNECTION_REVIEW);
      this._resetButton(buttonReview);
      return;
    }
    const response = await RestaurantAPISource.reviewRestaurant(dataReview);
    if (response.error) {
      alert(response.message);
    } else {
      alert('Berhasil submit review!');
      document.getElementById('nameReview').value = '';
      document.getElementById('contentReview').value = '';
      this._renderReview(response.customerReviews);
    }
    this._resetButton(buttonReview);
  },

  _renderReview(reviews) {
    const customerReviews = document.getElementById('customerReviews');
    customerReviews.innerHTML = '<strong>Reviews Pelanggan</strong>';
    reviews.forEach((review) => {
      customerReviews.innerHTML += createCustomerReviewItem(review);
    });
  },
};

export default FormReview;
