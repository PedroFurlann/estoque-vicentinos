import { useState } from "react";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { TitleAndSubtitle } from "../../components/TitleAndSubtitle";
import { ButtonContainer, Container, FoodAmountContainer, SecondTitleContainer, TextFoodAmount, TextFoodKgsOrUnid } from "./styles";

export function Food() {
  const [foodAmount, setFoodAmount] = useState(400);

  return (
    <Container>
      <Header />

      <TitleAndSubtitle title="lorem ipsum" subtitle="lorem ipsum" />
      <SecondTitleContainer>Quantidade</SecondTitleContainer>

    <FoodAmountContainer>
      <ButtonIcon icon="add" 
        style={{ marginRight: 12 }}
      />
      <TextFoodAmount>{foodAmount}</TextFoodAmount>
      <TextFoodKgsOrUnid>Unid.</TextFoodKgsOrUnid>
      <ButtonIcon icon="remove" type="SECONDARY" />
    </FoodAmountContainer>  

    <ButtonContainer>
      <Button title="Salvar" style={{ marginRight: 16 }}/>
      <Button title="Excluir alimento" type="SECONDARY"/>
    </ButtonContainer>
    </Container>
  )
}