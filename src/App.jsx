import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const focusRef = useRef(null);

  const submit = (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    console.log({ username, password });
  };

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

  return (
    <form action={submit}>
      <input ref={focusRef} name="username" />
      <input name="password" type="password" />
      <button type="submit">확인</button>
    </form>
  );
}

export default App;
