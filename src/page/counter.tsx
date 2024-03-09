import React, { useState } from "react";
import { Button } from "@mui/material";
import { useSpring, animated } from "react-spring";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => setCount((prevCount) => prevCount + 1);
  const handleDecrement = () =>
    setCount((prevCount) => Math.max(0, prevCount - 1));
  const handleReset = () => setCount(0);

  const springProps = useSpring({
    background: `linear-gradient(to right, #e98230 ${count * 1}%, #90c5d5 ${
      count * 1
    }%)`,
    config: { duration: 500 },
  });

  return (
    <div className=" h-50  p-5">
      <animated.div
        style={{
          ...springProps,
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
          boxShadow: "  0 0 10px rgba(0, 0, 0, 60%)",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <h2> {count}</h2>
        <h5 className="">Counter </h5>
        <div style={{ display: "flex", gap: "8px" }}>
          <Button variant="contained" color="primary" onClick={handleIncrement}>
            +
          </Button>
          <Button variant="contained" color="warning" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="contained" color="primary" onClick={handleDecrement}>
            -
          </Button>
        </div>
      </animated.div>
    </div>
  );
};

export default Counter;
