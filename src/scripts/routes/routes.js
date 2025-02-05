import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import UMKM from '../views/pages/umkm';
import About from '../views/pages/about';
import Lokasi from '../views/pages/lokasi';
// import other page modules

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/umkm': UMKM,
  '/about': About,
  '/lokasi': Lokasi,
  // add other routes here
};

export default routes;
