import { useState, ReactNode, Dispatch, SetStateAction } from 'react';
import WizardContext from '.';
import { WizardConfig, WizardMetadata, WizardStepState, WizardStepConfig } from '../WizardTypes';

// I'm not yet totally sure how much raw state vs helper methods to expose,
// and still figuring out how things like check marks should behave
export type WizardContextType = {
  wizardMetadata: WizardMetadata;
  wizardStepsConfig: WizardStepConfig[];
  currentStepConfig: WizardStepConfig;
  currentStep: number;
  confirmBackNav: boolean;
  wizardStepsState: WizardStepState[];
  setConfirmBackNav: Dispatch<SetStateAction<boolean>>;
  handleNextStep: () => void;
  handleBackStep: () => void;
  setCurrentStepIsChecked: (isCheckVisible: boolean) => void;
};

type Props = { children: ReactNode, config: WizardConfig }
export default function WizardContextProvider({ config, children }: Props) {
  const { steps: wizardStepsConfig, metadata: wizardMetadata } = config;
  const [currentStep, setCurrentStep] = useState(0);
  const [confirmBackNav, setConfirmBackNav] = useState(false);
  const [wizardStepsState, setWizardStepsState] = useState<WizardStepState[]>([]);

  const handleMoveStep = (stepMove: number) => {
    const value = stepMove;
    let newStep = currentStep + value

    if (!wizardStepsConfig[newStep]) return console.error('Invalid Step:', newStep)

    while (wizardStepsConfig[newStep]) {
      if (!wizardStepsConfig[newStep]?.component) {
        newStep += value
        continue;
      }
      break
    }

    setCurrentStep(newStep);
  }

  const setCurrentStepIsChecked = (isCheckVisible: boolean) => {
    const newStepState = [...wizardStepsState];
    newStepState[currentStep].showCheck = isCheckVisible;
    setWizardStepsState(newStepState)
  }

  const currentStepConfig = wizardStepsConfig[currentStep];
  const handleNextStep = () => handleMoveStep(1);
  const handleBackStep = () => handleMoveStep(-1);

  const context: WizardContextType = {
    wizardMetadata,
    wizardStepsConfig,
    currentStepConfig,
    currentStep,
    confirmBackNav,
    wizardStepsState,
    setCurrentStepIsChecked,
    setConfirmBackNav,
    handleNextStep,
    handleBackStep,
  };

  return (
    <WizardContext.Provider value={context}>
      {children}
    </WizardContext.Provider>
  );
}
