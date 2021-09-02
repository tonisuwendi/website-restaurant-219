/* eslint-disable no-undef */
const assert = require('assert');

Feature('Review Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('review restaurant', async ({ I }) => {
  I.seeElement('.btn-see-more');

  const buttonFirstRestaurant = locate('.btn-see-more').first();
  const titleFirstRestaurant = await I.grabTextFrom(locate('.box-item .info .name').first());
  I.click(buttonFirstRestaurant);

  const titleDetailRestaurant = await I.grabTextFrom('.info .name');

  assert(titleFirstRestaurant, titleDetailRestaurant);

  const nameReview = 'Toni Suwendi';
  const contentReview = 'Tempatnya bagus banget, sejuk, pelayanannya memuaskan. Sangat recommended.';

  I.seeElement('#formInsertReview');
  I.fillField('#nameReview', nameReview);
  I.fillField('#contentReview', contentReview);
  I.click('#buttonSubmitReview');

  I.see(nameReview, '.reviews .item');
  I.see(contentReview, '.reviews .item');
});
