import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { TitleAndSubtitle } from "../../components/TitleAndSubtitle";
import { getAmount } from "../../storage/amount/getAmount";
import { setAmount } from "../../storage/amount/setAmount";
import { removeFood } from "../../storage/food/removeFood";
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

  const { name, measure } = route.params as RouteParams;

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
        "Diminuir",
        "Não é possível diminuir a quantidade do alimento para um número menor que 0"
      );
    }

    setFoodAmount((state) => state - 1);
  }

  function handleRemoveHalfOnFoodAmount() {
    if (foodAmount <= 0.4) {
      return Alert.alert(
        "Diminuir",
        "Não é possível diminuir a quantidade do alimento para um número menor que 0"
      );
    }

    setFoodAmount((state) => state - 0.5);
  }

  function handleRemoveFiveOnFoodAmount() {
    if (foodAmount <= 4) {
      return Alert.alert(
        "Diminuir",
        "Não é possível diminuir a quantidade do alimento para um número menor que 0"
      );
    }

    setFoodAmount((state) => state - 5);
  }

  async function removeFoodCard() {
    try {
      await removeFood(name);
      navigate("home");
    } catch (error) {
      console.log(error);
      Alert.alert("Excluir", "Não foi possível excluir o alimento.");
    }
  }

  async function handleRemoveFood() {
    Alert.alert("Excluir", `Deseja excluir o alimento: ${name}?`, [
      {
        text: "Sim",
        onPress: () => removeFoodCard(),
      },

      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  async function handleSaveChanges() {
    await setAmount(foodAmount, name);

    navigate("home");
  }

  async function fetchFoodAmount() {
    try {
      const amount = await getAmount(name);
      setFoodAmount(amount);
    } catch (error) {
      throw new Error(
        `Não foi possível carregar a quantidade do alimento ${name}`
      );
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchFoodAmount();
    }, [])
  );

  return (
    <Container>
      <Header />

      <TitleAndSubtitle
        title={name}
        subtitle="Veja aqui a quantidade desse alimento"
      />
      <SecondTitleContainer>Quantidade</SecondTitleContainer>

      <FoodAmountContainer>
        <TextFoodAmount>{foodAmount}</TextFoodAmount>
        <TextFoodKgsOrUnid>{measure}</TextFoodKgsOrUnid>
      </FoodAmountContainer>

      <IconButtonAndTextContainer>
        <ButtonIcon
          icon="add"
          onPress={handleAddHalfOnFoodAmount}
          style={{ marginRight: 10 }}
        />

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

      <IconButtonAndTextContainer style={{ paddingBottom: 75 }}>
        <ButtonIcon icon="add" onPress={handleAddFiveOnFoodAmount} />

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
        <Button
          title="Excluir alimento"
          type="SECONDARY"
          onPress={handleRemoveFood}
        />
      </ButtonContainer>
    </Container>
  );
}
