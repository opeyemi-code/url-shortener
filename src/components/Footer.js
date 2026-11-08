import React from "react";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

export default function Footer() {
  return (
    <section className="bg-dark-blue py-10 px-5 flex flex-col justify-around items-center space-y-5 text-center md:space-y-0 md:flex-row md:items-start">
      <div className="footer-img-container">
        <h2 className="text-white text-3xl font-extrabold">Shortly</h2>
      </div>
      <div className="scondary-links space-y-4 md:space-y-0 md:flex md:space-x-10">
        <div className="space-y-3">
          <h3 className="text-white font-medium">Features</h3>
          <ul className="space-y-2 text-grayish-violet font-medium">
            <li className="hover:text-cyan hover:cursor-pointer">
              List Shortening
            </li>
            <li className="hover:text-cyan hover:cursor-pointer">
              Broadcast Links
            </li>
            <li className="hover:text-cyan hover:cursor-pointer">Analysis</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-white font-medium">Resources</h3>
          <ul className="space-y-2 text-grayish-violet font-medium">
            <li className="hover:text-cyan hover:cursor-pointer">Blog</li>
            <li className="hover:text-cyan hover:cursor-pointer">Developers</li>
            <li className="hover:text-cyan hover:cursor-pointer">Support</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-white font-medium">Company</h3>
          <ul className="space-y-2 text-grayish-violet font-medium">
            <li className="hover:text-cyan hover:cursor-pointer">About</li>
            <li className="hover:text-cyan hover:cursor-pointer">Our Team</li>
            <li className="hover:text-cyan hover:cursor-pointer">Careers</li>
            <li className="hover:text-cyan hover:cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
      <div className="social-links">
        <ul className="flex items-center space-x-5">
          <li>
            <img
              className="hover:bg-cyan rounded-full p-1 hover:cursor-pointer"
              src={facebook}
              alt="Facebook"
            />
          </li>
          <li>
            <img
              className="hover:bg-cyan rounded-full p-1 hover:cursor-pointer"
              src={twitter}
              alt="Twitter"
            />
          </li>
          <li>
            <img
              className="hover:bg-cyan rounded-full p-1 hover:cursor-pointer"
              src={pinterest}
              alt="Pinterest"
            />
          </li>
          <li>
            <img
              className="hover:bg-cyan rounded-full p-1 hover:cursor-pointer"
              src={instagram}
              alt="Instagram"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
