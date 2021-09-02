/* eslint-disable no-undef */

const itActsAsFavoriteRestaurantModel = (favoriteRetaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRetaurant.putRestaurant({ id: 1 });
    favoriteRetaurant.putRestaurant({ id: 2 });

    expect(await favoriteRetaurant.getRestaurant(1))
      .toEqual({ id: 1 });
    expect(await favoriteRetaurant.getRestaurant(2))
      .toEqual({ id: 2 });
    expect(await favoriteRetaurant.getRestaurant(3))
      .toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRetaurant.putRestaurant({ aProperty: 'property' });

    expect(await favoriteRetaurant.getAllRestaurants())
      .toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favoriteRetaurant.putRestaurant({ id: 1 });
    favoriteRetaurant.putRestaurant({ id: 2 });

    expect(await favoriteRetaurant.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRetaurant.putRestaurant({ id: 1 });
    favoriteRetaurant.putRestaurant({ id: 2 });
    favoriteRetaurant.putRestaurant({ id: 3 });

    await favoriteRetaurant.deleteRestaurant(1);

    expect(await favoriteRetaurant.getAllRestaurants())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRetaurant.putRestaurant({ id: 1 });
    favoriteRetaurant.putRestaurant({ id: 2 });
    favoriteRetaurant.putRestaurant({ id: 3 });

    await favoriteRetaurant.deleteRestaurant(4);

    expect(await favoriteRetaurant.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteRestaurantModel };
