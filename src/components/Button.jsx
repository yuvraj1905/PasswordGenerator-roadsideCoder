export const Button = ({ text, cb, className = "" }) => {
  return (
    <button onClick={cb} className={className}>
      {text}
    </button>
  );
};
