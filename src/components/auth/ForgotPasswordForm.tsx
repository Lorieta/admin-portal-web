'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './forgot-password-form.scss';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Add your forgot password logic here
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
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
        <h1 className="forgot-password-title">Forgot Password?</h1>

        {!submitted ? (
          <>
            {/* Form */}
            <form onSubmit={handleSubmit} className="forgot-password-form">
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <div className="input-wrapper">
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
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="send-code-button" disabled={loading}>
                {loading ? 'Sending...' : 'Send Code'}
              </button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <p>Check your email for a password reset link.</p>
          </div>
        )}

        {/* Support Link */}
        <div className="support-section">
          <p className="support-text">
            Need help?{' '}
            <Link href="/support" className="support-link">
              Contact support.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
