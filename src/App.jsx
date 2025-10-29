import styled from "styled-components";
import Button from "./Button";

function TermsOfService({ className }) {
  return (
    <div className={className}>
      <h1>㈜코드잇 서비스 이용약관</h1>
      <p>
        환영합니다.
        <br />
        Codeit이 제공하는 서비스를 이용해주셔서 감사합니다. 서비스를
        이용하시거나 회원으로 가입하실 경우 본 약관에 동의하시게 되므로, 잠시
        시간을 내셔서 주의 깊게 살펴봐 주시기 바랍니다.
      </p>
      <h2>제 1 조 (목적)</h2>
      <p>
        본 약관은 ㈜코드잇이 운영하는 기밀문서 관리 프로그램인 Codeit에서
        제공하는 서비스를 이용함에 있어 이용자의 권리, 의무 및 책임사항을
        규정함을 목적으로 합니다.
      </p>
    </div>
  );
}

const StyledTermsOfService = styled(TermsOfService)`
  background-color: #ededed;
  border-radius: 8px;
  padding: 16px;
  margin: 40px auto;
  width: 400px;
`;

const SubmitButton = styled(Button)`
  background-color: #de117d;
  display: block;
  margin: 0 auto;
  width: 200px;

  &:hover {
    background-color: #f5070f;
  }
`;

function App() {
  return (
    <div>
      <StyledTermsOfService />
      <SubmitButton>계속하기</SubmitButton>
    </div>
  );
}

export default App;
