import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';
import theme from './src/theme';
import { Loading } from './src/components/Loading';
import { RegisterFood } from './src/screens/RegisterFood';
import { Food } from './src/screens/Food';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Food /> : <Loading /> }
    </ThemeProvider>
  );
}  
