
import Layout from "../components/template/Layout";
import useAppData from "@/data/hook/useAppData";

export default function Home() {
  const dados = useAppData();
  return (
      <Layout titulo="Página de Notificações" subTitulo="Aqui voce ira gerienciar suas notificacoes">
        <h3>{dados.tema}</h3>
    </Layout>
  );
}
