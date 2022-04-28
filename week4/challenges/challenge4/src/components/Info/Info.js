import { useContext } from "react";
import PhoneContext from "../../contexts/PhoneContext";

const Info = () => {
  const { calling } = useContext(PhoneContext);

  return (
    <>
      <span className={`message${calling ? "" : " off"}`}>Calling...</span>
    </>
  );
};

export default Info;
