import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  console.log(error);

  return (
    <section className="flex items-center justify-center h-[calc(100vh-190px)]">
      <div className="space-y-10">
        <h1 className="text-amber-900 text-2xl text-center font-bold">
          {error.message}
        </h1>
        <div className="w-96 text-center bg-black text-white text-2xl font-bold px-3 py-5 rounded-sm ">
          <Link to={`/`}>Return To Home</Link>
        </div>
      </div>
    </section>
  );
}
