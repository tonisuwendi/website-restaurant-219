/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking and unliking one restaurant', async ({ I }) => {
  I.see('Belum ada restoran favorit.', '.restaurant-container');

  I.amOnPage('/');

  I.seeElement('.btn-see-more');

  const buttonFirstRestaurant = locate('.btn-see-more').first();
  const titleFirstRestaurant = await I.grabTextFrom(locate('.box-item .info .name').first());
  I.click(buttonFirstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.box-item');
  const titleFavoriteRestaurant = await I.grabTextFrom(locate('.box-item .info .name').first());

  assert.strictEqual(titleFirstRestaurant, titleFavoriteRestaurant);

  I.seeElement('.btn-see-more');

  const buttonFavoriteRestaurant = locate('.btn-see-more').first();
  I.click(buttonFavoriteRestaurant);

  const titleDetailRestaurant = await I.grabTextFrom('.info .name');

  assert.strictEqual(titleFavoriteRestaurant, titleDetailRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');

  I.see('Belum ada restoran favorit.', '.restaurant-container');
});
