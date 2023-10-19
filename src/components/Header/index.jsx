import { Container, Profile, Search, Brand } from "./styles"
import { FiSearch } from "react-icons/fi"
import { Input } from "../Input"

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/loren175.png" alt="Foto do usuario" />
        <div>
          <strong>Rafa</strong>
          <span>sair</span>
        </div>
      </Profile>

      <Search>
        <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />
      </Search>

      <Brand>
        <h1>RocketMovies</h1>
      </Brand>
    </Container>
  )
}
