import React, { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[59, 130, 246]],
  containerClassName,
  dotSize = 3,
  showGradient = true
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    let animationFrameId;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const spacing = dotSize * 4;
      const cols = Math.floor(canvas.width / spacing);
      const rows = Math.floor(canvas.height / spacing);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing + spacing / 2;
          const y = j * spacing + spacing / 2;
          
          // Calculate distance from center for animation
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
          const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
          
          // Animate based on time and distance
          const delay = (distance / maxDistance) * 2;
          const progress = Math.max(0, Math.min(1, (time * animationSpeed - delay)));
          
          if (progress > 0) {
            // Choose color from array
            const colorIndex = Math.floor(Math.random() * colors.length);
            const color = colors[colorIndex];
            
            // Choose opacity
            const opacityIndex = Math.floor(progress * opacities.length);
            const opacity = opacities[Math.min(opacityIndex, opacities.length - 1)];
            
            ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`;
            ctx.beginPath();
            ctx.arc(x, y, dotSize * progress, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      time += 0.016; // ~60fps
      if (time < 5) { // Run animation for 5 seconds
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [animationSpeed, colors, dotSize, opacities]);

  return (
    <div className={cn("h-full relative bg-black w-full", containerClassName)}>
      <canvas
        ref={canvasRef}
        className="h-full w-full"
      />
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%] pointer-events-none" />
      )}
    </div>
  );
};
