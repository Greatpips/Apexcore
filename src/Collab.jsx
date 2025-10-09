import Translogo from "./Img/trans-logo.png";
import GtcLogo from "./Img/dark-logo.webp";
import { FaHandshake } from "react-icons/fa";

function Collab() {
  return (
    <div className=" p-2 pt-[2em] md:pt-[4em] lg:pt-[6em]   bg-gray-100 flex flex-col items-center justify-center font-sans">
      <h1 className="text-xl sm:text-2xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2 sm:mb-4 text-center">
        In Collab with GTCFX
      </h1>
      <div className="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-6">
        <div className="flex-shrink-0">
          <img
            src={Translogo}
            alt="Translogo"
            className="h-20 sm:h-16 md:h-70 w-auto object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/100x100/ef4444/ffffff?text=Image+Error";
            }}
          />
        </div>
        <div className="flex-shrink-0">
          <FaHandshake
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-600"
            aria-label="Handshake Icon"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src={GtcLogo}
            alt="GTCFX Logo"
            className="h-12 sm:h-12 md:h-16 w-auto object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/100x100/ef4444/ffffff?text=Image+Error";
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Collab;