import { Container, Icon, TextContainer } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface FoodCardProps extends TouchableOpacityProps {
  text: string;
}

export function FoodCard({ text, ...props }: FoodCardProps, ){
  return (
    <Container {...props}>
      <Icon />
      <TextContainer>
        {text}
      </TextContainer>
    </Container>
  )
}