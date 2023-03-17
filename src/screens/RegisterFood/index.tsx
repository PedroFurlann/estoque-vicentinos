import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components/native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { TitleAndSubtitle } from "../../components/TitleAndSubtitle";
import { setNewFood } from "../../storage/food/setNewFood";
import { ButtonContainer, Container, ContentContainer, Input } from "./styles";

export function RegisterFood() {
  const [food, setFood] = useState("");
  const [measure, setMeasure] = useState("");

  const { navigate } = useNavigation();

  function handleGoToHome() {
    navigate("home");
  }

  async function handleRegisterFood() {
    try {
      if (food.trim().length === 0) {
        return Alert.alert(
          "Alimento vazio",
          "Por favor, informe o nome do alimento"
        );
      }

      if (measure.trim().length === 0) {
        return Alert.alert(
          "Medida vazia",
          "Por favor, informe a unidade de medida (Kg ou Unid)"
        );
      }

      await setNewFood({ food, measure });
      navigate("food", { name: food, measure });
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Novo Alimento", "Já existe um alimento com esse nome!");
        console.log(error);
      }
    }
  }

  const { COLORS } = useTheme();

  return (
    <Container>
      <Header />
      <TitleAndSubtitle
        title="Registrar"
        subtitle="Registre aqui seu alimento"
      />
      <ContentContainer>
        <Input
          placeholder="Nome do alimento"
          placeholderTextColor={COLORS.GRAY_300}
          onChangeText={setFood}
        />
        <Input
          placeholder="Unidade de medida: (Kg, Unid, Litros, etc...)"
          placeholderTextColor={COLORS.GRAY_300}
          onChangeText={setMeasure}
        />
      </ContentContainer>
      <ButtonContainer>
        <Button
          title="Registrar Alimento"
          onPress={handleRegisterFood}
          style={{ marginRight: 16 }}
        />
        <Button title="Voltar" type="SECONDARY" onPress={handleGoToHome} />
      </ButtonContainer>
    </Container>
  );
}
