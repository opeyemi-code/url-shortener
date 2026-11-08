import React, { useState, useEffect } from "react";
import brandRecognitonImg from "../images/icon-brand-recognition.svg";
import detailedRecordImg from "../images/icon-detailed-records.svg";
import fullyCustomizableImg from "../images/icon-fully-customizable.svg";
import { ChevronRight } from "react-bootstrap-icons";
import { ChevronLeft } from "react-bootstrap-icons";

export default function Features() {
  useEffect(() => {
    const counterBtns = document.querySelectorAll(".counter-btn");
    let counter = 0;

    counterBtns.forEach((counterBtn) =>
      counterBtn.addEventListener("click", cardSlider)
    );

    function cardSlider(e) {
      const featuresCard = document.querySelectorAll(".features-card");

      if (e.currentTarget.classList.contains("increement-btn")) {
        if (counter === 2) {
          counter = 0;
        } else {
          counter++;
        }
      }

      if (e.currentTarget.classList.contains("decreement-btn")) {
        if (counter === 0) {
          counter = 2;
        } else {
          counter--;
        }
      }

      return featuresCard.forEach((card) => {
        if (Number(card.id) === counter) {
          card.classList.add("md:block");
          card.classList.remove("md:hidden");
        } else {
          card.classList.remove("md:block");
          card.className += " md:hidden xl:block";
        }
      });
    }
  }, []);

  return (
    <section className="features-section my-10">
      <div className="w-4/5 mx-auto">
        <h2 className="features-heading text-center mt-10 text-very-dark-violet font-extrabold text-3xl">
          Advanced Statistics
        </h2>
        <p className="text-center w-1/2 mx-auto text-grayish-violet features-description mt-5">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <section className="flex flex-col mt-8 items-center relative xl:space-y-16 md:flex-row md:justify-center xl:justify-between md:space-x-10">
          <button
            type="button"
            className="counter-btn decreement-btn hidden md:block xl:hidden"
          >
            <ChevronLeft size={24} className="text-dark-violet" />
          </button>
          <div
            id="0"
            className="features-card bg-white p-7 relative z-10 rounded-lg w-4/5 mb-12 md:mb-0 md:w-96"
          >
            <img
              className="bg-dark-violet rounded-full p-3 absolute -top-7 xl:mx-0 left-1/2 -translate-x-1/2 xl:left-7 xl:-translate-x-0"
              src={brandRecognitonImg}
              alt="Brand Recognition Icon"
            />
            <h3 className="text-center mt-4 mb-2 text-very-dark-violet font-extrabold xl:text-left">
              Brand Recognition
            </h3>
            <p className="text-center text-grayish-violet mb-3 xl:text-left">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="absolute w-3 h-1/2 bg-cyan xl:w-1/2 xl:h-2 md:hidden xl:block"></div>
          <div
            id="1"
            className="features-card bg-white z-10 w-4/5 p-7 relative rounded-lg mb-12 md:mb-0 md:w-96 xl:top-10 md:hidden xl:block"
          >
            <img
              className="bg-dark-violet rounded-full p-3 absolute -top-7 xl:mx-0 left-1/2 -translate-x-1/2 xl:left-7 xl:-translate-x-0"
              src={detailedRecordImg}
              alt="Detailed Records"
            />
            <h3 className="text-center mt-4 mb-2 text-very-dark-violet font-extrabold xl:text-left">
              Detailed Records
            </h3>
            <p className="text-center text-grayish-violet mb-3 xl:text-left">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="absolute w-3 h-1/2 bg-cyan bottom-6 xl:w-1/2 xl:h-2 xl:right-5 xl:bottom xl:top-[105px] md:hidden xl:block"></div>
          <div
            id="2"
            className="features-card bg-white w-4/5 z-10 p-7 relative rounded-lg md:w-96 xl:top-16 md:hidden xl:block"
          >
            <img
              className="bg-dark-violet rounded-full p-3 absolute -top-7 xl:mx-0 left-1/2 -translate-x-1/2 xl:left-7 xl:-translate-x-0"
              src={fullyCustomizableImg}
              alt="Fully Customizable"
            />
            <h3 className="text-center mt-6 mb-2 text-very-dark-violet font-extrabold xl:text-left">
              Fully Customizable
            </h3>
            <p className="text-center text-grayish-violet mb-3 xl:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
          <button
            type="button"
            className="counter-btn increement-btn hidden md:block xl:hidden"
          >
            <ChevronRight size={24} className="text-dark-violet" />
          </button>
        </section>
      </div>
    </section>
  );
}
