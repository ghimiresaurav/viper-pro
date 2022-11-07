import { ThemeProvider } from "@emotion/react";
import "./App.css";
import theme from "./config/theme";
import Chat from "./pages/Chat";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Chat />
    </ThemeProvider>
  );
}

export default App;
