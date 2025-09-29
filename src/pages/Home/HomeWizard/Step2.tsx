import { useContext } from "react";
import WizardMovementButtons from "../../Wizard/shared-components/WizardMovementButtons";
import WizardContext from "../../Wizard/WizardContext";
import WizardStepHeader from "../../Wizard/shared-components/WizardStepHeader";

export default function Step2() {
  const { handleBackStep, handleNextStep } = useContext(WizardContext);

  const handleBack = async () => {
    confirm('You will lose any unsaved changes')

    handleBackStep();
  }

  return <>
    <WizardStepHeader />
    <p>This one doesn't actually go anywhere so you can see the error and going back asks for confirm</p>
    <WizardMovementButtons handleBack={handleBack} isInForm={false} />
  </>
}