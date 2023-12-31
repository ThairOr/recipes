import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useRouteError } from "react-router-dom";



function ErrorPage() {
  const error = useRouteError()
  console.log("error :>> ", error);

  //!useNavigate hook

  const navigateTo = useNavigate();
  const goHome = () => {
    navigateTo("/");
  };

  //! trying to build a delayed redirect
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRedirect(true);
    }, 2000);
  }, []);

  return (
    <>
      <h1>...ups..nothing to see here</h1>
      <h2>you will be redirected to Home in 3...2...</h2>
      {/* <h3>{error.error.message}</h3>
      <Button variant="warning" onClick={goHome}>
        Take me home!
      </Button> */}
      {redirect && <Navigate to={"/"} />}
    </>
  );
}

export default ErrorPage;