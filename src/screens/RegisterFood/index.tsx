import { useTheme } from "styled-components/native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, ContentContainer, FoodIcon, Input } from "./styles";

export function RegisterFood() {
  const { COLORS, FONT_SIZE } = useTheme();

  return (
    <Container>
      <Header />
      <ContentContainer>
        <FoodIcon />
        <Input
          placeholder="Nome do alimento"
          placeholderTextColor={COLORS.GRAY_300}
        />
        <Input 
          placeholder="Quantidade em Kg ou Unidade (pacotes)"
          placeholderTextColor={COLORS.GRAY_300}
        />
        <Button title="Adicionar Alimento" />
      </ContentContainer>
    </Container>
  )
}