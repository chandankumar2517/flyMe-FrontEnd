interface LoginFormProps {
    email: string;
    password: string;
    error: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    handleLogin: (e: React.FormEvent) => void;
  }
  
  export default function LoginForm({
    email,
    password,
    error,
    setEmail,
    setPassword,
    handleLogin,
  }: LoginFormProps) {
    return (
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md flex flex-col items-center justify-center"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">
          FlyMe Login
        </h2>
  
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}
  
        <div className="mb-5 w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
  
        <div className="mb-6 w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
  
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Sign In
        </button>
      </form>
    );
  }