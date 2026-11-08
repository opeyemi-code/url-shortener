import React from "react";
import heroImg from "../images/illustration-working.svg";

export default function HeroSection() {
  return (
    <section className="pb-20">
      <div className="hero-container w-90 ml-auto pt-3 flex-row-reverse justify-between items-center md:flex">
        <div className="hero-img md:w-1/2">
          <img className="w-screen hero-img" src={heroImg} alt="Illustration" />
        </div>
        <div className="hero-content flex flex-col items-center px-1 pt-8 pb-16 md:items-start md:w-1/2">
          <h2 className="text-center my-3 text-very-dark-violet font-bold text-5xl mt-4 md:mt-0 md:text-left md:text-left md:text-5xl lg:8xl">
            More than just shorter links
          </h2>
          <p className="text-center text-2xl text-grayish-violet md:text-left">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button
            className="mt-6 bg-cyan px-12 py-3 rounded-3xl text-xl text-white font-extrabold hover:opacity-80"
            type="button"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
