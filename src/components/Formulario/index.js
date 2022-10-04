import "./Formulario.css"
import CampoTexto from '../CampoTexto';
import ListaSuspensa from "../ListaSuspensa";

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

  return(
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
        <CampoTexto label="Cargo" placeholder="Digite o seu cargo"/>
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem"/>
        <ListaSuspensa label="Time" itens={sorted}/>
      </form>
    </section>
  )
}

export default Formulario;