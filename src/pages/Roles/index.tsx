import { Link } from "react-router";
import MainHeader from "../../components/MainHeader";

export default function RolesPage() {
  return <div>
    <MainHeader />

    <h1 className="text-3xl font-bold">
      Roles
    </h1>

    <Link to="/roles/wizard" className="underline">Open the Wizard</Link>
  </div>
}