import { useContext } from "react";
import PhoneContext from "../../contexts/PhoneContext";
import Action from "../Action/Action";
import Display from "../Display/Display";

const Actions = () => {
  const { calling, phoneNumber, call, hang } = useContext(PhoneContext);

  return (
    <>
      <Display />
      {!calling && (
        <Action
          action="call"
          isActive={phoneNumber.length === 9}
          actionOnClick={call}
        />
      )}
      {calling && <Action action="hang" isActive={true} actionOnClick={hang} />}
    </>
  );
};

export default Actions;
