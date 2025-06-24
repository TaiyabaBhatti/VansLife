import React from "react";
import Button from "../components/ui/Button";
import Wrapper from "../components/ui/Wrapper";

export default function Home() {
  return (
    <>
      <section className="h-[calc(100vh-192px)] bg-[url(./assets/images/home-bg.png)]  bg-no-repeat bg-cover bg-center relative before:absolute before:w-full before:h-full before:bg-black before:opacity-30 flex items-center justify-center px-6">
        <Wrapper className="">
          <div className="text-white relative z-50 flex flex-col gap-y-5 max-w-lg">
            <h1 className="font-extrabold text-4xl">
              You got the travel plans, we got the travel vans.
            </h1>
            <p className="font-medium text-base">
              Add adventure to your life by joining the #vanlife movement. Rent
              the perfect van to make your perfect road trip.
            </p>

            <Button text="Find your van" />
          </div>
        </Wrapper>
      </section>
    </>
  );
}
