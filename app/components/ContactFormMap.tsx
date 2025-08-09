import React from "react";

function ContactFormMap() {
  return (
   <section className="relative  bg-neutral2 w-full flex items-center overflow-hidden pt-6 sm:pt-8 pb-8 sm:pb-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-5">
    {/* Top Center Button & Heading */}
    <div className="text-center mb-8 sm:mb-12 mt-4">
      <button className="border-2 border-primary2 text-primary2 px-5 py-2 rounded-sm text-xs sm:text-sm font-semibold mb-3">
        Contact & Visit Us
      </button>
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-3 leading-snug text-center">
        Reach Out via Form or Stop by Our Location
        <br />
        <span className="block text-center">We’d Love to Connect.</span>
      </h2>
    </div>

    {/* Image + Form */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
      {/* Left Side Image */}
      <div className="h-full">
        <img
          src="/Map.png"
          alt="Contact"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side Form */}
      <form className="h-full flex flex-col justify-between p-8 space-y-8 bg-neutral3 rounded-lg shadow-lg">
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2">
            <label className="text-white text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary2"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-white text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary2"
            />
          </div>
        </div>

        {/* Phone & Subject */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2">
            <label className="text-white text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary2"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-white text-sm font-medium">Subject</label>
            <input
              type="text"
              placeholder="Enter subject"
              className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary2"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col space-y-2 flex-grow">
          <label className="text-white text-sm font-medium">Message</label>
          <textarea
            placeholder="Write your message"
            className="w-full h-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary2 resize-none"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-primary2 text-white py-3 rounded-md hover:bg-primary1 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>


  );
}

export default ContactFormMap;
