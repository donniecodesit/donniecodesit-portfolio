import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/dc88451d-9af8-4150-9101-3e7ddb2be9da"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact Me</Title>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="button"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-200 to-blue-900 drop-shadow-md"
          >
            Send a message!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
