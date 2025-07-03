import React, { Suspense } from "react";
import Wrapper from "../../components/ui/Wrapper";
import VanCollection from "./VanCollection";
import { Link, useLoaderData, Await } from "react-router-dom";
import TabFilter from "./TabFilter";
import { getVans } from "../../ApiFunc";

export function loaderLoad() {
  const vansPromise = getVans();
  console.log(vansPromise);
  return { vans: vansPromise };
}

export default function Vans() {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <Wrapper>
        <section className="space-y-10 my-10">
          <div className="space-y-5">
            <h1 className="font-bold text-3xl">Explore our van options</h1>
            <div className="flex flex-row gap-3  items-center ">
              <TabFilter text="Simple" type="type" value="simple" />
              <TabFilter text="Luxury" type="type" value="luxury" />
              <TabFilter text="Rugged" type="type" value="rugged" />

              {/* . represent current path without any string after ? */}
              <Link to={"."} className="text-base text-gray-600 underline">
                Clear filters
              </Link>
            </div>
          </div>

          {/* vans list */}
          <div className="flex flex-row flex-wrap gap-x-6 gap-y-12 justify-start">
            <Suspense fallback={<h1>Loading Vans Data!!!!</h1>}>
              <Await resolve={data.vans}>
                {(vans) => {
                  console.log(vans);

                  return <VanCollection vansData={vans} />;
                }}
              </Await>
            </Suspense>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
