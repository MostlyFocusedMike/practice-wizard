import { useContext } from "react";
import WizardMovementButtons from "../../Wizard/shared-components/WizardMovementButtons";
import WizardContext from "../../Wizard/WizardContext";

export default function Step4() {
  const { currentStepConfig: { stepLabel } } = useContext(WizardContext);

  return <>
    <h1>{stepLabel} Step 2.1</h1>
    <p>This is an example of a purely informational step</p>
    <WizardMovementButtons isInForm={false} />
  </>
}