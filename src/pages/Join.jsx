function Join() {
  return (
    <main style={{ padding: "140px 32px" }}>
      <h1>Join the OBC Community</h1>
      <p style={{ marginTop: "12px", maxWidth: "600px" }}>
        If you believe in our mission and want to be part of the movement,
        register with us.
      </p>

      <form style={{ marginTop: "24px", maxWidth: "400px" }}>
        <input
          type="text"
          placeholder="Full Name"
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
        />
        <button style={buttonStyle}>Register</button>
      </form>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  border: "1px solid #ccc",
  borderRadius: "4px"
};

const buttonStyle = {
  padding: "10px",
  width: "100%",
  backgroundColor: "#d32f2f",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

export default Join;
