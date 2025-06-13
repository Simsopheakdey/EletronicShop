import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-[52vh] flex flex-col justify-center items-center gap-5">
      <h1 className="text-xl text-red-500">404 Page Not Found.</h1>
      <Link
        to={"/"}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-[14px] bg-gray-900 font-medium text-primary-foreground hover:bg-primary/90 text-white py-2 rounded-md px-3"
      >
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;