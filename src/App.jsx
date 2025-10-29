import { ThemeProvider } from "styled-components";
import Button from "./Button";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState({
    primaryColor: "#1da1f2",
  });

  const handleColorChange = (e) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      primaryColor: e.target.value,
    }));
  };

  return (
    <ThemeProvider theme={theme}>
      <select value={theme.primaryColor} onChange={handleColorChange}>
        <option value="#1da1f2">blue</option>
        <option value="#ffa800">yellow</option>
        <option value="#f5005c">red</option>
      </select>
      <Button>확인</Button>
    </ThemeProvider>
  );
}

export default App;
