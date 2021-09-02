import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantAPISource {
  static async listRestaurants() {
    try {
      const response = await axios.get(API_ENDPOINT.LIST);
      return response.data.restaurants;
    } catch (err) {
      return null;
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await axios.get(API_ENDPOINT.DETAIL(id));
      return {
        success: true,
        data: response.data.restaurant,
      };
    } catch (err) {
      return {
        success: false,
        msg:
          err.response && err.response.status === 400
            ? CONFIG.MSG_NOT_FOUND
            : CONFIG.MSG_ERROR_CONNECTION,
      };
    }
  }

  static async reviewRestaurant(review) {
    try {
      const response = await axios.post(API_ENDPOINT.REVIEW, review, {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.API_KEY,
      });
      return response.data;
    } catch (err) {
      return err.response.data;
    }
  }
}

export default RestaurantAPISource;
