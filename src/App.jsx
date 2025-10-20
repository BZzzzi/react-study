import { useEffect, useState } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(date);
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{date.toTimeString()}</div>;
}

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>보이기</button>
      <button onClick={() => setShow(false)}>숨기기</button>
      {show && <Clock />}
    </div>
  );
}

export default App;
