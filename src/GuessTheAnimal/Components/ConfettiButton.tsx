import confetti from "canvas-confetti";

const ConfettiButton: React.FC = () => {
  const handleClick = () => {
    confetti({
        particleCount: 500, spread: 100, origin: { y: 0.8 }
    });
  };

  return (
    <button className="enter-button" onClick={handleClick}>
      Enter
    </button>
  );
};

export default ConfettiButton;
