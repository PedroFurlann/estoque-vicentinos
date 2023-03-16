import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_KEY } from "../storageConfig";
import { getFood } from "./getFood";
export interface FoodProps {
  food: string;
  measure: string
}

export async function setNewFood(nameAndMeasure: FoodProps) {
  try {
    const storedFood = await getFood();

    const foodNameALreadyTaken = storedFood.filter(item => item.food === nameAndMeasure.food);

    if (foodNameALreadyTaken.length > 0) {
      throw new Error('Esse alimeto já existe');
    }

    const storage = JSON.stringify([...storedFood, nameAndMeasure]);

    await AsyncStorage.setItem(FOOD_KEY, storage);

  } catch (error) {
      throw new Error('Não foi possível cadastrar o alimento')
      console.log(error)
  }

}