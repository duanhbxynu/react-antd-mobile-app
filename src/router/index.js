import Login from '@/pages/Login'
import UserCenter from '@/pages/UserCenter'
import ProductCenter from '@/pages/product'
import Mobx from '@/pages/mobx'
const routes = [
  {
    path: '/',
    component: <Login />
  },
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
  },
  {
    path: '/mobx',
    component: <Mobx />
  }
]
export default routes