import React from "react";
import Image from "next/image";
import logo from "../../public/appmashLogo.png";
import icon1 from "../../public/facebook.png";
import icon2 from "../../public/youtube.png";
import icon3 from "../../public/instagram.png";
import icon4 from "../../public/behance.png";
import icon5 from "../../public/dribble.png";
import icon6 from "../../public/linkedin.png";

function Footer() {
  return (
<footer className="bg-gradient-to-b from-neutral2/95 to-primary2 text-white py-10 sm:py-12 border-t border-[#adb5bd] rounded-t-2xl">
  {/* Top Heading Section */}
  <div className="text-center mb-8 sm:mb-10 px-4">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 leading-snug">
      Working Together Ideas Come to Life
    </h2>
    <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
      Get in touch with us to discuss your next project and bring your ideas
      to life with our expertise.
    </p>
  </div>

  {/* Footer Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
  {/* Logo & Social Media */}
  <div className="flex flex-col items-center text-center">
    <Image
      src={logo}
      alt="Logo"
      className="w-28 sm:w-32 md:w-40 mb-4 drop-shadow-lg"
    />

    {/* Social Icons Grid */}
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="flex flex-col gap-2 sm:gap-3">
        <a
          href="#"
          className="flex items-center justify-center gap-2 hover:text-primary2 transition-colors text-xs sm:text-sm"
        >
          <Image src={icon1} alt="Facebook" className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Facebook</span>
        </a>
        <a
          href="#"
          className="flex items-center justify-center gap-2 hover:text-primary2 transition-colors text-xs sm:text-sm"
        >
          <Image src={icon2} alt="Twitter" className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>YouTube</span>
        </a>
        <a
          href="#"
          className="flex items-center justify-center gap-2 hover:text-primary2 transition-colors text-xs sm:text-sm"
        >
          <Image src={icon3} alt="Instagram" className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Instagram</span>
        </a>
      </div>

      <div className="flex flex-col gap-2 sm:gap-3">
        <a
          href="#"
          className="flex items-center justify-center gap-2 hover:text-primary2 transition-colors text-xs sm:text-sm"
        >
          <Image src={icon4} alt="LinkedIn" className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Behance</span>
        </a>
        <a
          href="#"
          className="flex items-center justify-center gap-2 hover:text-primary2 transition-colors text-xs sm:text-sm"
        >
          <Image src={icon5} alt="YouTube" className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Dribble</span>
        </a>
        <a
          href="#"
          className="flex items-center justify-center gap-2 hover:text-primary2 transition-colors text-xs sm:text-sm"
        >
          <Image src={icon6} alt="Pinterest" className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  </div>

  {/* Services */}
  <div className="text-center">
    <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
      Our Services
    </h3>
    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300">
      <li>Web Development</li>
      <li>App Development</li>
      <li>UI/UX Design</li>
      <li>SEO Optimization</li>
      <li>Content Writing</li>
      <li>Brand Strategy</li>
    </ul>
  </div>

  {/* Technologies */}
  <div className="text-center">
    <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
      Technologies
    </h3>
    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300">
      <li>React.js</li>
      <li>Next.js</li>
      <li>Node.js</li>
      <li>Tailwind CSS</li>
      <li>Firebase</li>
      <li>MongoDB</li>
    </ul>
  </div>

  {/* UI Design */}
  <div className="text-center">
    <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
      UI Design
    </h3>
    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300">
      <li>Define Ideas</li>
      <li>Target Audience</li>
      <li>Idea Validation</li>
      <li>Build MVP Version</li>
      <li>Competitor Research</li>
    </ul>
  </div>
</div>

</footer>





  );
}

export default Footer;
