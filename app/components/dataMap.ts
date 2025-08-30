import mysturaData from "./PortfolioData/MysturaData";
import REELConnect from "./PortfolioData/REELConnect";
import InspeCasa from "./PortfolioData/InspeCasa";
import Finsusu from "./PortfolioData/Finsusu";
import TaxiCaller from "./PortfolioData/TaxiCaller";
import CareConnect from "./PortfolioData/CareConnect";
import PakistanBooking from "./PortfolioData/PakistanBooking";

const dataMap = {
  "1": InspeCasa,
  "2": mysturaData,
  "3": REELConnect,
  "4": Finsusu,
  "5": TaxiCaller,
  "6": CareConnect,
  "7": PakistanBooking,
};

export default dataMap;
