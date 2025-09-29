export type WizardComponentProps = {
  wizardState: WizardStepConfig[];

  currentStep: number;
  setIsCurrentStepValid: (currentStep: number, isValid: boolean) => void;
  navProps: {
    currentStep: number;
    handleNavClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  };
};

export type WizardStepConfig = {
  stepLabel: string;
  component: null | (() => JSX.Element);
  highlightOn?: number[];
  isIndent?: boolean;
  stepIcon?: string;
};

export type WizardMetadata = {
  returnUrl: string;
  wizardLabel: string;
};

export type WizardConfig = {
  metadata: WizardMetadata;
  steps: WizardStepConfig[];
};

export type WizardStepState = {
  showCheck: boolean;
}
