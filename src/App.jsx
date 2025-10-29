import styled from "styled-components";

const SIZES = {
  large: 24,
  medium: 20,
  small: 16,
};

const boxShadow = css`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const borderRadius = css`
  ${({ round }) => (round ? `9999px` : `3px`)};
`;

const fontSize = css`
  ${({ size }) => SIZES[size] ?? SIZES["medium"]}px;
`;

const StyledButton = styled.button`
  background-color: #6750a4;
  border: none;
  color: #ffffff;
  padding: 16px;
  ${borderRadius}
  ${fontSize}
  ${boxShadow}

  &:hover,
  &:active {
    background-color: #463770;
  }
`;

const Input = styled.input`
  border: 2px solid ${({ error }) => (error ? `#f44336` : `#eeeeee`)};
  outline: none;
  padding: 16px;
  ${borderRadius}
  ${fontSize}
  ${boxShadow}

  &:focus {
    border-color: ${({ error }) => (error ? `#f44336` : `#7760b4`)};
`;

function App() {
  return (
    <div>
      <StyledButton>계속하기</StyledButton>
      <Input />
    </div>
  );
}

export default App;
