import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  body {
  background-color: #111111;
    color: #ffffff;
  font-family: sans-serif;
}

`;

function App() {
  return (
    <div>
      <GlobalStyled />
      <h1>글로벌 스타일</h1>
    </div>
  );
}

export default App;
