import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_KEY } from "../storageConfig";
import { getFood } from "./getFood";

export async function setFood(food: string) {
  try {
    const storedFood = await getFood();

    const foodNameAlreadyTaken = storedFood.includes(food);

    if (foodNameAlreadyTaken) {
      throw new Error('Já existe um alimento com esse nome!')
    }

    const storage = JSON.stringify([...storedFood, food]);

    await AsyncStorage.setItem(FOOD_KEY, storage);

  } catch (error) {
      throw new Error('Não foi possível cadastrar o alimento')
  }

}