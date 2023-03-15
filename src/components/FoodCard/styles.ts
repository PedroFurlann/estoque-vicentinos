import { Cookie } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 55px;
  background-color: ${(props) => props.theme.COLORS.BLUE_100};
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 12px;

  flex-direction: row;
  align-items: center;
`;

export const TextContainer = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Icon = styled(Cookie).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.GRAY_700,
  weight: "bold",
}))`
  margin-right: 20px;
`;
