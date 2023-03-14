import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  padding: 24px;
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.BLUE_200};
`

export const SecondTitleContainer = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  text-align: center;
  margin-top: 30px
`