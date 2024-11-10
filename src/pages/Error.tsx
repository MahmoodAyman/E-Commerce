import React from "react";
import {Link , useRouteError, isRouteErrorResponse } from "react-router-dom";

function Error() {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-gray-200 font-bold text-7xl md:text-9xl">
        Error {errorStatus}
      </h1>
      <p className="text-2xl m-2 p-4">{errorStatusText} 😥</p>

      <Link
        to="/"
        className="p-4 bg-blue-400 text-white hover:bg-blue-700 m-3 rounded-xl transition-colors duration-300 "
      >
        Go to Home Page
      </Link>
    </div>
  );
}

export default Error;
