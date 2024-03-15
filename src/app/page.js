"use client";
import React, { useState } from 'react';
import ImageBack from "./assets/aliceandalan.jpeg";
import Image from 'next/image';
import "./styles.css"

export default function Home() {
  const [buttonSize, setButtonSize] = useState(10); // Base size for the "No te perdono" button
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });

  const handleMouseOver = () => {
    setButtonSize(currentSize => currentSize + 5);
  };

  const handleMouseOut = () => {
    setButtonSize(currentSize => Math.max(100, currentSize - 3)); // Prevents the button from becoming too small
  };

  const handleClickMove = () => {
    const container = document.getElementById('button-container');
    if (container) {
      const containerRect = container.getBoundingClientRect();
      const randomTop = Math.random() * (containerRect.height - buttonSize);
      const randomLeft = Math.random() * (containerRect.width - buttonSize);
      setButtonPosition({ top: randomTop, left: randomLeft });
    }
  };

  const handleClickRedButton = () => {
    alert('Mañana vamos por mi camisa??')
    const youtubeLink = 'https://www.youtube.com/watch?v=maYnIz4GpEQ';
    window.location.href = youtubeLink;
  };


  return (
    <div
      id="button-container"
      className='main-container-profile '
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${ImageBack})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <p style={{ fontSize: '24px', margin: '20px' }}>¿Me perdonas?</p>
      <div>
        <button
          style={{ marginRight: '10px', backgroundColor: 'green', color: 'white', padding: '10px 20px', borderRadius: "15px", minHeight:"4rem", minWeight:"4rem" }}
          onClick={() => handleClickRedButton()}
        >
          Sí, te perdono mv
        </button>
        <button
          style={{
            position: 'absolute',
            top: buttonPosition.top,
            left: buttonPosition.left,
            backgroundColor: 'red',
            color: 'white',
            padding: `${10}px`,
            transition: 'padding 0.2s ease',
            borderRadius: "15px", minHeight:"4rem", minWeight:"4rem"
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => handleClickMove()}
        >
          No te perdono
        </button>
      </div>
    </div>
  );
}
