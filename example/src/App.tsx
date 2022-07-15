import { BrowserRouter } from 'react-router-dom';

import style from './App.module.scss';
import { Router } from './Router';

export default function App() {
  return (
    <div className={style.root}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}
