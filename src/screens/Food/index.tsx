import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { TitleAndSubtitle } from "../../components/TitleAndSubtitle";
import {
  ButtonContainer,
  Container,
  FoodAmountContainer,
  SecondTitleContainer,
  TextFoodAmount,
  TextFoodKgsOrUnid,
} from "./styles";

export function Food() {
  const [foodAmount, setFoodAmount] = useState(0);

  const { navigate } = useNavigation();

  function handleAddOneOnFoodAmount() {
    setFoodAmount((state) => state + 1);
  }

  function handleRemoveOneOnFoodAmount() {
    if (foodAmount === 0) {
      return Alert.alert(
        "Adicionar e Remover",
        "Não é possível diminuir mais a quantidade do alimento"
      );
    }

    setFoodAmount((state) => state - 1);
  }

  function handleSaveChanges() {
    navigate("home");
  }

  return (
    <Container>
      <Header />

      <TitleAndSubtitle title="lorem ipsum" subtitle="lorem ipsum" />
      <SecondTitleContainer>Quantidade</SecondTitleContainer>

      <FoodAmountContainer>
        <ButtonIcon
          icon="add"
          style={{ marginRight: 12 }}
          onPress={handleAddOneOnFoodAmount}
        />
        <TextFoodAmount>{foodAmount}</TextFoodAmount>
        <TextFoodKgsOrUnid>Unid.</TextFoodKgsOrUnid>
        <ButtonIcon
          icon="remove"
          type="SECONDARY"
          onPress={handleRemoveOneOnFoodAmount}
        />
      </FoodAmountContainer>

      <ButtonContainer>
        <Button title="Salvar" style={{ marginRight: 16 }} onPress={handleSaveChanges} />
        <Button title="Excluir alimento" type="SECONDARY" />
      </ButtonContainer>
    </Container>
  );
}
