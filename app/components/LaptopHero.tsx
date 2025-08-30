import Image from "next/image";

interface LaptopHeaderProps {
  bgImage: string;
  heading: string;
  description: string;
  image: string;
  hero?: boolean;
}

export default function LaptopHeader({
  bgImage,
  heading,
  description,
  image,
  hero = false,
}: LaptopHeaderProps) {
  return (
    <section
      className={`relative w-full flex items-center overflow-hidden bg-cover bg-center ${
        hero ? "h-screen" : "py-10 sm:py-16"
      }`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full flex flex-col md:flex-row items-center">
        {/* Left Side: Heading & Text */}
        <div className="text-white w-full ml-12 md:w-1/2 px-4 sm:px-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-snug tracking-tight break-words">
            {heading}
          </h1>
          <p className="text-sm sm:text-base md:text-lg opacity-90 mt-4 max-w-full sm:max-w-[90%] md:max-w-[85%] leading-relaxed mx-auto md:mx-0">
            {description}
          </p>
        </div>

        {/* Right Side: Full End Image */}
        <div
          className={`w-full md:w-1/2 flex justify-end ${
            hero ? "mt-12" : ""
          }`}
        >
          <Image
            src={image}
            alt="Laptop Preview"
            width={700}
            height={600}
            className="rounded-lg w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
