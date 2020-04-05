import { Provider as StyletronProvider } from "styletron-react";
import { styletron, debug } from "../styletron";
import "./styles.css";

const MyApp = ({ Component, pageProps }) => (
  <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
    <Component {...pageProps} />{" "}
  </StyletronProvider>
);
export default MyApp;
