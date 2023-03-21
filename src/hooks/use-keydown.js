import React from "react";


export default function useKeydown(key, callack) {
  React.useEffect(() => {
    function handleKeyDown(e) {
      if(e.code === key) {
        callack(e)
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, 
  [key, callack]);
}