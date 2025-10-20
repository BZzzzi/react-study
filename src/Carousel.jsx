import { useEffect, useState } from "react";

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [index]);

  return (
    <div>
      <button onClick={handlePrev}>이전</button>
      <img src={images[index]} alt="carousel" />
      <button onClick={handleNext}>다음</button>
    </div>
  );
}

export default Carousel;
