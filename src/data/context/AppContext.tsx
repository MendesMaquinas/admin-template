import { createContext, useEffect } from 'react';
import { useState } from "react";

//type Tema = 'dark' | 'light'; 
interface AppConextProps {
  tema?: string,
  alternarTema?: () => void,
}

const AppContext = createContext<AppConextProps>({});

export function AppProvider(props: any) {
  const [tema, setTema] = useState('light')

  function alternarTema() {
    const novoTema = tema === '' ? 'dark' : '';
    setTema(novoTema);
    localStorage.setItem("tema", novoTema)
  }

  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema");
    setTema(temaSalvo);
  },[])

  return (
    <AppContext.Provider
      value={{
        tema,
        alternarTema,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;