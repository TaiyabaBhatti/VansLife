import React from "react";

export default function Wrapper({ children, className }) {
  return (
    <section className={`px-6 max-w-6xl m-auto ${className}`}>
      {children}
    </section>
  );
}
