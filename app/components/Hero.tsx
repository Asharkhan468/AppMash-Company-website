// "use client";

// import { useState, useEffect } from "react";
// import Image, { StaticImageData } from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
// import pintrest from "@/public/Pintrest Icon.png";
// import facebook from "@/public/facebook Icon.png";
// import twitter from "@/public/Twitter Icon.png";
// import youtube from "@/public/Youtube Icon.png";
// import hero1 from "@/public/hero1.png";
// import hero2 from "@/public/hero2.png";
// import hero3 from "@/public/hero3.png";
// import GetStartedForm from "./GetQuoteForm";

// interface Slide {
//   title: string;
//   subtitle: string;
//   description: string;
//   image: StaticImageData;
// }

// const slides: Slide[] = [
//   {
//     title: "CUSTOM SOFTWARE",
//     subtitle: "SOLUTION",
//     description: "We develop tailored solutions that scale with your business growth.",
//     image: hero1,
//   },
//   {
//     title: "BRAND IDENTITY",
//     subtitle: "INOVATION",
//     description: "Cross-platform mobile apps that perform smoothly and look great.",
//     image: hero3,
//   },
//   {
//     title: "AI-DRIVEN MARKETING",
//     subtitle: "EXPERIENCE",
//     description: "From design to deployment, we deliver modern, scalable apps.",
//     image: hero2,
//   },
//   {
//     title: "IMERSIVE TECH &",
//     subtitle: "INTERACTIVE DESIGN",
//     description: "Cross-platform mobile apps that perform smoothly and look great.",
//     image: hero3,
//   },
// ];

// export default function HeroCarousel() {
//   const [index, setIndex] = useState<number>(0); // always render first slide server side
//   const [isClient, setIsClient] = useState(false);
//   const [showForm, setShowForm] = useState(false);

//   // detect client side
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // autoplay only after client mount
//   useEffect(() => {
//     if (!isClient) return;
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [isClient]);

//   const goToSlide = (slideIndex: number) => {
//     setIndex(slideIndex);
//   };

//   const handleButtonClick = () => {
//     setShowForm(true);
//   };

//   const { title, subtitle, description, image } = slides[index];

//   return (
//     <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-4 sm:pt-6 pb-6 sm:pb-8">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-primary2/40 via-black to-primary2/20 z-0" />

//       {/* Main Content */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-6 sm:pb-8">
//         <div className="flex flex-col md:grid md:grid-cols-2 min-h-[600px] gap-4 sm:gap-6 md:gap-8 items-center">

//           {/* Left Content */}
//           <div className="text-center md:text-left space-y-2 sm:space-y-3 md:space-y-4 order-2 md:order-1 transition-all duration-700 ease-in-out">
//             <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-300">
//               Welcome Creative Agency
//             </p>
//             <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[50px] xl:text-[70px] font-extrabold leading-snug sm:leading-tight md:leading-tight tracking-tight text-white max-w-[90%] md:max-w-none mx-auto md:mx-0">
//               {title}
//               <br />
//               {subtitle}
//             </h1>
//             <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 max-w-md mx-auto md:mx-0">
//               {description}
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 sm:gap-3 pt-1 sm:pt-2">
//               <button
//                 onClick={handleButtonClick}
//                 className="flex items-center gap-1 sm:gap-2 bg-primary2 text-white font-semibold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-md transition hover:bg-primary2/90"
//               >
//                 Get Started
//                 <FontAwesomeIcon
//                   icon={faArrowRight}
//                   className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
//                 />
//               </button>
//               <button className="group flex items-center gap-1 sm:gap-2 border border-white hover:bg-white hover:text-black text-white font-semibold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-md transition">
//                 <FontAwesomeIcon
//                   icon={faPlayCircle}
//                   className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:text-black"
//                 />
//                 Watch Video
//               </button>
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="relative flex justify-center items-center order-1 md:order-2 w-full">
//             <div className="relative aspect-[4/5] w-full max-w-[440px] flex items-center justify-center">
//               <Image
//                 src={image}
//                 alt={`${title} ${subtitle}`}
//                 width={440}
//                 height={550}
//                 sizes="(max-width: 768px) 100vw, 440px"
//                 className="object-contain transition-opacity duration-500"
//                 priority
//               />
//             </div>

