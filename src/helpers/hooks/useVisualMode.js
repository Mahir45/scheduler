import React, { useState } from 'react';

 export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  
  const transition = (newMode, replace) => {
    if (!replace) {
      setHistory([...history, newMode])
    }
    setMode(newMode)
  };

 function back() {
    if (history.length === 1) {
      setMode(initial);
    } else {
      setMode(history[history.length - 2]);
      setHistory(history.slice(0, -1));
    }
  }

  return  {mode, transition, back}
}
