import "./Hangman.css";

const Hangman = () => {
  return (
    <div className="hangman-container">
      <svg className="hangman" viewBox="0 0 96 96" width="300" height="300">
        <line className="stage11" x1="62" y1="70" x2="56" y2="56"></line>
        <line className="stage10" x1="50" y1="70" x2="56" y2="56"></line>
        <line className="stage9" x1="68" y1="46" x2="56" y2="40"></line>
        <line className="stage8" x1="44" y1="46" x2="56" y2="40"></line>
        <line className="stage7" x1="56" y1="40" x2="56" y2="56"></line>
        <circle
          className="stage6"
          cx="56"
          cy="34"
          r="6"
          fill="#bee5eb"
        ></circle>
        <line className="stage5" x1="56" y1="16" x2="56" y2="28"></line>
        <line className="stage4" x1="24" y1="24" x2="32" y2="16"></line>
        <line className="stage3" x1="21" y1="16" x2="60" y2="16"></line>
        <line className="stage2" x1="24" y1="80" x2="24" y2="16"></line>
        <line className="stage1" x1="16" y1="80" x2="32" y2="80"></line>
      </svg>
    </div>
  );
};

export default Hangman;
