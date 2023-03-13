import { useTheme } from "styled-components/native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, ContentContainer, FoodIcon, Input } from "./styles";

export function RegisterFood() {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Header />
      <ContentContainer>
        <FoodIcon />
        <Input
          placeholder="Nome do alimento"
          placeholderTextColor={COLORS.WHITE}
        />
        <Button title="Adicionar Alimento" />
      </ContentContainer>
    </Container>
  )
}