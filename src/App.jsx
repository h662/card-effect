import { useState } from "react";

const App = () => {
  const [xDeg, setXDeg] = useState();
  const [yDeg, setYDeg] = useState();

  const onMouseMoveImage = (e) => {
    setXDeg(e.clientY * (-1 / 5) + 20);
    setYDeg(e.clientX * (1 / 5) - 20);
  };

  return (
    <div className="bg-red-100 min-h-full">
      <img
        onMouseMove={onMouseMoveImage}
        style={{
          transform: `perspective(200px) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`,
        }}
        src={`${process.env.PUBLIC_URL}/images/owl.png`}
        alt="owl"
      />
    </div>
  );
};

export default App;
