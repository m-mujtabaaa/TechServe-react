import React, { useEffect, useRef } from 'react';


const Curser = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
        cursor.style.display = 'block';
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.display = 'none';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default Curser;
