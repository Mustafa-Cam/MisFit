import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Burada giriş bilgilerini doğrulamak için bir işlem yapabilirsiniz.
    if (username === "admin" && password === "password") {
      // Başarılı giriş işlemi
      alert("Giriş başarılı!");
    } else {
      // Hatalı giriş
      setError("Kullanıcı adı veya şifre yanlış!");
    }
  };

  return (
    <div className="login-page">
      <Header />
      <div className="login-container">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
        <div className="register-text">
          Don't have an account?{" "}
          <a href="/register" style={{ color: "blue"}}>
            Register
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
