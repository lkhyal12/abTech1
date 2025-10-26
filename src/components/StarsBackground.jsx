import React, { useEffect, useState } from "react";

const StarsBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    function generateStars() {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const starsLength = (windowWidth * windowHeight) / 10000;
      const starsArr = [];
      for (let i = 0; i < starsLength; i++) {
        starsArr.push({
          id: i,
          size: Math.random() * 4 + 2,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.5 + 0.5,
        });
      }
      console.log(starsArr);

      setStars(starsArr);
    }
    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {stars.map((star) => {
        return (
          <div
            className="star"
            key={star.id}
            style={{
              width: star.size + "px",
              height: star.size + "px",
              top: star.y + "%",
              left: star.x + "%",
              opacity: star.opacity,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default StarsBackground;
