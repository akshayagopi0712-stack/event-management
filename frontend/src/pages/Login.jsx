import { useState } from "react";

function Login({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    alert("Login successful!");

    setEmail("");
    setPassword("");
    setPage("home");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <button onClick={() => setPage("home")}>
          ← Back to Home
        </button>

        <h1>Login</h1>

        <p>Login to your EventHub account</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;