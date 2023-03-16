import { Hamburger } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  padding: 24px;
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.BLUE_200};
`;

export const ContentContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin-top: 100px;
`;

export const Input = styled.TextInput`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_500};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const FoodIcon = styled(Hamburger).attrs(({ theme }) => ({
  size: 72,
  color: theme.COLORS.GRAY_700,
  weight: "bold"
}))
`
  align-self: center;
  margin-bottom: 16px;
`;
