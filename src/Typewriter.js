import React, { useEffect } from "react";
import TypewriterLib from "typewriter-effect/dist/core";

import "./Typewriter.css";

export default function TypewriterComponent() {
  useEffect(() => {
    new TypewriterLib("#statement", {
      strings:
        "I specialize in transforming design concepts into seamless <br /> and engaging web applications.",
      autoStart: true,
      cursor: null,
      delay: 50,
    });
  });

  return (
    <div className="TypewriterComponent">
      <p id="statement"></p>
    </div>
  );
}
