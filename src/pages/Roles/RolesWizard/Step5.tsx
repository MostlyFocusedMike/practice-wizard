import { useContext } from "react";
import WizardMovementButtons from "../../Wizard/shared-components/WizardMovementButtons";
import WizardContext from "../../Wizard/WizardContext";
import { useNavigate } from "react-router";


export default function Step5() {
  const navigate = useNavigate();
  const { currentStepConfig: { stepLabel }, wizardMetadata } = useContext(WizardContext);
  console.log('return:', wizardMetadata.returnUrl);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = Object.fromEntries(new FormData(form));
    console.log('e.:', formData);

    navigate(wizardMetadata.returnUrl)
  }

  return <>
    <h1>{stepLabel} FINAL STEP</h1>
    <p>This is an example of a purely informational step</p>
    <form onSubmit={handleSubmit}>
      <label>
        Some data
        <input type="text" name="test" />
      </label>
      <WizardMovementButtons />
    </form>
  </>
}