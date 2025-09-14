

  import React, { useState, useContext, useEffect } from "react";
import { ImSpinner2 } from "react-icons/im";
import { LoadingContext } from "../Context/LoadingContext";

const WelcomeModal = () => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setIsOpen(true);
    }
  }, [isLoading]);

  const handleClose = () => {
    setIsOpen(false);
    setIsLoading(false);
  };

  const message = "Welcome To Vigyan Pathshala";

  if (!isLoading || !isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[9999] flex justify-center items-center">
      <div className="relative bg-transparent p-6 flex flex-col items-center justify-center">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-400"
        >
          &times;
        </button>

        {/* Spinner Loader */}
        <div className="mb-6 text-blue-400 animate-spin">
          <ImSpinner2 size={80} />
        </div>

        {/* Welcome Message */}
        <p className="text-white text-3xl md:text-4xl font-bold text-center">
          {message}
        </p>
      </div>
    </div>
  );
};

export default WelcomeModal;
