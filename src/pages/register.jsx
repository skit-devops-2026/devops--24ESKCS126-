import { useState } from 'react';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (!name || !email || !password || !confirmPassword) {
            setError('Please fill in all fields.');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        setError('');
        navigate('/login');
    };
    return (
        <div className="register-page">

            <div className="register-left">
                <Link to="/" className="register-logo">
                    <span>🚀</span>
                    <span>DSAForge</span>
                </Link>

                <div className="register-intro">
                    <h1>
                        Start
                        <br />
                        <span>building.</span>
                    </h1>

                    <p>
                        Create your DSAForge account and get a
                        personalized path to improve your
                        problem-solving skills.
                    </p>
                </div>
            </div>

            <div className="register-right">

                <div className="register-box">

                    <h2>Create your account</h2>

                    <p className="register-subtitle">
                        Start your DSA journey today.
                    </p>

                    <form onSubmit={handleRegister}>

                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Create a password"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>
                        {error && (
                            <p className="form-error">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="register-button"
                        >
                            Create Account
                        </button>

                    </form>

                    <p className="login-text">
                        Already have an account?
                        <Link to="/login"> Login</Link>
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Register;