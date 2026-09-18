import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    window.location.href = "/";
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>FakeStore</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        {/* {isLoggedIn ? (
          <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
        ) : (
          <Link to="/login" style={styles.link}>Login</Link>
        )} */}
      </div>
    </nav>
  );
}

const styles = {
    nav:{
        display: "flex",
        justifyContent: "space-between",
        background: "grey",
        alignItems: "center",
        padding: "15px 40px",
        color: "#fff"
    },
    links:{ display: "flex", gap: "20px" },
    link: {color: "#fff", textDecoration: "none", fontWeight: "500"}
}

export default Navbar