import { Routes, Route } from "react-router";
import HomePage from "./pages/Home";
import './index.css';
import Error404Page from "./pages/Error404";
import RolesPage from "./pages/Roles";
import WizardPage from "./pages/Wizard";
import { rolesWizardConfig } from "./pages/Roles/RolesWizard/config";
import { homeWizardConfig } from "./pages/Home/HomeWizard/config";

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="wizard" element={<WizardPage wizardConfig={homeWizardConfig} />} />
        </Route>
        <Route path="/roles">
          <Route index element={<RolesPage />} />
          <Route path="wizard" element={<WizardPage wizardConfig={rolesWizardConfig} />} />
        </Route>
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </main>
  )
}
