interface AuthInputProps {
  label: string;
  valor: any;
  obrigatorio?: boolean;
  renderizar?: boolean;
  tipo?: 'text' | 'email' | 'password';
  valorMudou: (novoValor: any) => void;
}

export default function AuthInput(props: AuthInputProps) {
  return (
    props.renderizar && (
      <div className="flex flex-col mt-4">
        <label>{props.label}</label>
        <input
          type={props.tipo ?? 'text'}
          value={props.valor}
          required={props.obrigatorio}
          onChange={(e) => props?.valorMudou(e.target.value)}
          className="px-4 py-3 rounded-md bg-gray-200 mt-1 border focus:border-blue-500 focus:outline-none focus:bg-white"
        />
      </div>
    )
  );
}
