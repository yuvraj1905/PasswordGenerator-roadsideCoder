export const CheckBox = ({ text, cb, checked }) => {
  return (
    <span className="checkbox">
      <input type="checkbox" checked={checked} onChange={cb} id={text} />
      <label htmlFor={text}>{text}</label>
    </span>
  );
};
