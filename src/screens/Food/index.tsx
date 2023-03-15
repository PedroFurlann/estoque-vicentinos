import { useNavigation, useRoute } from "@react-navigation/native";
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
  IconButtonAndTextContainer,
  SecondTitleContainer,
  TextFoodAmount,
  TextFoodKgsOrUnid,
  TextForExplainIconButton,
} from "./styles";

export interface RouteParams {
  name: string;
  measure: string;
}

export function Food() {
  const [foodAmount, setFoodAmount] = useState(0);

  const route = useRoute();

  const { name, measure } = route.params as RouteParams

  const { navigate } = useNavigation();

  function handleAddOneOnFoodAmount() {
    setFoodAmount((state) => state + 1);
  }

  function handleAddHalfOnFoodAmount() {
    setFoodAmount((state) => state + 0.5);
  }

  function handleAddFiveOnFoodAmount() {
    setFoodAmount((state) => state + 5);
  }

  function handleRemoveOneOnFoodAmount() {
    if (foodAmount <= 0.9) {
      return Alert.alert(
        "Adicionar e Remover",
        "Não é possível diminuir mais a quantidade do alimento para um número menor que zero"
      );
    }

    setFoodAmount((state) => state - 1);
  }

  function handleRemoveHalfOnFoodAmount() {
    if (foodAmount <= 0.4) {
      return Alert.alert(
        "Adicionar e Remover",
        "Não é possível diminuir mais a quantidade do alimento para um número menor que zero"
      );
    }

    setFoodAmount((state) => state - 0.5);
  }

  function handleRemoveFiveOnFoodAmount() {
    if (foodAmount <= 4) {
      return Alert.alert(
        "Adicionar e Remover",
        "Não é possível diminuir mais a quantidade do alimento para um número menor que zero"
      );
    }

    setFoodAmount((state) => state - 5);
  }

  function handleSaveChanges() {
    navigate("home");
  }

  return (
    <Container>
      <Header />

      <TitleAndSubtitle title={name} subtitle="Veja aqui a quantidade de alimentos" />
      <SecondTitleContainer>Quantidade</SecondTitleContainer>

      <FoodAmountContainer>
        <TextFoodAmount>{foodAmount}</TextFoodAmount>
        <TextFoodKgsOrUnid>{measure}.</TextFoodKgsOrUnid>
      </FoodAmountContainer>

      <IconButtonAndTextContainer>
        <ButtonIcon icon="add" onPress={handleAddHalfOnFoodAmount} style={{ marginRight: 10 }}/>

        <TextForExplainIconButton>0.5 em 0.5</TextForExplainIconButton>

        <ButtonIcon
          icon="remove"
          type="SECONDARY"
          onPress={handleRemoveHalfOnFoodAmount}
        />
      </IconButtonAndTextContainer>

      <IconButtonAndTextContainer>
        <ButtonIcon icon="add" onPress={handleAddOneOnFoodAmount} />

        <TextForExplainIconButton style={{ marginLeft: 19, marginRight: 19 }}>
          1 em 1
        </TextForExplainIconButton>

        <ButtonIcon
          icon="remove"
          type="SECONDARY"
          onPress={handleRemoveOneOnFoodAmount}
        />
      </IconButtonAndTextContainer>

      <IconButtonAndTextContainer style={{ paddingBottom: 80 }}>
        <ButtonIcon
          icon="add"
          onPress={handleAddFiveOnFoodAmount}
        />

        <TextForExplainIconButton style={{ marginLeft: 19, marginRight: 19 }}>
          5 em 5
        </TextForExplainIconButton>

        <ButtonIcon
          icon="remove"
          type="SECONDARY"
          onPress={handleRemoveFiveOnFoodAmount}
        />
      </IconButtonAndTextContainer>
      <ButtonContainer>
        <Button
          title="Salvar"
          style={{ marginRight: 16 }}
          onPress={handleSaveChanges}
        />
        <Button title="Excluir alimento" type="SECONDARY" />
      </ButtonContainer>
    </Container>
  );
}
