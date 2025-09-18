"use client";

import React, { useEffect, useRef } from "react";

const RippleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Create grid of points
    const gridSpacing = 30;
    const points: {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      velocity: { x: number; y: number };
    }[] = [];

    for (let x = 0; x < canvas.width + gridSpacing; x += gridSpacing) {
      for (let y = 0; y < canvas.height + gridSpacing; y += gridSpacing) {
        points.push({
          x,
          y,
          baseX: x,
          baseY: y,
          velocity: { x: 0, y: 0 },
        });
      }
    }

    // Ripple animation parameters
    let ripples: {
      x: number;
      y: number;
      radius: number;
      strength: number;
      life: number;
      maxLife: number;
    }[] = [];

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let mouseActive = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      mouseActive = true;

      // Create a ripple on mouse move
      if (Math.random() > 0.8) {
        createRipple(mouseX, mouseY, 300, 5);
      }
    };

    const handleMouseLeave = () => {
      mouseActive = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Create automatic ripples
    const createRandomRipple = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const strength = 2 + Math.random() * 3;
      const maxLife = 100 + Math.random() * 100;

      createRipple(x, y, maxLife, strength);
    };

    // Create ripple function
    const createRipple = (
      x: number,
      y: number,
      maxLife: number,
      strength: number
    ) => {
      ripples.push({
        x,
        y,
        radius: 0,
        strength,
        life: 0,
        maxLife,
      });
    };

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update ripples
      ripples = ripples.filter((ripple) => {
        ripple.life += 1;
        ripple.radius = (ripple.life / ripple.maxLife) * 500;

        return ripple.life < ripple.maxLife;
      });

      // Randomly create new ripples
      if (Math.random() > 0.98) {
        createRandomRipple();
      }

      // Update points based on ripples
      points.forEach((point) => {
        // Reset point to base position
        point.x += (point.baseX - point.x) * 0.1;
        point.y += (point.baseY - point.y) * 0.1;

        // Apply ripple effects
        ripples.forEach((ripple) => {
          const dx = point.baseX - ripple.x;
          const dy = point.baseY - ripple.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = ripple.radius;

          if (distance < maxDistance) {
            const power = (1 - distance / maxDistance) * ripple.strength;
            const angle = Math.atan2(dy, dx);

            point.x += Math.cos(angle) * power;
            point.y += Math.sin(angle) * power;
          }
        });
      });

      // Draw connections
      ctx.strokeStyle = "rgba(100, 100, 255, 0.1)";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < points.length; i++) {
        const pointA = points[i];

        for (let j = i + 1; j < points.length; j++) {
          const pointB = points[j];
          const dx = pointA.x - pointB.x;
          const dy = pointA.y - pointB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < gridSpacing * 1.5) {
            const opacity = 1 - distance / (gridSpacing * 1.5);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 100, 255, ${opacity * 0.15})`;
            ctx.moveTo(pointA.x, pointA.y);
            ctx.lineTo(pointB.x, pointB.y);
            ctx.stroke();
          }
        }
      }

      // Draw points
      points.forEach((point) => {
        ctx.fillStyle = "rgba(150, 150, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Set initial ripples
    for (let i = 0; i < 3; i++) {
      createRandomRipple();
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full bg-gradient-to-b from-black to-[#0A0A12]"
    />
  );
};

export default RippleCanvas;
