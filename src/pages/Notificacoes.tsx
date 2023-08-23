import useAppData from "@/data/hook/useAppData";

import Layout from "../components/template/Layout";

export default function Home() {
  const {alternarTema} = useAppData();

  return (
      <Layout titulo="Página de Notificações" subTitulo="Aqui voce ira gerienciar suas notificacoes">
        <button onClick={alternarTema}>Click</button>

    </Layout>
  );
}
