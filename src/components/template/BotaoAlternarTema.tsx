import { IconeMoon, IconeSun } from '../icons/Index';

interface BotaoAlternarTemaProps {
  tema: string;
  alternarTema?: () => void;
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
  return props.tema === 'dark' ? (
    <div onClick={() => props.alternarTema} className='hidden sm:flex items-center cursor-pointer bg-gradient-to-r from-yellow-300 to-yellow-600 w-14 lg:w-24 h-8 p-1 rounded-full'>
      <div className='flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full'>{IconeSun(5)}</div>
      <div className='hidden lg:flex items-center ml-3 text-white'>
        <span>Claro</span>
      </div>
    </div>
  ) : (
    <div onClick={() => props.alternarTema} className='flex items-center bg-gradient-to-r from-yellow-300 to-yellow-600 w-24 h-8'>
      <div>{IconeMoon}</div>
      <div>
        <span>Escuro</span>
      </div>
    </div>
  );
}
