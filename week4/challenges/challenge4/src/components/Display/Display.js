import { useContext } from "react";
import PhoneContext from "../../contexts/PhoneContext";

const Display = () => {
  const { phoneNumber } = useContext(PhoneContext);
  return <span className="number">{phoneNumber}</span>;
};

export default Display;
