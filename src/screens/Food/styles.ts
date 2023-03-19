import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  padding: 24px;
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.BLUE_200};
`;

export const SecondTitleContainer = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  text-align: center;
  margin-top: 40px;
  margin-bottom: 12px;
`;

export const FoodAmountContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

export const TextFoodAmount = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const TextFoodKgsOrUnid = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-left: 12px;
  margin-top: 8px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
`;

export const IconButtonAndTextContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const TextForExplainIconButton = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const ContentContainer = styled.View`
  flex: 1;
`

