type StepsNavigationProps = {
  currentStep: number;
  totalSteps: number;
  prevStep: () => void;
  nextStep: () => void;
}

const StepsNavigation: React.FC<StepsNavigationProps> = ({ currentStep, totalSteps, prevStep, nextStep }) => {
  return (
    <div className="mt-4 flex justify-between">
    <button
      onClick={prevStep}
      disabled={currentStep === 0}
      className="px-4 py-2 bg-dark text-light rounded"
    >
      Previous
    </button>
    <button
      onClick={nextStep}
      disabled={currentStep === totalSteps - 1}
      className="ml-2 px-4 py-2 bg-light text-dark rounded"
    >
      Next
    </button>
  </div>
    )
}

export default StepsNavigation;
