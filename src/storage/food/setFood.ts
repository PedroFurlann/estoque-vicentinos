import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_KEY } from "../storageConfig";
import { getFood } from "./getFood";
export interface FoodProps {
  name: string;
  measure: string
}

export async function setFood(nameAndMeasure: FoodProps) {
  try {
    const storedFood = await getFood();

    const foodNameAlreadyTaken = storedFood.includes(nameAndMeasure);

    if (foodNameAlreadyTaken) {
      throw new Error('Já existe um alimento com esse nome!')
    }

    const storage = JSON.stringify([...storedFood, nameAndMeasure]);

    await AsyncStorage.setItem(FOOD_KEY, storage);

  } catch (error) {
      throw new Error('Não foi possível cadastrar o alimento')
  }

}