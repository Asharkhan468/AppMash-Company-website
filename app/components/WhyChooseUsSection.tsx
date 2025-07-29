import Image from "next/image";
import image1 from "../../public/why-choose-us-image-1.png";
import image2 from "../../public/why-choose-us-image-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPeopleGroup,
  faGear,
  faMap,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

export default function Section() {
  return (
    <section className="py-12 px-4 text-white relative">
      <div className="max-w-7xl mx-auto space-y-10 relative">
        {/* Row 1: Image Left - Text Right */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-6 relative z-10">
          {/* Left - Image */}
          <div className="w-full md:w-1/2 relative md:ml-8">
            <Image
              src={image2}
              alt="Professional Design"
              width={540}
              height={450}
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right - Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-start space-y-4 md:space-y-5">
            <h2 className="text-xl md:text-2xl font-bold text-white leading-snug">
              We Providing Best Design
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Delivering exceptional solutions tailored to your business needs.
              We ensure quality, creativity, and precision in every step to help
              you achieve your goals effectively.
            </p>

            <div className="bg-red-600 p-5 rounded-lg shadow-md mt-2">
              <div className="grid grid-cols-2 gap-3 text-white text-sm md:text-base font-medium">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faPeopleGroup}
                    className="text-white text-lg"
                  />
                  Dedicated Team
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faGear}
                    className="text-white text-lg"
                  />
                  Clean Setup
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faMap}
                    className="text-white text-lg"
                  />
                  24/7 Support
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faAward}
                    className="text-white text-lg"
                  />
                  Winning Award
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Text between Images */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className=" px-6 py-6 rounded-xl text-center shadow-lg">
            <span className="block text-3xl md:text-5xl font-extrabold text-primary2">
              20
            </span>
            <span className="block text-base md:text-xl font-medium text-white">
              Years of working
            </span>
            <span className="block text-xl md:text-3xl font-bold text-white">
              Experience
            </span>
          </div>
        </div>

        {/* Row 2: Text Left - Image Right */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 relative -mt-6 z-10">
          {/* Right - Image */}
          <div className="w-full md:w-1/2 relative">
            <Image
              src={image1}
              alt="Creative Design"
              width={540}
              height={450}
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Left - Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-start space-y-4">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Engage your audience with a clean and modern design approach. Our
              team ensures seamless experiences that align perfectly with your
              brand identity and vision. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Accusantium obcaecati asperiores omnis alias
              saepe rem magni voluptas nesciunt et! Tenetur aliquam eius omnis
              accusantium eos dolores dolorum optio, quae ea!
            </p>

            {/* User Name & Role */}
            <div>
              <h3 className="text-xl font-semibold text-white">John Doe</h3>
              <p className="text-red-500 text-xs md:text-base font-medium">
                CEO OF ZLITEMES
              </p>
            </div>

            {/* Learn More Button */}
            <button className="mt-3 border-2 border-red-500 text-red-500 px-5 py-2 rounded-lg hover:bg-red-500 hover:text-white transition duration-300 w-fit">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
