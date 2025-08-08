import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function ContactCardSection() {
  return (
    <section className="flex flex-col w-full px-6 pt-6 sm:pt-8 pb-8 sm:pb-12 gap-8 justify-center">
      <div className="flex flex-wrap justify-between items-center mt-6 gap-6">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center space-y-2 bg-neutral3 flex-1 max-w-sm p-6 rounded-lg shadow-md mx-2">
          <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <h3 className="font-semibold text-lg">Email</h3>
          <p className="text-secondary1">ashar@example.com</p>
          <p className="text-secondary1">ashar@example.com</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center space-y-2 bg-neutral3 flex-1 max-w-sm p-6 rounded-lg shadow-md mx-2">
          <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <h3 className="font-semibold text-lg">Phone</h3>
          <p className="text-secondary1">+92 300 1234567</p>
          <p className="text-secondary1">+92 300 1234567</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center space-y-2 bg-neutral3 flex-1 max-w-sm p-6 rounded-lg shadow-md mx-2">
          <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl">
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <h3 className="font-semibold text-lg">Location</h3>
          <p className="text-secondary1">Karachi, Pakistan</p>
          <p className="text-secondary1">Karachi, Pakistan</p>
        </div>
      </div>
    </section>
  );
}

export default ContactCardSection;
