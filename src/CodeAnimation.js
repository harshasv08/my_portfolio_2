import './CodeAnimation.css';
import React, { useEffect, useRef } from "react";

const CodeAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize); // Number of columns
    const drops = Array(columns).fill(1); // Initial Y positions for each column

    // Binary characters (1 and 0)
    const binaryChars = ["1", "0"];

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Semi-transparent black background for fading effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0"; // Bright green color for binary characters
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = binaryChars[Math.floor(Math.random() * binaryChars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        // Randomly reset drop or move it down
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0; // Reset drop to the top
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 20);

    // Redirect to home page after 5 seconds
    const timeout = setTimeout(() => {
      window.location.href = "/home"; // Redirect to the home page
    }, 5000);

    // Cleanup on unmount
    return () => {
      clearInterval(interval);
      clearTimeout(timeout); // Cleanup timeout
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: "block" }} />;
};

export default CodeAnimation;
