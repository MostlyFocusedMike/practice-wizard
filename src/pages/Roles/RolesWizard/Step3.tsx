import WizardMovementButtons from "../../Wizard/shared-components/WizardMovementButtons";
import WizardStepHeader from "../../Wizard/shared-components/WizardStepHeader";

export default function Step3Comp() {

  return <>
    <WizardStepHeader />
    <p>An example of a mainly informational step</p>
    <WizardMovementButtons isInForm={false} />
  </>
}
