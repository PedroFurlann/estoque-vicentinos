import { Header } from "../../components/Header";
import { TitleAndSubtitle } from "../../components/TitleAndSubtitle";
import { Container, SecondTitleContainer } from "./styles";

export function Food() {
  return (
    <Container>
      <Header />

      <TitleAndSubtitle title="lorem ipsum" subtitle="lorem ipsum" />
      <SecondTitleContainer>Quantidade</SecondTitleContainer>
    </Container>
  )
}