import { styled } from "styletron-react";
import Banner from "../Banner";
import theme from "../../theme";

const Container = styled("div", {
  position: "fixed",
});

const Nav = styled("nav", () => ({
  display: "flex",
  textTransform: "capitalize",
  justifyContent: "flex-start",
  width: "100vw",
  padding: "0.3rem 0",
  backgroundColor: theme.backgroundColor,
  borderBottom: theme.normalBorder,
}));

const NavItem = styled("div", {
  color: theme.primaryColor,
  padding: "1rem",
  marginLeft: "1rem",
  cursor: "pointer",
  borderRadius: "6px",
  ":hover": {
    backgroundColor: "#DDD",
  },
});

export default () => (
  <Container>
    <Banner />
    <Nav>
      <NavItem className="navItem">Home</NavItem>
      <NavItem className="navItem">About</NavItem>
      <NavItem className="navItem">Projects</NavItem>
      <NavItem className="navItem">Contact</NavItem>
    </Nav>
  </Container>
);
