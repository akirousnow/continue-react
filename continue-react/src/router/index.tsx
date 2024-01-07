import Index from '@/pages';
import Login from '@/pages/login.tsx';
import Welcome from '@/pages/welcome.tsx';
import Root from '@/Root.tsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={'/'} element={<Root />}>
        <Route index element={<Index />}></Route>
        <Route element={<Welcome />} path={'/welcome'}></Route>
      </Route>
      <Route path={'/login'} element={<Login />} />
    </>,
  ),
);
