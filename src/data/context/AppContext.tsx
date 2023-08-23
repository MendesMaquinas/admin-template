import { createContext } from 'react';
import {useState} from "react";

type Tema = 'dark' | 'light'; 
interface AppConextProps {
    tema: Tema,
    alternarTema?: () => void,
}



const AppContext = createContext<AppConextProps>({});

export function AppProvider(props: any) {
    const [tema, setTema] = useState<Tema>('light')

    function alternarTema() {
        setTema(tema === 'dark' ? 'light' : 'dark');
    }
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