import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

const Container = styled.div`
  margin: 0 auto;
  width: 400px;

  ${Input} {
    box-sizing: border-box;
    display: block;
    margin: 8px 0 16px;
    width: 100%;
  }
`;

function App() {
  return (
    <Container>
      <h1>로그인</h1>
      <label for="email">이메일</label>
      <Input
        type="email"
        id="email"
        class="input"
        placeholder="styled@codeit.kr"
      />
      <label for="password">비밀번호</label>
      <Input
        type="password"
        id="password"
        class="input"
        placeholder="비밀번호"
      />
      <Button>Hello Styled!</Button>
    </Container>
  );
}

export default App;