//             {/* Social Icons */}
//             <div className="hidden md:flex absolute right-[-40px] lg:right-[-60px] top-1/2 transform -translate-y-1/2 flex-col gap-3 lg:gap-4 z-20">
//               {[pintrest, facebook, twitter, youtube].map((icon, i) => (
//                 <Image
//                   key={i}
//                   src={icon}
//                   alt="Social"
//                   width={24}
//                   height={24}
//                   sizes="24px"
//                   className="w-5 h-5 lg:w-6 lg:h-6 hover:scale-110 transition-transform"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Dot Indicators */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-4">
//         <div className="flex justify-center gap-1.5 sm:gap-2">
//           {slides.map((_, slideIndex) => (
//             <button
//               key={slideIndex}
//               onClick={() => goToSlide(slideIndex)}
//               className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
//                 index === slideIndex
//                   ? "bg-primary2 w-3 sm:w-4"
//                   : "bg-white/50 hover:bg-white/70"
//               }`}
//               aria-label={`Go to slide ${slideIndex + 1}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Form Modal */}
//       {showForm && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[9999] p-4">
//           <div
//             className="relative w-full max-w-2xl bg-secondary1 rounded-xl shadow-2xl overflow-y-auto"
//             style={{ maxHeight: "95vh" }}
//           >
//             <button
//               onClick={() => setShowForm(false)}
//               className="absolute top-4 right-4 z-10 cursor-pointer text-primary1 hover:text-primary2 text-6xl font-bold transition-colors duration-200 focus:outline-none"
//               aria-label="Close form"
//             >
//               &times;
//             </button>
//             <div className="p-6 md:p-8 w-full">
//               <GetStartedForm />
//             </div>
//           </div>
//         </div>
//       )}

//       {/* PurgeCSS safelist */}
//       <div className="hidden bg-primary2 bg-white/50 min-h-[600px] aspect-[4/5] max-w-[440px]"></div>
//     </section>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Image, { StaticImageData } from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

// import pintrest from "@/public/Pintrest Icon.png";
// import facebook from "@/public/facebook Icon.png";
// import twitter from "@/public/Twitter Icon.png";
// import youtube from "@/public/Youtube Icon.png";
// import hero1 from "@/public/hero1.png";
// import hero2 from "@/public/hero2.png";
// import hero3 from "@/public/hero3.png";
// import GetStartedForm from "./GetQuoteForm";

// interface Slide {
//   title: string;
//   subtitle: string;
//   description: string;
//   image: StaticImageData;
// }

// const slides: Slide[] = [
//   {
//     title: "CUSTOM SOFTWARE",
//     subtitle: "SOLUTION",
//     description: "We develop tailored solutions that scale with your business growth.",
//     image: hero1,
//   },
//   {
//     title: "BRAND IDENTITY",
//     subtitle: "INNOVATION",
//     description: "Cross-platform mobile apps that perform smoothly and look great.",
//     image: hero3,
//   },
//   {
//     title: "AI-DRIVEN MARKETING",
//     subtitle: "EXPERIENCE",
//     description: "From design to deployment, we deliver modern, scalable apps.",
//     image: hero2,
//   },
//   {
//     title: "IMMERSIVE TECH &",
//     subtitle: "INTERACTIVE DESIGN",
//     description: "Cross-platform mobile apps that perform smoothly and look great.",
//     image: hero3,
//   },
// ];

// export default function HeroCarousel() {
//   const [index, setIndex] = useState(0);
//   const [showForm, setShowForm] = useState(false);

//   // Autoplay
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const { title, subtitle, description, image } = slides[index];

//   return (
//     <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-4 sm:pt-6 pb-6 sm:pb-8">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-primary2/40 via-black to-primary2/20 z-0" />

//       {/* Main Content */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-6 sm:pb-8">
//         <div className="flex flex-col md:grid md:grid-cols-2 min-h-[600px] gap-4 sm:gap-6 md:gap-8 items-center">

