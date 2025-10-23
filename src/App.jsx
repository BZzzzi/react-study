import { useContext, useState } from "react";
import MyContext from "./MyContext";

function E() {
  const value = useContext(MyContext);

  return (
    <div>
      <p>컴포넌트 E</p>
      <p>E에서 value: {value}</p>
    </div>
  );
}

function D() {
  return (
    <div>
      <p>컴포넌트 D</p>
      <E />
    </div>
  );
}

function C() {
  const value = useContext(MyContext);

  return (
    <div>
      <p>컴포넌트 C</p>
      <p>C에서 value: {value}</p>
      <D />
    </div>
  );
}

function B() {
  return (
    <div>
      <p>컴포넌트 B</p>
      <C />
    </div>
  );
}

function A() {
  return (
    <div>
      <p>컴포넌트 A</p>
      <B />
    </div>
  );
}

function App() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <MyContext.Provider value={value}>
        <p>App 컴포넌트</p>
        <p>App의 value: {value}</p>
        <A />
        <button onClick={() => setValue(value + 1)}>value 증가</button>
      </MyContext.Provider>
    </div>
  );
}

export default App;
