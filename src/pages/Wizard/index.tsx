import { useContext } from "react";
import WizardContextProvider from "./WizardContext/WizardContextProvider";
import WizardSidebar from "./WizardSidebar";
import WizardContext from "./WizardContext";
import { WizardConfig } from "./WizardTypes";

const Wizard = () => {
  const { currentStepConfig } = useContext(WizardContext);

  const CurrentComponent = currentStepConfig.component;

  return <div className="flex">
    <WizardSidebar />

    <div className="p-2 h-dvh">
      {CurrentComponent && <CurrentComponent />}
    </div>
  </div>
}

export default function WizardPage({ wizardConfig }: { wizardConfig: WizardConfig }) {
  return <WizardContextProvider config={wizardConfig}>
    <Wizard />
  </WizardContextProvider>
}