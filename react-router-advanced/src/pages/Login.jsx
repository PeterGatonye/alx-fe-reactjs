// src/pages/Login.jsx
function Login() {
  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    window.location.href = "/profile";
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
