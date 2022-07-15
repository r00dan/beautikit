import { createElement } from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';

import { ComponentPage, MainPage } from './pages';

export enum RoutePaths {
  MAIN = '/',
  BUTTON = '/component/button',
  INPUT = './component/input',
}

const routeList: RouteObject[] = [
  {
    path: RoutePaths.MAIN,
    element: createElement(MainPage),
  },
  {
    path: RoutePaths.BUTTON,
    element: createElement(ComponentPage),
  },
  {
    path: RoutePaths.INPUT,
    element: createElement(ComponentPage),
  },
]

export function Router() {
  return useRoutes(routeList);
}
