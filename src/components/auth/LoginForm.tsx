'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './login-form.scss';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return 'Email is required';
    if (!emailRegex.test(value)) return 'Please enter a valid email address';
    return '';
  };

  const validatePassword = (value: string) => {
    if (!value) return 'Password is required';
    if (value.length < 6) return 'Password must be at least 6 characters';
    return '';
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    const error = validateEmail(value);
    setErrors((prev) => ({ ...prev, email: error }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    const error = validatePassword(value);
    setErrors((prev) => ({ ...prev, password: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
      });
      return;
    }

    setLoading(true);
    // Add your login logic here
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Logo */}
        <div className="logo-container">
          <Image
            src="/images/zynappse_icon.svg"
            alt="Zynappse Logo"
            className="logo"
            width={80}
            height={80}
          />
        </div>

        {/* Heading */}
        <h1 className="login-title">
          Sign in to <span className="zynappse-brand">Zynappse</span>
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="login-form">
          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className={`input-wrapper ${errors.email ? 'input-error' : ''}`}>
              <svg
                className="input-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4C1.45 4 1 4.45 1 5V15C1 15.55 1.45 16 2 16H18C18.55 16 19 15.55 19 15V5C19 4.45 18.55 4 18 4H2ZM18 5L10 10.25L2 5H18Z"
                  fill="#999999"
                />
              </svg>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="user@example.com"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className={`input-wrapper ${errors.password ? 'input-error' : ''}`}>
              <svg
                className="input-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 9V7C5 4.24 7.24 2 10 2C12.76 2 15 4.24 15 7V9C15.55 9 16 9.45 16 10V18C16 18.55 15.55 19 15 19H5C4.45 19 4 18.55 4 18V10C4 9.45 4.45 9 5 9ZM14 9V7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7V9H14ZM10 14C9.45 14 9 14.45 9 15C9 15.55 9.45 16 10 16C10.55 16 11 15.55 11 15C11 14.45 10.55 14 10 14Z"
                  fill="#999999"
                />
              </svg>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="form-input"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 4C5.73 4 2.2 6.61 1 10.4C2.2 14.19 5.73 16.8 10 16.8C14.27 16.8 17.8 14.19 19 10.4C17.8 6.61 14.27 4 10 4ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15ZM10 7C8.34 7 7 8.34 7 10C7 11.66 8.34 13 10 13C11.66 13 13 11.66 13 10C13 8.34 11.66 7 10 7Z"
                      fill="#666666"
                    />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10.85 11.66L10.01 12.5C10.01 13.3 9.33 14 8.53 14C7.73 14 7.05 13.3 7.05 12.5C7.05 11.7 7.73 11.02 8.53 11.02L9.37 10.18C8.28 10.31 7.5 11.28 7.5 12.5C7.5 13.88 8.62 15 10 15C11.18 15 12.15 14.22 12.28 13.13L10.85 11.66ZM19.58 10.88L18.51 9.24C18.91 8.49 19.16 7.64 19.16 6.75C19.16 4.49 17.41 2.75 15.15 2.75C14.26 2.75 13.41 3 12.66 3.4L11.5 1.86C11.25 1.56 10.87 1.56 10.62 1.86L3.36 11.12C3.11 11.41 3.11 11.83 3.36 12.12L4.43 13.76C4.03 14.51 3.78 15.36 3.78 16.25C3.78 18.51 5.53 20.25 7.79 20.25C8.68 20.25 9.53 20 10.28 19.6L11.44 21.14C11.69 21.44 12.07 21.44 12.32 21.14L19.58 11.88C19.83 11.59 19.83 11.17 19.58 10.88ZM7.79 18.75C6.41 18.75 5.28 17.62 5.28 16.25C5.28 15.75 5.41 15.28 5.63 14.87L7.08 16.99C7.33 17.29 7.71 17.29 7.96 16.99L8.8 15.87C8.74 15.88 8.68 15.9 8.61 15.9C7.55 15.9 6.68 15.03 6.68 13.97C6.68 13.9 6.69 13.84 6.71 13.77L4.46 10.75C4.35 10.91 4.27 11.09 4.22 11.28L10 20.52L7.79 18.75ZM15.15 4.25C16.53 4.25 17.66 5.38 17.66 6.75C17.66 7.25 17.53 7.72 17.31 8.13L15.86 6.01C15.61 5.71 15.23 5.71 14.98 6.01L14.14 7.13C14.2 7.12 14.26 7.1 14.33 7.1C15.39 7.1 16.26 7.97 16.26 9.03C16.26 9.1 16.25 9.16 16.23 9.23L18.48 12.25C18.59 12.09 18.67 11.91 18.72 11.72L12.94 2.48L15.15 4.25Z"
                      fill="#666666"
                    />
                  </svg>
                )}
              </button>
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>}
            <Link href="/forgot-password" className="forgot-password-link">
              forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="signup-section">
          <p className="signup-text">
            Didn`&apos;`t have an account?{' '}
            <Link href="/signup" className="signup-link">
              Get started
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
