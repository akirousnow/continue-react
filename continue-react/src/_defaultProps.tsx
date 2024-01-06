import { SmileFilled } from '@ant-design/icons';

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/',
        name: '主页',
        component: './index',
      },
      {
        path: '/welcome',
        name: '欢迎',
        icon: <SmileFilled />,
        component: './Welcome',
      },
    ],
  },
  location: {
    pathname: '/',
  },
};
