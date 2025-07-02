import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/breathing.json";

const RelaxationAnimation = () => (
  <div className="max-w-xs mx-auto mt-6">
    <Lottie animationData={animationData} loop autoplay />
    <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-2">
      Breathe in... hold... and out 😮‍💨
    </p>
  </div>
);

export default RelaxationAnimation;
