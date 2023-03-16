import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_KEY } from "../storageConfig";
import { FoodProps } from "./setNewFood";


export async function getFood() {
  try {
    const storage = await AsyncStorage.getItem(FOOD_KEY)

    const groups: FoodProps[] = storage ? JSON.parse(storage) : [];

    return groups;
    
  } catch (error) {
    throw new Error("Não foi possível carregar o nome dos alimentos")
  }
}