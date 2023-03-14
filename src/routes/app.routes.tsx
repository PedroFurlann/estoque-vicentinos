import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Food } from "../screens/Food";
import { Home } from "../screens/Home";
import { RegisterFood } from "../screens/RegisterFood";


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="register" component={RegisterFood} />

      <Screen name="food" component={Food} />
    </Navigator>
  );
}