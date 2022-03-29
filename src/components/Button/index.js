import "./styles.css";

const Button = ({ children, onClick }) => (
  <button className="buttonComponent" onClick={onClick}>
    {children}
  </button>
);

export default Button;
