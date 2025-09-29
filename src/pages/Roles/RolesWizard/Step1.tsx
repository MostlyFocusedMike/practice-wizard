import { useContext, useEffect, useState } from "react";
import WizardMovementButtons from "../../Wizard/shared-components/WizardMovementButtons";
import WizardContext from "../../Wizard/WizardContext";
import WizardStepHeader from "../../Wizard/shared-components/WizardStepHeader";

export default function Step1() {
  const { handleNextStep } = useContext(WizardContext);
  const [name, setName] = useState('')

  // mocking a fetch
  useEffect(() => {
    const name = localStorage.getItem('wizard-test-name');
    if (name && name.length > 3) {
      setName(name)
    }
  }, [])

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    setName(input.value);
  }

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.length < 4) return alert('Some validation would go here')
    localStorage.setItem('wizard-test-name', name);

    handleNextStep();
  }

  return <>
    <WizardStepHeader />
    <form onSubmit={handleSubmit}>
      <p>See how easily we can incorporate the helpers buttons into any form?</p>

      <label>
        name:
        <input type="text" value={name} onChange={handleChange} className="border rounded px-1 ml-2" />
      </label>
      <WizardMovementButtons />
    </form>
  </>
}