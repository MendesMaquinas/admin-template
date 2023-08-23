import Cabecalho from "./Cabecalho";
import MenuLateral from "./MenuLateral";
import Conteudo from "./Conteudo";

interface LayoutProps {
  titulo: string;
  subTitulo: string;
  children?: any;
}

export default function Layput(props: LayoutProps) {
  return (
    <div className="flex h-screen w-screen">
      <MenuLateral />
      <div className="flex flex-col p-7 w-full bg-gray-300">
        <Cabecalho titulo={props.titulo} subtitulo={props.subTitulo} />
        <Conteudo>{props.children}</Conteudo>
      </div>
    </div>
  );
}
