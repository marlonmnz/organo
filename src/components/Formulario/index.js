import "./Formulario.css"
import CampoTexto from '../CampoTexto';
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
  const times = [
    'Programação',
    'Front-End',
    'Data science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',
  ]

  const sorted = times.sort();

  const aoSalvar = (evento) => {
    evento.preventDefault();
  }

  return(
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="Digite o seu nome" obrigatorio={true}/>
        <CampoTexto label="Cargo" placeholder="Digite o seu cargo" obrigatorio={true}/>
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem"/>
        <ListaSuspensa label="Time" itens={sorted} obrigatorio={true}/>
        <Botao>
          Criar card
        </Botao>
      </form>
    </section>
  )
}

export default Formulario;