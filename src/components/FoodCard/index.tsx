import { Container, Icon, TextContainer } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface FoodCardProps extends TouchableOpacityProps {
  text: string;
}

export function GroupCard({ text, ...props }: FoodCardProps, ){
  return (
    <Container {...props}>
      <Icon />
      <TextContainer>
        {text}
      </TextContainer>
    </Container>
  )
}