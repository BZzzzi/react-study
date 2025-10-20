import { useState } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = () => {
    setTimeout(() => {
      setCount1(count1 + 1);
    }, 2000);
  };

  const handleClick2 = () => {
    setTimeout(() => {
      setCount2((pre) => pre + 1);
    }, 2000);
  };

  return (
    <div>
      <button onClick={handleClick1}>{count1}</button>
      <button onClick={handleClick2}>{count2}</button>
    </div>
  );
}

export default App;
