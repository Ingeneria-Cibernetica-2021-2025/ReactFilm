import React, { useState, FormEvent } from 'react';
import style from './Styles';
// Define types for the state
interface LoginFormState {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  // State for storing input values and errors
  const [formData, setFormData] = useState<LoginFormState>({
    username: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { username, password } = formData;

    // Basic form validation
    if (username === '' || password === '') {
      setError('Both fields are required');
    } else {
      setError(null);
      // Perform login action here (e.g., make API call)
      console.log('Logged in successfully with:', { username, password });
    }
  };

  return (
    <div style={style.container}>
      <form onSubmit={handleSubmit} style={style.form}>
        <h2>Login</h2>

        {/* Username Input */}
        <div style={style.inputContainer}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={style.input}
          />
        </div>

        {/* Password Input */}
        <div style={style.inputContainer}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={style.input}
          />
        </div>

        {/* Error message */}
        {error && <div style={style.error}>{error}</div>}

        {/* Login button */}
        <button type="submit" style={style.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;