import { Link } from "react-router"
import { useContext } from "react";
import WizardContext from "./WizardContext";

const StepIcon = ({ stepIcon }: { stepIcon: string }) => {
  return <span className="flex items-center justify-center mr-1 bg-green-900 text-white w-8 h-8 align-middle px-1 rounded-full">
    <span className="block text-sm/tight">
      {stepIcon}
    </span>
  </span>
}

export default function WizardSidebar() {
  const { wizardStepsConfig, currentStep, wizardMetadata } = useContext(WizardContext);

  return <div id="sidebar" className="bg-green-700 text-white">
    <Link to={wizardMetadata.returnUrl} className="text-2xl hover:underline text-white"> ← </Link>
    <h1 className="text-2xl font-bold w-50 pl-2">
      {wizardMetadata.wizardLabel}
    </h1>
    <ul>
      {
        wizardStepsConfig.map(({ stepLabel, isIndent, highlightOn, stepIcon }, idx) => {
          const currentStepHighlight = idx === currentStep || highlightOn?.includes(currentStep) ? 'bg-green-500' : ''
          return <li
            key={`${stepLabel}-${idx}`}
            className={`p-2 flex items-center ${isIndent ? 'pl-15' : ''} ${currentStepHighlight}`}
          >
            {!!stepIcon && <StepIcon stepIcon={stepIcon} />}
            <span className="text-lg">{stepLabel}</span>
          </li>
        })
      }
    </ul>
  </div>
}