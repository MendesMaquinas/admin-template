import { createContext } from 'react';

type Tema = 'dark' | 'light'; 
interface AppConextProps {
    tema: Tema,
    alternarTema?: () => void,
}

const AppContext = createContext<AppConextProps>({});

export function AppProvider(props) {

    function alternarTema() {
        console.log("alterado");
        
    }
  return (
    <AppContext.Provider
      value={{
        tema: 'dark',
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;