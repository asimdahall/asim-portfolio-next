import { styled } from "styletron-react";
import theme from "../../theme";

const Banner = styled("div", {
  height: "2rem",
  backgroundColor: theme.black,
  display: "flex",
  alignItems: "center",
});

const Icon = styled("img", {
  height: "1rem",
  width: "1rem",
  color: "white",
  marginLeft: "2rem",
});

export default () => (
  <Banner>
    <Icon src="https://github.githubassets.com/favicons/favicon-dark.svg" />
    <Icon src="https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico" />
    <Icon src="https://abs.twimg.com/errors/logo23x19@2x.png" />
  </Banner>
);
