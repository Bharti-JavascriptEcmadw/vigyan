


// LoadingContext.js
import React, { createContext, useState, useEffect } from "react";

export const LoadingContext = createContext();


export const LoadingProvider = ({ children }) => {
  const stored = sessionStorage.getItem("isLoading");
  const [isLoading, setIsLoading] = useState(stored === "false" ? false : true);
  

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    sessionStorage.setItem("isLoading", isLoading);
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};



