import { lazy } from 'react';
import { faColumns, faCogs, faKeyboard } from '@fortawesome/free-solid-svg-icons'

const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Merchants = lazy(() => import('../pages/Merchants'));
const Settings = lazy(() => import('../pages/Settings'));

export const publicRoutes = [
  { 
    path: '/login', component: Login, name: 'Login'
  },
]

export const privateRoutes = [
  { path: '/dashboard', component: Dashboard, name: 'Dashboard', icon: faColumns, showInMenu: true },
  { path: '/merchants', component: Merchants, name: 'Merchants', icon: faKeyboard, showInMenu: true },
  { path: '/settings', component: Settings, name: 'Settings', icon: faCogs, showInMenu: true, customClass: 'last' },
]