import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import image1 from "../../public/Blog-1.png";
import image2 from "../../public/Blog-2.png";
import image3 from "../../public/Blog-3.png";

function Blog() {
  return (
    <section className="relative w-full flex items-center mb-8 overflow-hidden pt-6 sm:pt-8 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 mt-4">
          <button className="border-2 border-primary2 text-primary2 px-5 py-2 rounded-sm text-xs sm:text-sm font-semibold mb-3">
            Our Latest Blogs
          </button>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary1 mt-3 leading-snug">
            Latest From the Blog
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card */}
          {[
            {
              image: image1,
              author: "Abdullah",
              title: "Building a Modern Web App",
              desc: "Learn the step-by-step process of creating a modern web application using Next.js and Tailwind CSS.",
            },
            {
              image: image2,
              author: "Muzammil",
              title: "Mastering Tailwind CSS",
              desc: "Discover how to design fast, responsive, and beautiful UIs with Tailwind CSS in record time.",
            },
            {
              image: image3,
              author: "Haider Ali",
              title: "Improve Your JavaScript Skills",
              desc: "Practical tips and tricks to take your JavaScript skills to the next level as a modern web developer.",
            },
          ].map((blog, index) => (
            <div
              key={index}
              className="bg-neutral1 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 h-[30rem] flex flex-col"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover" // Increased image height
              />
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-xs text-secondary1 mb-2">
                  Written by{" "}
                  <span className="font-semibold">{blog.author}</span>
                </p>
                <h3 className="text-lg font-semibold text-primary2 cursor-pointer mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-secondary1 mb-4 flex-grow">
                  {blog.desc}
                </p>
                <button className="flex items-center justify-center w-full bg-primary2 text-white py-2 rounded-sm hover:bg-primary2/90 transition mt-auto">
                  Learn More{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
