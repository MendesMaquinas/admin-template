import { createContext, useState } from 'react';
import firebase from '../../firebase/config';
import Usuario from '../../model/Usuario';
import route from 'next/router';
import Cookies from "js-cookie";

interface AuthContextProps {
  usuario?: Usuario;
  loginGoogle?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
  const token = await usuarioFirebase.getIdToken();
  return {
    uid: usuarioFirebase.uid,
    nome: usuarioFirebase.displayName,
    email: usuarioFirebase.email,
    token,
    provedor: usuarioFirebase.providerData[0].providerId,
    imagemUrl: usuarioFirebase.photoURL,
  };
}

function gerenciarCookie(logado: boolean) {
    if (logado) {
        Cookies.set("admin-template-cod3r-auth", logado, {
            expires: 1,
        })
    } else {
        Cookies.remove("admin-template-cod3r-auth");
    }
}

export function AuthProvider(props) {
  const [carregando, setCarregando] = useState(true);
  const [usuario, setUsuario] = useState<Usuario>(null);

  async function configurarSessao(usuarioFirebase: firebase.User) {
    if(usuarioFirebase?.email) {
        const usuario = await usuarioNormalizado(usuarioFirebase);
        setUsuario(usuario);
        setCarregando(false);
        gerenciarCookie(true);
    } else {
        setUsuario(null);
        gerenciarCookie(false);
    }
  }

  async function loginGoogle() {
    const resp = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
    if (resp.user?.email) {
      const usuario = await usuarioNormalizado(resp.user);
      setUsuario(usuario);

      route.push('/');
    }
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        loginGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
