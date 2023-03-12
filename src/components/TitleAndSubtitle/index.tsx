import { Container, SubtitleContainer, TitleContainer } from "./styles";

interface TitleAndSubtitleProps {
  title: string;
  subtitle: string;
}

export function TitleAndSubtitle({ title, subtitle }: TitleAndSubtitleProps) {
  return (
    <Container>
      <TitleContainer>
        {title}
      </TitleContainer>

      <SubtitleContainer>
        {subtitle}
      </SubtitleContainer>
    </Container>
  )
}