import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function ContactCardSection() {
  return (
   <section

  className="relative mb-5 w-full flex flex-col items-center overflow-hidden pt-6 sm:pt-8 pb-8 sm:pb-12"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    {/* Cards Grid */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      
      {/* Card 1 */}
      <div className="flex flex-col items-center text-center bg-neutral3 rounded-lg shadow-md hover:shadow-lg transition-shadow p-7">
        <div className="bg-red-600 rounded-full w-14 h-14 flex items-center justify-center text-white text-xl mb-3">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <h3 className="font-semibold text-lg">Email</h3>
        <p className="text-secondary1">info@themexriver.com</p>
        <p className="text-secondary1">support@themexriver.com</p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center text-center bg-neutral3 rounded-lg shadow-md hover:shadow-lg transition-shadow p-7">
        <div className="bg-red-600 rounded-full w-14 h-14 flex items-center justify-center text-white text-xl mb-3">
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <h3 className="font-semibold text-lg">Phone</h3>
        <p className="text-secondary1">+92 300 1234567</p>
        <p className="text-secondary1">+92 300 1234567</p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center text-center bg-neutral3 rounded-lg shadow-md hover:shadow-lg transition-shadow p-7">
        <div className="bg-red-600 rounded-full w-14 h-14 flex items-center justify-center text-white text-xl mb-3">
          <FontAwesomeIcon icon={faLocationDot} />
        </div>
        <h3 className="font-semibold text-lg">Location</h3>
        <p className="text-secondary1">
          The Queen’s Walk, Bishop’s, London SE1 7PB, United Kingdom.
        </p>
      </div>
    </div>
  </div>
</section>




  );
}

export default ContactCardSection;