//           {/* Left Content */}
//           <div className="text-center md:text-left space-y-2 sm:space-y-3 md:space-y-4 order-2 md:order-1 transition-all duration-700 ease-in-out">
//             <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-300">
//               Welcome Creative Agency
//             </p>
//             <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[50px] xl:text-[70px] font-extrabold leading-snug sm:leading-tight md:leading-tight tracking-tight text-white max-w-[90%] md:max-w-none mx-auto md:mx-0">
//               {title}
//               <br />
//               {subtitle}
//             </h1>
//             <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 max-w-md mx-auto md:mx-0">
//               {description}
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 sm:gap-3 pt-1 sm:pt-2">
//               <button
//                 onClick={() => setShowForm(true)}
//                 className="flex items-center gap-1 sm:gap-2 bg-primary2 text-white font-semibold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-md transition hover:bg-primary2/90"
//               >
//                 Get Started
//                 <FontAwesomeIcon
//                   icon={faArrowRight}
//                   className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
//                 />
//               </button>
//               <button className="group flex items-center gap-1 sm:gap-2 border border-white hover:bg-white hover:text-black text-white font-semibold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-md transition">
//                 <FontAwesomeIcon
//                   icon={faPlayCircle}
//                   className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:text-black"
//                 />
//                 Watch Video
//               </button>
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="relative flex justify-center items-center order-1 md:order-2 w-full">
//             {/* <div className="relative w-full max-w-[440px] min-h-[300px] md:min-h-[550px]">
//               <Image
//                 src={image}
//                 alt={`${title} ${subtitle}`}
//                 fill
//                 sizes="(max-width: 768px) 100vw, 440px"
//                 className="object-contain transition-opacity duration-500"
//                 priority
//               />
//             </div> */}

//             <div className="relative w-full max-w-[440px] min-h-[300px] md:min-h-[550px]">
//   <Image
//     src={image}
//     alt={`${title} ${subtitle}`}
//     fill
//     className="object-contain"
//     priority
//   />
// </div>

//             {/* Social Icons */}
//             <div className="hidden md:flex absolute right-[-40px] lg:right-[-60px] top-1/2 -translate-y-1/2 flex-col gap-3 lg:gap-4 z-20">
//               {[pintrest, facebook, twitter, youtube].map((icon, i) => (
//                 <Image
//                   key={i}
//                   src={icon}
//                   alt="Social"
//                   width={24}
//                   height={24}
//                   sizes="24px"
//                   className="w-5 h-5 lg:w-6 lg:h-6 hover:scale-110 transition-transform"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Dot Indicators */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-4">
//         <div className="flex justify-center gap-1.5 sm:gap-2">
//           {slides.map((_, slideIndex) => (
//             <button
//               key={slideIndex}
//               onClick={() => setIndex(slideIndex)}
//               className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
//                 index === slideIndex
//                   ? "bg-primary2 w-3 sm:w-4"
//                   : "bg-white/50 hover:bg-white/70"
//               }`}
//               aria-label={`Go to slide ${slideIndex + 1}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Form Modal */}
//       {showForm && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[9999] p-4">
//           <div
//             className="relative w-full max-w-2xl bg-secondary1 rounded-xl shadow-2xl overflow-y-auto"
//             style={{ maxHeight: "95vh" }}
//           >
//             <button
//               onClick={() => setShowForm(false)}
//               className="absolute top-4 right-4 z-10 cursor-pointer text-primary1 hover:text-primary2 text-6xl font-bold transition-colors duration-200 focus:outline-none"
//               aria-label="Close form"
//             >
//               &times;
//             </button>
//             <div className="p-6 md:p-8 w-full">
//               <GetStartedForm />
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }





// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image, { StaticImageData } from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

// import pintrest from "@/public/Pintrest Icon.png";
// import facebook from "@/public/facebook Icon.png";
// import twitter from "@/public/Twitter Icon.png";
// import youtube from "@/public/Youtube Icon.png";
// import hero1 from "@/public/hero1.png";
// import hero2 from "@/public/hero2.png";
// import hero3 from "@/public/hero3.png";
// import GetStartedForm from "./GetQuoteForm";

