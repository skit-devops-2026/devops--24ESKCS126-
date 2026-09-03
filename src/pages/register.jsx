import './register.css';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/overview');
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
                                placeholder="Enter your name"
                                required
                            />
                        </div>

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
                                placeholder="Create a password"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>

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