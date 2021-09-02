const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  SMALL_IMG_URL: 'https://restaurant-api.dicoding.dev/images/small/',
  MEDIUM_IMG_URL: 'https://restaurant-api.dicoding.dev/images/medium/',
  API_KEY: '12345',
  CACHE_NAME: new Date().getTime(),
  DATABASE_NAME: 'restofud-db',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurant',
  MSG_ERROR_CONNECTION:
    'Tidak dapat menampilkan data restoran, pastikan perangkatmu terhubung ke internet dan silakan coba lagi.',
  MSG_NOT_FOUND: 'Restoran yang kamu cari tidak ditemukan.',
  MSG_ERROR_CONNECTION_REVIEW: 'Tidak dapat submit review, pastikan perangkatmu terhubung ke internet dan silakan coba lagi.',
  MSG_FAVORITE_ISEMPTPY: 'Belum ada restoran favorit.',
};

export default CONFIG;
