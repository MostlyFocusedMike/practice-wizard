import { useContext } from "react";
import WizardContext from "../WizardContext";

type Props = {
  isInForm?: boolean
  isNextDisabled?: boolean;
  handleNext?: () => void;
  handleBack?: () => void;
  isBackBlocked?: boolean;
  isNextBlocked?: boolean;
  nextButtonText?: string;
  backButtonText?: string;
}
export default function WizardMovementButtons({ handleNext, handleBack, isInForm = true, isBackBlocked, isNextBlocked, nextButtonText = 'Next', backButtonText = 'Back' }: Props) {
  const { currentStep, handleBackStep, handleNextStep } = useContext(WizardContext);

  const onNext = () => {
    console.log('isInForm:', isInForm);
    if (isInForm) return;
    handleNext ? handleNext() : handleNextStep()
  }

  const onBack = () => {
    handleBack ? handleBack() : handleBackStep();
  }

  return <div className="p-2 h-dvh">
    <div className="block">
      <button
        disabled={!currentStep || isBackBlocked}
        onClick={onBack}
        type="button"
        className="border-2 rounded bg-gray-300 m-2 px-3 disabled:bg-gray-300 disabled:text-gray-100"
      >
        {backButtonText}
      </button>
      <button
        disabled={isNextBlocked}
        onClick={onNext}
        type={isInForm ? 'submit' : 'button'}
        className="border-2 rounded bg-green-800 text-white m-2 px-3 disabled:bg-gray-300 disabled:text-gray-100"
      >
        {nextButtonText}
      </button>
    </div>
  </div>
}