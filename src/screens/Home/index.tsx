import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { TitleAndSubtitle } from "../../components/TitleAndSubtitle";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <TitleAndSubtitle title="Alimentos cadastrados" subtitle="Visualize aqui os alimentos cadastrados" />

      <Button title="Cadastrar Alimento" />
    </Container>
  )
}