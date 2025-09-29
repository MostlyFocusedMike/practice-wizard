import { WizardConfig } from "../../Wizard/WizardTypes";
import Step1 from "./Step1";
import Step2 from "./Step2";

export const homeWizardConfig: WizardConfig = {
  metadata: {
    returnUrl: '/',
    wizardLabel: 'Home Wizard',
  },
  steps: [
    {
      stepLabel: 'Home simple demo',
      component: Step1,
    },
    {
      stepLabel: 'Just ensuring no collisions',
      component: Step2
    },
  ]
}