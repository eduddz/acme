import { Header } from "./Components/Header";
import { Routess } from "./Routes";

import "./App.scss";

export function App() {
  return (
    <>
      <Header 
        title="ACME" 
        subtitle="Cadastro, alteração e consulta de pacientes"
      />
      <Routess />
    </>
  );
}
