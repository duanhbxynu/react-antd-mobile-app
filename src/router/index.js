import Login from '../pages/Login'
import UserCenter from '../pages/UserCenter'
import ProductCenter from '../pages/product'
const routes = [
  {
    path: '/login',
    component: <Login />
  },
  {
    path: '/usercenter',
    component: <UserCenter />
  },
  {
    path: '/productCenter',
    component: <ProductCenter />
  }
]
export default routes