import { Container, LogoImg } from "./styles";
import Logo from "../../assets/logo.png";

export function Header() {
  return (
    <Container>
      <LogoImg source={Logo} />
    </Container>
  )
}