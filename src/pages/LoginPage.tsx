import { useState } from "react";
import LoginForm from "../components/LoginForm"; // Ensure the file exists at src/components/LoginForm.tsx

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
  
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const data = await response.json();
        setError(data.error || "Login failed.");
      } else {
        const data = await response.json();
        console.log(data.message); // Handle success (e.g., redirect or store token)
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/path-to-your-image.jpg')",
      }}
    >
      <LoginForm
        email={email}
        password={password}
        error={error}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
    </div>
  );
}