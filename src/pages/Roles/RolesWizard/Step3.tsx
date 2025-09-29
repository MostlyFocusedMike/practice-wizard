import { useContext } from "react";
import WizardMovementButtons from "../../Wizard/shared-components/WizardMovementButtons";
import WizardContext from "../../Wizard/WizardContext";

export default function Step3Comp() {
  const { currentStepConfig: { stepLabel }, handleBackStep } = useContext(WizardContext);

  const handleBack = async () => {
    // confirm('Are you sure?')

    handleBackStep();
  }

  return <>
    <h1>{stepLabel}, Step 2.1</h1>
    <WizardMovementButtons handleBack={handleBack} isInForm={false} />
  </>
}
