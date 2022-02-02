import { Header } from './components/Header';
import { Registrar } from './components/Registrar';
import { Consultar } from './components/Consultar';
import { Alterar } from './components/Alterar';

import './app.scss';

export function App() {

  return (
    <>
      <Header />
      <div className='flex'>
        <Registrar />
        <Alterar />
        <Consultar />
      </div>
    </>
  );
}