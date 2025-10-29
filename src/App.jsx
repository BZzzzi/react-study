import styled, { keyframes } from "styled-components";

const placeholderGlow = keyframes`
  50% {
    opacity: 0.2;
  }
`;

export const PlaceholderItem = styled.div`
  background-color: #888888;
  height: 20px;
  margin: 8px 0;
`;

const Placeholder = styled.div`
  animation: ${placeholderGlow} 2s ease-in-out infinite;
`;

const A = styled(PlaceholderItem)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const B = styled(PlaceholderItem)`
  width: 400px;
`;

const C = styled(PlaceholderItem)`
  width: 200px;
`;

function App() {
  return (
    <div>
      <Placeholder>
        <A />
        <B />
        <C />
      </Placeholder>
    </div>
  );
}

export default App;
