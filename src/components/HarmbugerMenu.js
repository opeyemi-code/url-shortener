import React from "react";

export default function HarmbugerMenu() {
  return (
    <nav
      id="harmburger-menu-item"
      className="bg-dark-violet w-2/3 mx-auto rounded-2xl space-y-5 px-6 py-10 absolute left-1/2 -translate-x-1/2 z-1 sm:hidden"
    >
      <div>
        <ul className="space-y-5 text-center text-xl">
          <li className="text-white font-medium hover:cursor-pointer">Features</li>
          <li className="text-white font-medium hover:cursor-pointer">Pricing</li>
          <li className="text-white font-medium hover:cursor-pointer">Resources</li>
        </ul>
      </div>
      <hr className="border-light-gray"></hr>
      <div>
        <ul className="text-center text-white space-y-5 text-xl font-medium">
          <li className="hover:cursor-pointer">Login</li>
          <li className="bg-cyan py-2 rounded-3xl cursor-pointer hover:opacity-80">
            Sign Up
          </li>
        </ul>
      </div>
    </nav>
  );
}
