const Key = ({ text, big = false, disabled, actionOnClick }) => {
  return (
    <li>
      <button
        className={`key${big ? " big" : ""}`}
        onClick={actionOnClick}
        disabled={disabled}
      >
        {text}
      </button>
    </li>
  );
};

export default Key;
