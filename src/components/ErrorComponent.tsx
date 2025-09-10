import { useRouteError } from "react-router-dom";
export default function ErrorComponent() {
  const error = useRouteError();
  console.log(error);
  return <h4 className="font-bold text-4xl">there was an error...</h4>;
}
