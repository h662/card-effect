import { useEffect, useState } from "react";

const App = () => {
  const [xDeg, setXDeg] = useState(0);
  const [yDeg, setYDeg] = useState(0);
  const [opacityRate, setOpacityRate] = useState(0);

  const onMouseMoveImage = (e) => {
    setXDeg(e.clientY * (-1 / 5) + 20);
    setYDeg(e.clientX * (1 / 5) - 20);
    setOpacityRate(e.clientX / 320 + e.clientY / 320);
  };

  const onMouseLeaveImage = () => {
    setXDeg(0);
    setYDeg(0);
    setOpacityRate(0);
  };

  return (
    <div className="bg-red-100 min-h-full">
      <div
        className="inline-block relative"
        onMouseMove={onMouseMoveImage}
        onMouseLeave={onMouseLeaveImage}
        style={{
          transform: `perspective(200px) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`,
        }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/owl.png`} alt="owl" />
        <div
          className="absolute top-0 left-0 w-full h-full bg-white"
          style={{ opacity: opacityRate * 0.5 }}
        ></div>
      </div>
    </div>
  );
};

export default App;
