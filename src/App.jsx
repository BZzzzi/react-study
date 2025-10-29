import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "styled-components";

const theme = {
  primaryColor: "#1da1f2",
  secondaryColor: "#f5070f",
};

function ThemeSettings() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h2>현재 테마 미리보기</h2>
      <div
        style={{
          width: "80px",
          height: "80px",
          backgroundColor: theme.primaryColor,
          borderRadius: "8px",
        }}
      />
      <p>Primary Color: {theme.primaryColor}</p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ThemeSettings />
    </ThemeProvider>
  );
}

export default App;
