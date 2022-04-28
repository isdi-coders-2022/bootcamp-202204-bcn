const Action = ({ action, isActive, actionOnClick }) => {
  const clickAnchor = (event) => {
    event.preventDefault();
    actionOnClick();
  };

  return (
    <>
      <a
        href={action}
        className={`${action}${isActive ? " active" : ""}`}
        onClick={clickAnchor}
      >
        {action[0]?.toUpperCase() + action.slice(1)}
      </a>
    </>
  );
};

export default Action;
