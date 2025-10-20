import Carousel from "./Carousel";

function App() {
  const images = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
  ];

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

export default App;
