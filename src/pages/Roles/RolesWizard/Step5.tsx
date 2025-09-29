import { useContext } from "react";
import WizardMovementButtons from "../../Wizard/shared-components/WizardMovementButtons";
import WizardContext from "../../Wizard/WizardContext";
import { useNavigate } from "react-router";


export default function Step5() {
  const navigate = useNavigate();
  const { currentStepConfig: { stepLabel }, wizardMetadata } = useContext(WizardContext);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = Object.fromEntries(new FormData(form));
    console.log('Form Data:', formData);

    navigate(wizardMetadata.returnUrl)
  }

  return <>
    <h1>{stepLabel} FINAL STEP </h1>
    <p>We can super easily customize anything, like changing the header format by just not using the helper component.</p>
    <form onSubmit={handleSubmit}>
      <label>
        Some data
        <input type="text" name="test" className="border px-1 rounded ml-1" />
      </label>
      <WizardMovementButtons />
    </form>
  </>
}