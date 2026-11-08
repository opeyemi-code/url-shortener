
import React, { useContext, useState } from "react";
import { ShortenedLinksContext } from "../context/DataContext";

export default function ShortenedLinks() {
  const { shortenedLinks } = useContext(ShortenedLinksContext);
  const [copiedId, setCopiedId] = useState(null);

  async function handleCopy(url, id) {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(id);
    } catch (error) {
      console.error("Clipboard error:", error);
      window.alert("Failed to copy link. Please try again.");
    }
  }

  return (
    shortenedLinks.length > 0 && (
      <section className="w-4/5 my-10 mx-auto">
        <ul className="space-y-3 max-h-80 sm:max-h-96 overflow-y-auto pr-2 scroll-smooth">
          {shortenedLinks.map((shortenedLink) => (
            <li
              key={shortenedLink.id}
              className="bg-white p-3 rounded space-y-2 items-center sm:flex sm:space-y-0 sm:space-x-10"
            >
              <h3 className="text-dark-blue font-medium grow min-w-0 break-all">
                {shortenedLink.originalUrl}
              </h3>
              <hr className="border-light-gray sm:hidden" />
              <h3 className="text-cyan font-medium">
                {shortenedLink.shortUrl}
              </h3>
              <hr className="border-light-gray sm:hidden" />
              <button onClick={() => handleCopy(shortenedLink.shortUrl, shortenedLink.id)}
                className="bg-cyan text-center w-full py-2 rounded text-white font-medium sm:w-auto sm:px-7 hover:opacity-80"
                type="button"
              >
                {copiedId === shortenedLink.id ? "Copied!" : "Copy"}
              </button>
            </li>
          ))}
        </ul>
      </section>
    )
  );
}
