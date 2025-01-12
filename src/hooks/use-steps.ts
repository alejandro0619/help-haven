import { useState, useEffect } from "react";

interface Step {
  title: string;
  description: string;
}

const STEP_STORAGE_KEY = "currentStep";

export const useSteps = (steps: Step[]) => {
  const [currentStep, setCurrentStep] = useState(() => {

    const savedStep = sessionStorage.getItem(STEP_STORAGE_KEY);
    return savedStep ? Number(savedStep) : 0;
  });

  useEffect(() => {
    sessionStorage.setItem(STEP_STORAGE_KEY, currentStep.toString());
  }, [currentStep]);

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
