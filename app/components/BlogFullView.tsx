import Image from "next/image";

export default function BlogPage({
  mainImage,
  title,
  authorImage,
  authorName,
  date,
  introduction,
  benefits,
  realExample,
}:any) {
  return (
 <div className="relative mt-[80px] bg-neutral2 w-full overflow-hidden pt-6 sm:pt-8 pb-8 sm:pb-12">
  <div className="max-w-6xl mb-10 mx-auto px-3 sm:px-4 lg:px-6">

    {/* Top Image */}
    <div className="mb-6 relative w-full h-52 xs:h-64 sm:h-80 md:h-96 lg:h-[500px]">
      <Image
        src={mainImage}
        alt={title}
        fill
        className="rounded-xl shadow-lg object-cover"
        priority
      />
    </div>

    {/* Heading */}
    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 leading-snug">
      {title}
    </h1>

    {/* User Info */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div className="flex items-center gap-4">
        <div className="relative w-10 h-10 sm:w-12 sm:h-12">
          <Image
            src={authorImage}
            alt={authorName}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <span className="text-secondary1 font-medium text-sm sm:text-base">{authorName}</span>
      </div>
      <span className="text-secondary1 text-xs sm:text-sm">{date}</span>
    </div>

    {/* Introduction */}
    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary2 mb-4">
      Introduction
    </h2>
    <p className="text-secondary1 mb-8 leading-relaxed text-sm sm:text-base">
      {introduction}
    </p>

    {/* Key Benefits */}
    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary2 mb-4">
      Key Benefits
    </h2>
    <ul className="list-disc list-inside text-secondary1 mb-8 space-y-2 text-sm sm:text-base">
      {benefits?.map((benefit: string, index: number) => (
        <li key={index}>{benefit}</li>
      ))}
    </ul>

    {/* Real Example */}
    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary2 mb-4">
      Real Example
    </h2>
    <p className="text-secondary1 leading-relaxed text-sm sm:text-base">
      {realExample}
    </p>
    
  </div>
</div>

  );
}
