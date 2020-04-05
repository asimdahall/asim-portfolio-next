import { styled } from "styletron-react";
import theme from "../../theme";

const Hero = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.primaryColor,
  flexDirection: "column",
  backgroundColor: theme.backgroundColor,
  borderBottom: theme.normalBorder,
  marginTop: "2rem",
  height: "50%",
});

const Title = styled("h1", {
  fontSize: "3rem",
  textTransform: "uppercase",
});

const Subtitle = styled("h3", {
  fontSize: "2rem",
  marginTop: "1rem",
});

export default () => (
  <Hero>
    <Title>Hello I am asim dahal</Title>
    <Subtitle>Tech Enthusiast | Software Developer</Subtitle>
  </Hero>
);