// interface Slide {
//   title: string;
//   subtitle: string;
//   description: string;
//   image: StaticImageData;
// }

// const slides: Slide[] = [
//   {
//     title: "CUSTOM SOFTWARE",
//     subtitle: "SOLUTION",
//     description:
//       "We develop tailored solutions that scale with your business growth.",
//     image: hero1,
//   },
//   {
//     title: "BRAND IDENTITY",
//     subtitle: "INNOVATION",
//     description:
//       "Cross-platform mobile apps that perform smoothly and look great.",
//     image: hero3,
//   },
//   {
//     title: "AI-DRIVEN MARKETING",
//     subtitle: "EXPERIENCE",
//     description: "From design to deployment, we deliver modern, scalable apps.",
//     image: hero2,
//   },
//   {
//     title: "IMMERSIVE TECH &",
//     subtitle: "INTERACTIVE DESIGN",
//     description:
//       "Cross-platform mobile apps that perform smoothly and look great.",
//     image: hero3,
//   },
// ];

// export default function HeroCarousel() {
//   const [index, setIndex] = useState(0);
//   const [showForm, setShowForm] = useState(false);

//   const imgRef = useRef<HTMLImageElement>(null);

//   // Autoplay slides
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

  
//   const { title, subtitle, description, image } = slides[index];

//   return (
//     <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-4 sm:pt-6 pb-6 sm:pb-8">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-primary2/40 via-black to-primary2/20 z-0" />

//       {/* Main Content */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-6 sm:pb-8">
//         <div className="flex flex-col md:grid md:grid-cols-2 min-h-[600px] gap-4 sm:gap-6 md:gap-8 items-center">
//           {/* Left Content */}
//           <div className="text-center md:text-left space-y-2 sm:space-y-3 md:space-y-4 order-2 md:order-1">
//             <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-300">
//               Welcome Creative Agency
//             </p>
//             <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[50px] xl:text-[70px] font-extrabold leading-snug sm:leading-tight md:leading-tight tracking-tight text-white max-w-[90%] md:max-w-none mx-auto md:mx-0">
//               {title}
//               <br />
//               {subtitle}
//             </h1>
//             <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 max-w-md mx-auto md:mx-0">
//               {description}
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 sm:gap-3 pt-1 sm:pt-2">
//               <button
//                 onClick={() => setShowForm(true)}
//                 className="flex items-center gap-1 sm:gap-2 bg-primary2 text-white font-semibold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-md transition hover:bg-primary2/90"
//               >
//                 Get Started
//                 <FontAwesomeIcon
//                   icon={faArrowRight}
//                   className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
//                 />
//               </button>
//               <button className="group flex items-center gap-1 sm:gap-2 border border-white hover:bg-white hover:text-black text-white font-semibold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-md transition">
//                 <FontAwesomeIcon
//                   icon={faPlayCircle}
//                   className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:text-black"
//                 />
//                 Watch Video
//               </button>
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="relative flex justify-center items-center order-1 md:order-2 w-full">
//             <div className="relative w-[300px] h-[375px] sm:w-[440px] sm:h-[550px] min-w-[300px] sm:min-w-[440px]">
//               <Image
//   src={image}
//   alt={`${title} ${subtitle}`}
//   width={584}
//   height={494}
//   className="object-contain"
//   priority
//   unoptimized
// />
//             </div>

