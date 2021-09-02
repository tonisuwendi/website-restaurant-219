import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import List from '../views/pages/list';

const routes = {
  '/': List,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
