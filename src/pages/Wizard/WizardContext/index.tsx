import { createContext } from 'react';
import { WizardContextType } from './WizardContextProvider';

const WizardContext = createContext<WizardContextType>({} as WizardContextType);

export default WizardContext;
