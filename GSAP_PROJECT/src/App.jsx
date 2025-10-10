import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

const App = () => {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rot, setRot] = useState(0);

  useGSAP(() => {
    gsap.to(imgRef.current, {
      x,
      y,
      rotate: rot,
      duration: 0.6,
      ease: "power2.out",
    });
  }, [x, y, rot]);

  const moveRandomly = () => {
    const wrap = wrapperRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    const maxX = Math.max(0, wrap.clientWidth - img.clientWidth);
    const maxY = Math.max(0, wrap.clientHeight - img.clientHeight);

    setX(gsap.utils.random(0, maxX));
    setY(gsap.utils.random(0, maxY));
    setRot(gsap.utils.random(-360, 360, 30));
  };

  return (
    <main>
      <h1>#KP Oli VAGAU</h1>

      <div
        ref={wrapperRef}
        onMouseEnter={moveRandomly}
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          backgroundImage:
            "url('/Nepal.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
        className="KPCHOR"
          ref={imgRef}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvWy8Th7VBmrQTwUWM9raORCc9CA0JDe6vNw&s"
          alt=""
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            willChange: "transform",
            cursor: "pointer",
          }}
          onMouseEnter={moveRandomly}
        />
      </div>
    </main>
  );
};

export default App;
