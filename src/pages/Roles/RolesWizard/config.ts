import { WizardConfig } from "../../Wizard/WizardTypes";
import Step1 from "./Step1";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

export const rolesWizardConfig: WizardConfig = {
  metadata: {
    returnUrl: '/roles',
    wizardLabel: 'Roles Wizard',
  },
  steps: [
    {
      stepLabel: 'Main Info',
      component: Step1,
      stepIcon: '1',
    },
    {
      stepLabel: 'Permissions',
      highlightOn: [1, 2, 3],
      component: null,
      stepIcon: '2',
    },
    {
      stepLabel: 'Claim Management',
      component: Step3,
      isIndent: true,
    },
    {
      stepLabel: 'Perms Name',
      component: Step4,
      isIndent: true,
    },
    {
      stepLabel: 'Something final',
      component: Step5,
      stepIcon: '3'
    },
  ]
}