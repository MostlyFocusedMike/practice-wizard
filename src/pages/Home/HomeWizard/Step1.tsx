import { useContext, useEffect, useState } from "react";
import { WizardConfig } from "../../Wizard/WizardTypes";
import WizardMovementButtons from "../../Wizard/shared-components/WizardMovementButtons";
import WizardContext from "../../Wizard/WizardContext";

export default function Step1() {
  const { currentStepConfig: { stepLabel }, handleNextStep } = useContext(WizardContext);
  const [name, setName] = useState('')

  // mocking a fetch
  useEffect(() => {
    const name = localStorage.getItem('wizard-another-test');
    if (name?.length) setName(name)
  }, [])

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    setName(input.value);
  }

  const handleNext = async () => {
    console.log('name:', name);
    localStorage.setItem('wizard-test-name', name);

    handleNextStep()
  }

  return <>
    <h1>{stepLabel}, ((Step 1))</h1>
    <label>
      name:
      <input type="text" value={name} onChange={handleChange} className="border rounded px-1 ml-2" />
    </label>
    <WizardMovementButtons handleNext={handleNext} isInForm={false} />
  </>
}