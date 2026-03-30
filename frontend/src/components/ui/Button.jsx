// 汎用的なボタンコンポーネント
export const Button = ({ label, onClick, color = "#2563eb" }) => {
  return (
    <button 
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: "white",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold"
      }}
    >
      {label}
    </button>
  );
};