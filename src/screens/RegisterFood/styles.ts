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
  margin-bottom: 22px;
`;

export const Input = styled.TextInput`
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

export const ButtonContainer = styled.View`
  flex-direction: row;
`


