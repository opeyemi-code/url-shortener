import React from "react";

export default function CallToAction() {
  return (
    <section className="bg-dark-violet call-to-action text-center py-10 space-y-7">
      <h2 className="text-white font-extrabold text-2xl">
        Boost your links today
      </h2>
      <button
        className="bg-cyan px-10 py-3 rounded-3xl font-semibold text-white hover:opacity-70"
        type="button"
      >
        Get Started
      </button>
    </section>
  );
}
