const buttonStyle: React.CSSProperties = {
  backgroundColor: "#1890ff", //
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "4px",
  cursor: "pointer",
  outline: "none",
  fontSize: "16px",
  textAlign: "center",
  transition: "all 0.3s ease",
};

type ButtonProps = {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "submit",
  loading,
}) => {
  return (
    <button style={buttonStyle} type={type} disabled={loading}>
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
