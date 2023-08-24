import AuthInput from '@/components/auth/AuthInput';
import { IconeWarn } from '@/components/icons/Index';
import { useState } from 'react';

export default function Autenticacao() {
  const [erro, setErro] = useState(null);
  const [modo, setModo] = useState<'login' | 'cadastro'>('login');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function submeter() {
    if (modo === 'login') {
      exibiErro('Ocorreu um erro no login!');
    } else {
      exibiErro('Ocorreu um erro no cadastro!');
    }
  }

  function exibiErro(msg: string, tempoEmSegundos = 5) {
    setErro(msg);
    setTimeout(() => setErro(null), tempoEmSegundos * 1000);
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img className="h-screen w-full object-cover" src="https://source.unsplash.com/random" alt="img" />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-bold mb-5 ">{modo === 'login' ? 'Entre com a sua Conta' : 'Cadastre-se na Plataforma'}</h1>
        {erro && (
          <div className="flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg">
            {IconeWarn(8)}
            <span className="ml-2 text-sm">{erro}</span>
          </div>
        )}

        <AuthInput label="Email" tipo="email" valor={email} valorMudou={setEmail} obrigatorio renderizar />
        <AuthInput label="Senha" tipo="password" valor={senha} valorMudou={setSenha} obrigatorio renderizar />
        <button className="w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-md px-1 py-3 mt-6" onClick={submeter}>
          {modo === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>
        <hr className="my-6 border-gray-300 w-full" />
        <button className="w-full bg-red-500 hover:bg-red-400 text-white rounded-md px-1 py-3 " onClick={submeter}>
          Entrar com Google
        </button>

        {modo === 'login' ? (
          <p className="mt-4">
            Novo por aqui?
            <a onClick={() => setModo('cadastro')} className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer">
              Crie uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-4">
            Já tem uma conta?
            <a onClick={() => setModo('login')} className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer">
              Entre aqui
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
