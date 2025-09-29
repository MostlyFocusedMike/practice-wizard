import { useContext } from "react"
import WizardContext from "../WizardContext"

export default function WizardStepHeader() {
  const { currentStepConfig: { stepLabel } } = useContext(WizardContext);
  return <h1>{stepLabel}</h1>
}