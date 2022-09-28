import React from "react";

function Contact() {
  return (
    <div className="px-10 mt-24 mx-auto max-w-7xl md:px-16 ">
      <div className="max-w-3xl mx-auto mb-10 md:mb-16">
        <p className="text-xs  text-blue-500 uppercase">
          We want to hear from you
        </p>
        <h2 className="mt-1 text-2xl  text-left text-gray-800 lg:text-3xl md:mt-2">
          Need to ask us a question?
        </h2>
      </div>
      <form className="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2">
        <div>
          <label
            htmlFor="first-name"
            className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
          >
            First name
          </label>
          <input
            name="first-name"
            className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
          />
        </div>

        <div className="">
          <label
            htmlFor="last-name"
            className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
          >
            Last name
          </label>
          <input
            name="last-name"
            className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
          >
            Email
          </label>
          <input
            name="email"
            className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="subject"
            className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
          >
            Subject
          </label>
          <input
            name="subject"
            className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
          >
            Message
          </label>
          <textarea
            name="message"
            className="w-full h-64 px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
          ></textarea>
        </div>

        <div className="flex items-center justify-between sm:col-span-2">
          <button className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-blue-600 rounded-md outline-none hover:bg-blue-500 active:bg-blue-700 ring-blue-300 md:text-base">
            Send Message
          </button>
        </div>
      </form>
      <p className="max-w-3xl mx-auto mt-5 mb-8 text-xs text-gray-400">
        Please allow up to 24-48 hour response during the weekdays.
      </p>
    </div>
  );
}

export default Contact;
