import React, { useEffect, useState } from 'react';

export default function ScrollBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setWidth(pct || 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-bar-track">
      <div className="scroll-bar-fill" style={{ width: `${width}%` }} />
    </div>
  );
}
