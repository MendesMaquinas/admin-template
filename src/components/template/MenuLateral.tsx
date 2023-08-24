import MenuItem from './MenuItem';

import { IconeHome, IconeAjustes, IconeNotificacao, IconeSair } from '../icons/Index';
import Logo from './Logo';
import useAuth from '../../data/hook/useAuth';

export default function MenuLateral() {

  const { logout } = useAuth()
  return (
    <aside className='flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900'>
      <div className="h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800 flex flex-col items-center justify-center">
        <Logo />
      </div>
      <ul className='flex-grow'>
        <MenuItem url="/" texto="Home" icone={IconeHome} />
        <MenuItem url="/Ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/Notificacoes" texto="Notificações" icone={IconeNotificacao} />
      </ul>
      <ul >
        <MenuItem url='/Autenticacao'  texto="Sair" icone={IconeSair} onClick={logout} className='text-red-600 dark:text-red-400 hover:bg-red-400 hover:text-white dark:hover:text-white'/>
      </ul> 
    </aside>
  );
}
