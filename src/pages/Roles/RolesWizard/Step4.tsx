import WizardMovementButtons from "../../Wizard/shared-components/WizardMovementButtons";
import WizardStepHeader from "../../Wizard/shared-components/WizardStepHeader";

export default function Step4() {

  return <>
    <WizardStepHeader />
    <p>Just another step for the sidebar really</p>
    <WizardMovementButtons isInForm={false} />
  </>
}