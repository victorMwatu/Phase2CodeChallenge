import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
        <h1 className="">
          Whoops! Something went wrong!
        </h1>
        <p className="">
          "An unexpected error occurred."
        </p>
    </>
  );
}

export default ErrorPage;