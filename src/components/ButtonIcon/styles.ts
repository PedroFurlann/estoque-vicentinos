import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

interface ButtonIconProps {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  margin-left: 12px;

  justify-content: center;
  align-items: center;

`;

export const Icon = styled(MaterialIcons).attrs<ButtonIconProps>(({ theme, type }) => ({
  size: 32,
  color: type === 'PRIMARY' ? theme.COLORS.BLUE_100 : theme.COLORS.RED,
}))``;