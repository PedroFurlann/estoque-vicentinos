import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useTheme } from "styled-components/native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, ContentContainer, FoodIcon, Input } from "./styles";

export function RegisterFood() {
  const [food, setFood] = useState("");
  const [measure, setMeasure] = useState("");

  const { navigate } = useNavigation();

  function handleRegisterFood() {
    navigate("food", { name: food, measure: measure });
  }

  const { COLORS } = useTheme();

  return (
    <Container>
      <Header />
      <ContentContainer>
        <FoodIcon />
        <Input
          placeholder="Nome do alimento"
          placeholderTextColor={COLORS.GRAY_300}
          onChangeText={setFood}
        />
        <Input 
          placeholder="Digite unidade de medida: (Kg ou Unid)"
          placeholderTextColor={COLORS.GRAY_300}
          onChangeText={setMeasure}
        />
        <Button title="Adicionar Alimento" onPress={handleRegisterFood} />
      </ContentContainer>
    </Container>
  )
}