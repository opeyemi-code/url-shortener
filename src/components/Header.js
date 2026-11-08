import React, { useContext } from "react";
import logo from "../images/logo.svg";
import { List } from "react-bootstrap-icons";
import HarmbugerMenu from "./HarmbugerMenu";
import { ShortenedLinksContext } from "../context/DataContext";

export default function Header() {
  const { showHarmburgerMenu, setShowHarmburgerMenu } = useContext(
    ShortenedLinksContext
  );

  return (
    <header className="relative">
      <div className="custom-container mx-auto  my-7 px-5 flex justify-between items-center min-w-96 md:px-0 md:w-4/5 sm:justify-start sm:space-x-10 sm:text-lg ">
        <div className="">
          <img src={logo} alt="Shortly" />
        </div>
        <nav className="hidden justify-between w-full sm:flex">
          <div>
            <ul className="flex justify-between space-x-7 ">
              <li className="text-grayish-violet font-medium hover:text-very-dark-violet hover:cursor-pointer">
                Features
              </li>
              <li className="text-grayish-violet font-medium hover:text-very-dark-violet hover:cursor-pointer">
                Pricing
              </li>
              <li className="text-grayish-violet font-medium hover:text-very-dark-violet hover:cursor-pointer">
                Resources
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex justify-between items-center space-x-7">
              <li className="text-grayish-violet font-medium hover:text-very-dark-violet hover:cursor-pointer">
                Login
              </li>
              <li className="bg-cyan text-white font-medium px-5 py-1 rounded-2xl hover:cursor-pointer hover:opacity-80">
                Sign Up
              </li>
            </ul>
          </div>
        </nav>
        <button
          type="button"
          className="sm:hidden"
          onClick={() => setShowHarmburgerMenu(!showHarmburgerMenu)}
        >
          <List size={36} />
        </button>
      </div>
      {showHarmburgerMenu && <HarmbugerMenu />}
    </header>
  );
}
