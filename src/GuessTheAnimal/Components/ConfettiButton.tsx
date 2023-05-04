import confetti from "canvas-confetti";

const ConfettiButton: React.FC = () => {
  const handleClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <button className="enter-button" onClick={handleClick}>
      Enter
    </button>
  );
};

export default ConfettiButton;
