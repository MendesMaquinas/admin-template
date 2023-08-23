import MenuItem from './MenuItem';

import { IconeHome, IconeAjustes, IconeNotificacao, IconeSair } from '../icons/Index';
import Logo from './Logo';

export default function MenuLateral() {
  return (
    <aside className='flex flex-col'>
      <div className="h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800 flex flex-col items-center justify-center">
        <Logo />
      </div>
      <ul className='flex-grow'>
        <MenuItem url="/" texto="Home" icone={IconeHome} />
        <MenuItem url="/Ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/Notificacoes" texto="Notificações" icone={IconeNotificacao} />
      </ul>
      <ul >
        <MenuItem url="/" texto="Sair" icone={IconeSair} />
      </ul>
    </aside>
  );
}
