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

export default function WhyUsSection() {
  return (
  <section className="py-12 px-4 text-white relative">
  <div className="max-w-7xl mx-auto relative">
    {/* Row 1: Image and Content Start Aligned */}
    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 relative z-10">
      
      {/* Left - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pr-6">
        <Image
          src={image2}
          alt="Professional Design"
          width={540}
          height={450}
          className="object-cover rounded-xl w-full max-w-[400px] sm:max-w-[500px] md:max-w-[540px]"
        />
      </div>

      {/* Right - Content (Start Aligned) */}
      <div className="w-full md:w-1/2 flex flex-col justify-start space-y-3 sm:space-y-4 px-2 sm:px-4 md:pl-6">
       <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug text-center md:text-left">
  We Providing Best Design
</h2>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed text-left 
          max-w-[95%] sm:max-w-[90%] md:max-w-[85%]">
          Delivering exceptional solutions tailored to your business needs. We ensure quality, 
          creativity, and precision in every step to help you achieve your goals effectively.
        </p>

        {/* Features Box */}
        <div className="bg-primary2 p-5 sm:p-6 rounded-lg shadow-md mt-2 
            w-full max-w-[100%] sm:max-w-[95%] md:max-w-[90%]">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 text-white text-xs sm:text-sm md:text-base font-medium">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPeopleGroup} className="text-white text-sm sm:text-base md:text-lg" />
              Dedicated Team
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faGear} className="text-white text-sm sm:text-base md:text-lg" />
              Clean Setup
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faMap} className="text-white text-sm sm:text-base md:text-lg" />
              24/7 Support
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faAward} className="text-white text-sm sm:text-base md:text-lg" />
              Winning Award
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Center Text for Desktop */}
    <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center">
      <div className="mr-12 mb-18 mt-14">
        <span className="block text-2xl sm:text-4xl md:text-6xl font-extrabold text-primary2">
          20
        </span>
        <span className="block text-sm sm:text-lg md:text-2xl font-medium text-white">
          Years of working
        </span>
        <span className="block text-lg sm:text-2xl md:text-4xl font-bold text-white">
          Experience
        </span>
      </div>
    </div>

    {/* Center Text for Mobile */}
    <div className="block md:hidden mt-8 text-center">
      <span className="block text-3xl font-extrabold text-primary2">20</span>
      <span className="block text-base font-medium text-white">Years of working</span>
      <span className="block text-xl font-bold text-white">Experience</span>
    </div>

    {/* Row 2: Image and Content Reversed, Center Aligned (Original) */}
    <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-8 md:gap-16 relative z-10 mt-10 md:mt-16">
      
      {/* Right - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-6">
        <Image
          src={image1}
          alt="Professional Design"
          width={540}
          height={450}
          className="object-cover rounded-xl w-full max-w-[400px] sm:max-w-[500px] md:max-w-[520px]"
        />
      </div>

      {/* Left - Content (Center Aligned) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-3 sm:space-y-4 px-2 sm:px-4 md:pr-6">
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-full md:max-w-md text-left">
          Engage your audience with a clean and modern design approach. Our team ensures seamless experiences that align perfectly with your brand identity and vision. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi non suscipit amet fugit vel aspernatur nisi iure expedita tempore.
        </p>

        {/* User Info */}
       <div className="text-center md:text-left">
  <h3 className="text-lg sm:text-xl font-semibold text-white">John Doe</h3>
  <p className="text-primary2 text-xs sm:text-sm md:text-base font-medium">
    CEO OF ZLITEMES
  </p>
</div>

{/* Button Wrapper for Centering on Mobile */}
<div className="flex justify-center md:justify-start">
  <button className="mt-3 border-2 border-primary2 text-primary2 px-4 sm:px-5 py-2 text-sm sm:text-base rounded-md hover:bg-primary2 hover:text-white transition duration-300">
    Learn More
  </button>
</div>

      </div>
    </div>
  </div>
</section>






  );
}
