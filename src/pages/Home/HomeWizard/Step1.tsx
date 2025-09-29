import { useContext, useEffect, useState } from "react";
import WizardMovementButtons from "../../Wizard/shared-components/WizardMovementButtons";
import WizardContext from "../../Wizard/WizardContext";
import WizardStepHeader from "../../Wizard/shared-components/WizardStepHeader";

export default function Step1() {
  const { handleNextStep } = useContext(WizardContext);
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
    <WizardStepHeader />
    <label>
      name:
      <input type="text" value={name} onChange={handleChange} className="border rounded px-1 ml-2" />
    </label>
    <WizardMovementButtons handleNext={handleNext} isInForm={false} />
  </>
}