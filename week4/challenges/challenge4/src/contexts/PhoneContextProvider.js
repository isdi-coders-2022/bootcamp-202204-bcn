import { useRef, useState } from "react";
import PhoneContext from "./PhoneContext";

const PhoneContextProvider = ({ children }) => {
  const timer = useRef(null);

  const [calling, setCalling] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState([]);

  const addDigit = (digit) => {
    if (phoneNumber.length === 9) {
      return;
    }
    setPhoneNumber([...phoneNumber, digit]);
  };

  const removeLastDigit = () => {
    setPhoneNumber([...phoneNumber].slice(0, phoneNumber.length - 1));
  };

  const resetNumber = () => {
    setPhoneNumber([]);
  };

  const call = () => {
    if (phoneNumber.length < 9) {
      return;
    }
    setCalling(true);
    timer.current = setTimeout(() => {
      hang();
    }, 5000);
  };

  const hang = () => {
    resetNumber();
    clearTimeout(timer.current);
    setCalling(false);
  };

  return (
    <PhoneContext.Provider
      value={{
        calling,
        phoneNumber,
        addDigit,
        removeLastDigit,
        resetNumber,
        call,
        hang,
      }}
    >
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
