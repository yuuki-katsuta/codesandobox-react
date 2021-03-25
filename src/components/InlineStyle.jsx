export const Inlinestyle = () => {
  const containerStyle = {
    border: "solid",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  };
  const titleStyle = {
    margin: 0,
    color: "#3d84a8"
  };
  const buttonStyle = {
    border: "none"
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>Inlinestyles</p>
      <button style={buttonStyle}>FIGHT !!</button>
    </div>
  );
};
