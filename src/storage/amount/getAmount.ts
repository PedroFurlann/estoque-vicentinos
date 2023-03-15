import AsyncStorage from "@react-native-async-storage/async-storage";
import { AMOUNT_KEY } from "../storageConfig";

export async function getAmount(food: string) {
  try {
    const storage = await AsyncStorage.getItem(`${AMOUNT_KEY}-${food}`)

    const amount = storage ? JSON.parse(storage) : 0;

    return amount;

  } catch (error) {
    throw new Error("Não foi possível carreagar a quantidade de alimentos")
  }
}