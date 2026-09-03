import './login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/overview');
    };

    return (
        <div className="login-page">

            <div className="login-left">
                <Link to="/" className="login-logo">
                    <span>🚀</span>
                    <span>DSAForge</span>
                </Link>

                <div className="login-intro">
                    <h1>
                        Welcome
                        <br />
                        <span>back.</span>
                    </h1>

                    <p>
                        Continue your DSA journey and keep
                        building your problem-solving skills.
                    </p>
                </div>
            </div>

            <div className="login-right">

                <div className="login-box">

                    <h2>Login to DSAForge</h2>

                    <p className="login-subtitle">
                        Enter your details to continue.
                    </p>

                    <form onSubmit={handleLogin}>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div className="login-options">
                            <label>
                                <input type="checkbox" />
                                Remember me
                            </label>

                            <button
                                type="button"
                                className="forgot-password"
                            >
                                Forgot password?
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="login-button"
                        >
                            Login
                        </button>

                    </form>

                    <div className="login-divider">
                        <span>or</span>
                    </div>

                    <p className="register-text">
                        Don't have an account?
                        <Link to="/register"> Create one</Link>
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Login;