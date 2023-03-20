import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";
import { Button } from "../../components/Button";
import { EmptyList } from "../../components/EmptyList";
import { FoodCard } from "../../components/FoodCard";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { TitleAndSubtitle } from "../../components/TitleAndSubtitle";
import { getFood } from "../../storage/food/getFood";
import { FoodProps } from "../../storage/food/setNewFood";
import { Container } from "./styles";

export function Home() {
  const [foodInfo, setFoodInfo] = useState<FoodProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { navigate } = useNavigation();

  function handleGoToFood(food: string, measure: string) {
    navigate("food", { name: food, measure });
  }

  function handleGoToRegisterFood() {
    navigate("register");
  }

  async function fetchFoods() {
    try {
      setIsLoading(true);
      const data = await getFood();
      setFoodInfo(data);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Alimentos",
        "Não foi possível carregas a lista de alimentos"
      );
    } finally {
      setIsLoading(false);
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
        title="Alimentos"
        subtitle="Visualize aqui os alimentos cadastrados"
      />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={foodInfo}
          keyExtractor={(item) => item.food}
          renderItem={({ item }) => (
            <FoodCard
              text={item.food}
              onPress={() => handleGoToFood(item.food, item.measure)}
            />
          )}
          contentContainerStyle={[
            { paddingBottom: 100 },
            foodInfo.length === 0 && { flex: 1 },
          ]}
          ListEmptyComponent={() => (
            <EmptyList message="Nenhum alimento cadastrado! Cadastre alimentos clicando no botão abaixo." />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Button
        title="Cadastrar Alimento"
        onPress={handleGoToRegisterFood}
        style={{ marginTop: 24 }}
      />
    </Container>
  );
}
