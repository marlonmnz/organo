import "./Formulario.css"
import CampoTexto from '../CampoTexto';
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {

  const sorted = props.times.sort();

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return(
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto 
          label="Nome" 
          placeholder="Digite o seu nome" 
          obrigatorio={true}
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto 
          label="Cargo" 
          placeholder="Digite o seu cargo" 
          obrigatorio={true}
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto 
          label="Imagem" 
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
          label="Time" 
          itens={sorted} 
          obrigatorio={true}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar card
        </Botao>
      </form>
    </section>
  )
}

export default Formulario;