import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_KEY } from "../storageConfig";
import { getFood } from "./getFood";
import { FoodProps } from "./setNewFood";

export async function removeFood(foodDeleted: string) {
  try {
    const storedFoods = await getFood();
    const foodsWithoutDeletedOne = storedFoods.filter(item => item.food !== foodDeleted);

    await AsyncStorage.setItem(FOOD_KEY, JSON.stringify(foodsWithoutDeletedOne));

  } catch (error) {
    throw new Error('Não foi possível deletar o Alimento!');
    console.log(error);
  }
}