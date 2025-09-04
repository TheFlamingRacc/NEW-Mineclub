"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const colorsRef = useRef([
    { r: 81, g: 11, b: 167 }, // #510BA7
    { r: 198, g: 167, b: 215 }, // #C6A7D7
    { r: 152, g: 99, b: 231 }, // #9863E7
  ]);

  const addColor = (hex) => {
    const rgb = hexToRgb(hex);
    if (rgb) {
      colorsRef.current.push(rgb);
    }
  };

  const hexToRgb = (hex) => {
    hex = hex.replace(/^#/, "");
    if (hex.length !== 6) return null;
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let moveCounter = 0; // Лічильник рухів миші

    const createInkParticles = (x, y) => {
      // Зміщення в діапазоні від -20 до +20 пікселів по X та Y
      const offsetX = (Math.random() - 0.5) * 40;
      const offsetY = (Math.random() - 0.5) * 40;
      for (let i = 0; i < 1; i++) {
        particles.current.push(new Particle(x + offsetX, y + offsetY));
      }
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 50 + 100;
        // Збільшуємо швидкість до [-2, 2]
        this.speedX = Math.random() * 3 - 2;
        this.speedY = Math.random() * 3 - 2;
        this.life = Math.random() * 100 + 15;
        this.maxLife = this.life;
        const colors = colorsRef.current;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        this.opacity = this.life / this.maxLife;
      }

      draw(ctx, index, total) {
        if (index >= total - 2) {
          // Для останніх двох частинок створюємо градієнт
          const gradient = ctx.createRadialGradient(
            this.x,
            this.y,
            this.size * 0.1,
            this.x,
            this.y,
            this.size
          );
          const rgbaColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, `;
          gradient.addColorStop(0, rgbaColor + this.opacity + ")");
          gradient.addColorStop(1, rgbaColor + "0)");
          ctx.fillStyle = gradient;
        } else {
          ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const handleParticles = () => {
      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        p.update();
        p.draw(ctx, i, particles.current.length);
        if (p.life <= 0) {
          particles.current.splice(i, 1);
          i--;
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";
      handleParticles();
      requestAnimationFrame(animate);
    };

    animate();

    const mouseMoveHandler = (e) => {
      moveCounter++;
      if (moveCounter % 2 === 0) {
        createInkParticles(e.pageX, e.pageY);
      }
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <>
      <canvas
        id="inkCanvas"
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          backgroundColor: "rgb(3, 1, 8)",
          zIndex: -2,
        }}
      />
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(9, 2, 28, 0.1)",
          backdropFilter: "blur(25px)",
          WebkitBackdropFilter: "blur(25px)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
