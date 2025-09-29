import { Link } from "react-router";
import MainHeader from "../../components/MainHeader";

export default function HomePage() {
  return <div>
    <MainHeader />
    <h1 className="text-3xl font-bold">
      Does this wizard idea work?
    </h1>
    <Link to="/wizard" className="underline">Open the Home Wizard</Link>
    <br />
    <br />
    <div className="max-w-150 m-auto">
      <p>Check out the code of course, but this is the rough idea for a new wizard.</p>
      <p>There's a home and roles wizard to show some of the different features</p>
      <br />
      <p>I'm not completely done (timeboxed to 2 days) so things like showing the step number aren't polished
        (also because I'm not sure exactly how those should behave for things like going back and editing).</p>
      <p>But I think that the rough approach of keeping it simple config wise and just exposing a few helper components with context instead of higher order functions is a nicer way to go. Also sticking to a non-nested, non-recursive step config pattern and just using some CSS and properties to achieve the "nested" affect.</p>
      <br />
      <p>Let me know what you think</p>
    </div>
  </div>
}