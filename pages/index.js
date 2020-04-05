import { styled } from "styletron-react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";

const Container = styled("div", {
  display: "flex",
  height: "100vh",
  position: "relative",
  flexDirection: "column",
});

export default () => (
  <Container>
    <Nav />
    <Hero />
    <About />
  </Container>
);
