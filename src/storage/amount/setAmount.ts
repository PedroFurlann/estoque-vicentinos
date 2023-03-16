import AsyncStorage from "@react-native-async-storage/async-storage";
import { AMOUNT_KEY } from "../storageConfig";

export async function playerAddByGroup(amount: number, name: string) {
  try {
    const storage = JSON.stringify(amount)

    await AsyncStorage.setItem(`${AMOUNT_KEY}-${name}`, storage)
    
  } catch (error) {
    throw new Error(`Não foi possível adicionar essa quantidade do alimento: ${name}`);
  }
}