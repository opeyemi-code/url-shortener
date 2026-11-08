import React, { useState, useContext } from "react";
import { ShortenedLinksContext } from "../context/DataContext";

export default function FormSection() {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { setShortenedLinks } = useContext(
    ShortenedLinksContext
  );

  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const trimmedUrl = inputValue.trim();

    if (!trimmedUrl) {
      setErrorMessage("Please add a link.");
      setSuccessMessage("");
      return;
    }

    const normalizedUrl = /^https?:\/\//i.test(trimmedUrl)
      ? trimmedUrl
      : `https://${trimmedUrl}`;

    try {
      const parsedUrl = new URL(normalizedUrl);

      if (
        !["http:", "https:"].includes(parsedUrl.protocol) ||
        !parsedUrl.hostname.includes(".")
      ) {
        throw new Error("Invalid URL");
      }
    } catch {
      setErrorMessage("Please enter a valid URL.");
      setSuccessMessage("");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const endpoint = new URL("https://is.gd/create.php");

      endpoint.searchParams.set("format", "json");
      endpoint.searchParams.set("url", normalizedUrl);

      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error("Unable to reach the shortening service.");
      }

      const data = await response.json();

      if (!data.shorturl) {
        throw new Error(
          data.errormessage || "Unable to shorten this URL."
        );
      }

      const newLink = {
        id: Date.now(),
        originalUrl: normalizedUrl,
        shortUrl: data.shorturl,
      };

      setShortenedLinks((previousLinks) => [
        newLink,
        ...previousLinks,
      ]);


      setInputValue("");
      setSuccessMessage("Your link has been shortened successfully!");
    } catch (error) {
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
    setErrorMessage("");
    setSuccessMessage("");
  }

  return (
    <section className="w-4/5 mx-auto form-section p-6 bg-dark-violet rounded-lg -mt-20 sm:p-12">
      <form
        onSubmit={handleSubmit}
        className=""
        noValidate
      >
        <div className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:space-x-5">
          <div className="flex-1">
            <label htmlFor="input-field" className="sr-only">
              Enter a URL to shorten
            </label>

            <input
              id="input-field"
              className={`w-full py-3 pl-4 rounded-lg ${errorMessage ? "border-2 border-red" : ""
                }`}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Shorten a link here..."
              aria-invalid={Boolean(errorMessage)}
              aria-describedby={
                errorMessage ? "url-error" : undefined
              }
            />

            {errorMessage && (
              <p id="url-error" role="alert" className="text-red italic text-sm mt-2 md:hidden">
                {errorMessage}
              </p>
            )}

            {successMessage && (
              <p role="status" className="text-white text-sm mt-2 md:hidden">
                {successMessage}
              </p>
            )}
          </div>

          <button
            className="bg-cyan text-white font-extrabold px-8 py-3 rounded-lg"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Shortening..." : "Shorten It!"}
          </button>
        </div>
        {errorMessage && (
          <p id="url-error" role="alert" className="hidden text-red italic text-sm mt-2 md:block">
            {errorMessage}
          </p>
        )}

        {successMessage && (
          <p role="status" className="hidden text-white text-sm mt-2 md:block">
            {successMessage}
          </p>
        )}
      </form>
    </section>
  );
}