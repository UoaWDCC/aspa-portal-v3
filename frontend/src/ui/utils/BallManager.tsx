"use client";
import React, { useEffect } from "react";

function generateRandomColor() {
  const r = Math.floor((Math.random() * 127) + 127);
  const g = Math.floor((Math.random() * 127) + 127);
  const b = Math.floor((Math.random() * 127) + 127);
  return `rgb(${r}, ${g}, ${b})`;
}

function generateRandomBalls(mainElement: HTMLElement) {
  const numberOfBalls = 5;
  for (let i = 0; i < numberOfBalls; i++) {
    const ball = document.createElement("div");
    ball.className = "ball";
    const minSize = 100;
    const maxSize = 200;
    const size = Math.random() * (maxSize - minSize) + minSize;
    ball.style.width = `${size}px`;
    ball.style.height = `${size}px`;
    const maxTop = mainElement.clientHeight - size;
    const maxLeft = mainElement.clientWidth - size;
    ball.style.top = `${Math.random() * maxTop}px`;
    ball.style.left = `${Math.random() * maxLeft}px`;
    ball.style.backgroundColor = generateRandomColor();
    ball.style.position = 'absolute';
    const ellipse = document.createElement("div");
    ellipse.className = "ellipse";
    const ellipseWidth = size * 0.6;
    const ellipseHeight = size * 0.3;
    ellipse.style.width = `${ellipseWidth}px`;
    ellipse.style.height = `${ellipseHeight}px`;
    ellipse.style.backgroundColor = 'white';
    ellipse.style.position = 'absolute';
    ellipse.style.borderRadius = '50% / 50%';
    const position = Math.floor(Math.random() * 4);
    switch (position) {
      case 0:
        ellipse.style.top = '0';
        ellipse.style.left = `${(size - ellipseWidth) / 2}px`;
        ellipse.style.transform = 'rotate(0deg)';
        break;
      case 1:
        ellipse.style.top = `${(size - ellipseHeight) / 2}px`;
        ellipse.style.left = `${size - ellipseHeight}px`;
        ellipse.style.transform = 'rotate(90deg)';
        if (Math.random() < 0.5) {
          const leftEllipse = document.createElement("div");
          leftEllipse.className = "ellipse";
          leftEllipse.style.width = `${ellipseWidth}px`;
          leftEllipse.style.height = `${ellipseHeight}px`;
          leftEllipse.style.backgroundColor = 'white';
          leftEllipse.style.position = 'absolute';
          leftEllipse.style.borderRadius = '50% / 50%';
          leftEllipse.style.top = `${(size - ellipseHeight) / 2}px`;
          leftEllipse.style.left = `-${(ellipseWidth - ellipseHeight) / 2}px`;
          leftEllipse.style.transform = 'rotate(90deg)';
          ball.appendChild(leftEllipse);
        }
        break;
      case 2:
        ellipse.style.top = `${size - ellipseHeight}px`;
        ellipse.style.left = `${(size - ellipseWidth) / 2}px`;
        ellipse.style.transform = 'rotate(0deg)';
        break;
      case 3:
        ellipse.style.top = `${(size - ellipseHeight) / 2}px`;
        ellipse.style.left = `-${(ellipseWidth - ellipseHeight) / 2}px`;
        ellipse.style.transform = 'rotate(90deg)';
        if (Math.random() < 0.5) {
          const rightEllipse = document.createElement("div");
          rightEllipse.className = "ellipse";
          rightEllipse.style.width = `${ellipseWidth}px`;
          rightEllipse.style.height = `${ellipseHeight}px`;
          rightEllipse.style.backgroundColor = 'white';
          rightEllipse.style.position = 'absolute';
          rightEllipse.style.borderRadius = '50% / 50%';
          rightEllipse.style.top = `${(size - ellipseHeight) / 2}px`;
          rightEllipse.style.left = `${size - ellipseHeight}px`;
          rightEllipse.style.transform = 'rotate(90deg)';
          ball.appendChild(rightEllipse);
        }
        break;
    }
    ball.appendChild(ellipse);
    mainElement.appendChild(ball);
  }
}

function removeBalls(mainElement: HTMLElement) {
  const balls = mainElement.querySelectorAll(".ball");
  balls.forEach(ball => ball.remove());
}

const BallManager: React.FC = () => {
  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      generateRandomBalls(mainElement);
      return () => {
        removeBalls(mainElement);
      };
    }
  }, []);

  return null;
};

export default BallManager;