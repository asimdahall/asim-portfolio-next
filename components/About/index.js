import { styled } from "styletron-react";
import theme from "../../theme";

const AboutContainer = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
  padding: "0 4rem",
  backgroundColor: theme.backgroundColor,
  height: "50%",
});

const Title = styled("h2", {
  fontSize: "3rem",
  color: theme.primaryColor,
  position: "relative",
  marginBottom: "2rem",
  "::after": {
    content: "''",
    width: "50%",
    position: "absolute",
    bottom: "-0.4rem",
    height: "4px",
    backgroundColor: theme.black,
    left: 0,
  },
});
const Content = styled("div", {
  fontSize: "1.5rem",
  lineHeight: "2rem",
  color: theme.primaryColor,
  textAlign: "left",
});

export default () => (
  <AboutContainer>
    <Title>About Me</Title>
    <Content>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Content>
  </AboutContainer>
);
