import { FiPlus } from "react-icons/fi"
import { Container, Content, NewNote } from "./styles.js"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"

export function Home() {
  return (
    <Container>
      <Header></Header>

      <Content>
        <NewNote to="/new">
          <FiPlus />
          Criar Nota
        </NewNote>
        <Section title="Meus Filmes">
          <Note
            data={{
              title: "Interstellar",
              description: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
              tags: [
                { id: "1", name: "Drama" },
                { id: "2", name: "Familia" },
              ],
            }}
          />
        </Section>
      </Content>
    </Container>
  )
}
