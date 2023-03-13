import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.COLORS.BLUE_200};
`;

export const LoadingIcon = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.BLUE_100
}))``;