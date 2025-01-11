import { useState } from "react";

interface Step {
  title: string;
  description: string;
}

export const useSteps = (steps: Step[]) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const resetSteps = () => {
    setCurrentStep(0);
  };

  return {
    currentStep,
    currentStepData: steps[currentStep],
    nextStep,
    prevStep,
    resetSteps,
    totalSteps: steps.length,
  };
};
