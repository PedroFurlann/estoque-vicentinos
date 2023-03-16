import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";
import { Button } from "../../components/Button";
import { EmptyList } from "../../components/EmptyList";
import { FoodCard } from "../../components/FoodCard";
import { Header } from "../../components/Header";
import { TitleAndSubtitle } from "../../components/TitleAndSubtitle";
import { getFood } from "../../storage/food/getFood";
import { FoodProps } from "../../storage/food/setNewFood";
import { Container } from "./styles";

export function Home() {
  const [foodInfo, setFoodInfo] = useState<FoodProps[]>([]);

  const { navigate } = useNavigation();

  function handleGoToFood(name: string, measure: string) {
    navigate("food", { name, measure });
  }

  function handleGoToRegisterFood() {
    navigate("register");
  }

  async function fetchFoods() {
    try {
      const data = await getFood();
      setFoodInfo(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Alimentos", "Não foi possível carregas os alimentos");
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchFoods();
    }, [])
  );

  return (
    <Container>
      <Header />
      <TitleAndSubtitle
        title="Alimentos cadastrados"
        subtitle="Visualize aqui os alimentos cadastrados"
      />
      <FlatList
        data={foodInfo}
        keyExtractor={(item) => item.food}
        renderItem={({ item }) => (
          <FoodCard
            text={item.food}
            onPress={() => handleGoToFood(item.food, item.measure)}
          />
        )}
        contentContainerStyle={foodInfo.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList message="Não possuem alimentos cadastradas! Cadastre o alimento clicando no botão abaixo." />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Cadastrar Alimento" onPress={handleGoToRegisterFood} />
    </Container>
  );
}
