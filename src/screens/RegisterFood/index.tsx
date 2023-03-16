import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components/native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { setNewFood } from "../../storage/food/setNewFood";
import { Container, ContentContainer, FoodIcon, Input } from "./styles";

export function RegisterFood() {
  const [food, setFood] = useState("");
  const [measure, setMeasure] = useState("");

  const { navigate } = useNavigation();

  
  async function handleRegisterFood() {
    try {
      if(food.trim().length === 0) {
        return Alert.alert('Alimento vazio', 'Por favor, informe o nome do alimento');
      }

      if (measure.trim().length === 0) {
        return Alert.alert('Medida vazia', 'Por favor, informe a unidade de medida (Kg ou Unid)')
      }

      await setNewFood({ food, measure });
      navigate("food", { name: food, measure });
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Novo Alimento", "Não foi possível registrar o alimento");
        console.log(error)
      } 
    }
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