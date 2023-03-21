import React from "react";
import useKeydown from "../../hooks/use-keydown";


export const ToastContext = React.createContext();

function ToastProvider({children}) {

  const [toasts, setToasts] = React.useState([]);

  const handleKeydown = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeydown('Escape', handleKeydown);


  function dismissToast(id) {
    const newToasts = toasts.filter((toast) => toast.id !== id)
    setToasts(newToasts);
  }


  function createToast(message, variant){
    const toast = {
      variant,
      message,
      id: crypto.randomUUID(),
    }
    setToasts([...toasts, toast]);
  }


  const value = {
    dismissToast,
    createToast,
    toasts,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