//             {/* Social Icons */}
//             <div className="hidden md:flex absolute right-[-30px] lg:right-[-50px] top-1/2 transform -translate-y-1/2 flex-col gap-3 lg:gap-4 z-20">
//               {[pintrest, facebook, twitter, youtube].map((icon, i) => (
//                 <Image
//                   key={i}
//                   src={icon}
//                   alt="Social"
//                   width={24}
//                   height={24}
//                   className="w-5 h-5 lg:w-6 lg:h-6 hover:scale-110 transition-transform"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Dot Indicators */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-4">
//         <div className="flex justify-center gap-1.5 sm:gap-2">
//           {slides.map((_, slideIndex) => (
//             <button
//               key={slideIndex}
//               onClick={() => setIndex(slideIndex)}
//               className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
//                 index === slideIndex
//                   ? "bg-primary2 w-3 sm:w-4"
//                   : "bg-white/50 hover:bg-white/70"
//               }`}
//               aria-label={`Go to slide ${slideIndex + 1}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Form Modal */}
//       {showForm && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[9999] p-4">
//           <div
//             className="relative w-full max-w-2xl bg-secondary1 rounded-xl shadow-2xl overflow-y-auto"
//             style={{ maxHeight: "95vh" }}
//           >
//             <button
//               onClick={() => setShowForm(false)}
//               className="absolute top-4 right-4 z-10 cursor-pointer text-primary1 hover:text-primary2 text-6xl font-bold transition-colors duration-200"
//               aria-label="Close form"
//             >
//               &times;
//             </button>
//             <div className="p-6 md:p-8 w-full">
//               <GetStartedForm />
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }










"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

import pintrest from "@/public/Pintrest Icon.png";
import facebook from "@/public/facebook Icon.png";
import twitter from "@/public/Twitter Icon.png";
import youtube from "@/public/Youtube Icon.png";
import hero1 from "@/public/hero1.png";
import hero2 from "@/public/hero2.png";
import hero3 from "@/public/hero3.png";

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
}

const slides: Slide[] = [
  {
    title: "CUSTOM SOFTWARE",
    subtitle: "SOLUTION",
    description:
      "We develop tailored solutions that scale with your business growth.",
    image: hero1,
  },
  {
    title: "BRAND IDENTITY",
    subtitle: "INNOVATION",
    description:
      "Cross-platform mobile apps that perform smoothly and look great.",
    image: hero3,
  },
  {
    title: "AI-DRIVEN MARKETING",
    subtitle: "EXPERIENCE",
    description: "From design to deployment, we deliver modern, scalable apps.",
    image: hero2,
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { title, subtitle, description, image } = slides[index];

  return (
   <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black py-12">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-primary2/40 via-black to-primary2/20 z-0" />

  {/* Main Content Container */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
      {/* Text Content - Left Side */}
      <div className="flex-1 space-y-6 lg:space-y-8 px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-300">
          Welcome Creative Agency
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          {title}
          <br />
          {subtitle}
        </h1>
        <p className="text-lg text-gray-300 max-w-xl">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-primary2 text-white font-semibold px-6 py-3 rounded-md hover:bg-primary2/90 transition-colors"
          >
            Get Started
          </button>
          <button className="group flex items-center gap-2 border border-white hover:bg-white hover:text-black text-white font-semibold px-6 py-3 rounded-md transition-colors">
            Watch Video
          </button>
        </div>
      </div>

      {/* Image Content - Right Side */}
      <div className="flex-1 flex justify-center relative">
        <div className="w-full max-w-md xl:max-w-lg aspect-[3/4] relative">
          <Image
            src={image}
            alt={`${title} ${subtitle}`}
            fill
            priority
            className="object-contain rounded-lg"
          />
        </div>

        {/* Social Icons */}
        <div className="hidden lg:flex absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 flex-col gap-5 z-20">
          {[pintrest, facebook, twitter, youtube].map((icon, i) => (
            <Image
              key={i}
              src={icon}
              alt="Social"
              width={24}
              height={24}
              className="hover:scale-110 transition-transform cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Dot Indicators */}
  <div className="relative z-10 w-full max-w-7xl mx-auto mt-8 lg:mt-12">
    <div className="flex justify-center gap-3">
      {slides.map((_, slideIndex) => (
        <button
          key={slideIndex}
          onClick={() => setIndex(slideIndex)}
          className={`w-3 h-3 rounded-full transition-all ${
            index === slideIndex
              ? "bg-primary2 w-6"
              : "bg-white/50 hover:bg-white/70"
          }`}
        />
      ))}
    </div>
  </div>

  {/* Hidden block to prevent purge */}
  <div className="hidden">
    lg:flex-row flex-col justify-center items-center gap-12 xl:gap-16 space-y-6 lg:space-y-8
  </div>
</section>
  );
}
