import React from "react";
import Wrapper from "../components/ui/Wrapper";
import Button from "../components/ui/Button";

export default function About() {
  return (
    <>
      <section className="bg-[url(./assets/images/about-bg.png)]  bg-no-repeat bg-cover bg-center h-80 "></section>
      <Wrapper className={"!max-w-2xl"}>
        <section className="space-y-8 my-14">
          <h1 className="font-bold text-3xl">
            Don’t squeeze in a sedan when you could relax in a van
          </h1>
          <p className="font-medium text-base">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉){" "}
            <br /> <br /> Our team is full of vanlife enthusiasts who know
            firsthand the magic of touring the world on 4 wheels.
          </p>

          <div className="bg-dull-orange p-5 space-y-4 rounded-l-lg">
            <h1 className="font-bold text-2xl">
              Your destination is waiting. <br /> Your van is ready.
            </h1>
            <Button text="Explore our vans" bgColor="bg-salete" />
          </div>
        </section>
      </Wrapper>
    </>
  );
}
