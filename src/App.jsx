import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Input from "./Input";

const THEMES = {
  light: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  dark: {
    backgroundColor: "#121212",
    color: "#ffffff",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
  }
`;

function App() {
  const [theme, setTheme] = useState(THEMES["light"]);

  const handleSelectChange = (e) => {
    const nextThemeName = e.target.value;
    setTheme(THEMES[nextThemeName]);
  };

  return (
    <ThemeProvider theme={theme}>
      <select onChange={handleSelectChange}>
        <option value="light">라이트 모드</option>
        <option value="dark">다크 모드</option>
      </select>
      <GlobalStyle />
      <Input />
    </ThemeProvider>
  );
}

export default App;
