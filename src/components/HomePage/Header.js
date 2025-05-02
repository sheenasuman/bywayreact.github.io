import cart from "../../assets/cart.svg";
import heartIcon from "../../assets/wishlist.svg";
import bellIcon from "../../assets/bell.svg";

import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isCoursePage = location.pathname.startsWith("/course");

  return (
    <>
      <header className="header">
        <nav className="nav">
          {/* Logo Section */}
          <Link to="/" className="logo">
            <img src="/logo.svg" alt="logo" className="logo-img" />
            <h3 className="logo-text">Byway</h3>
          </Link>

          {/* Navigation Icons / Buttons */}
          <div className="nav-items">
            {isCoursePage ? (
              <>
                <img src={heartIcon} alt="Favorites" className="icon" />
                <img src={cart} alt="Cart" className="icon" />
                <img src={bellIcon} alt="Notifications" className="icon" />
                <span class="avatar">J</span>
              </>
            ) : (
              <>
                <img src={cart} alt="Cart" className="icon" />

                <Link to="/login">
                  <button className="btn login-btn">Log In</button>
                </Link>

                <Link to="/signup">
                  <button className="btn signup-btn">Sign Up</button>
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>

      <style>
        {`
          .header {
            padding: 16px 48px;            
            background-color: white;          
            display:block;
          }
          .avatar-container {
               display: inline-flex;
              flex-direction: column;
              align-items: center;
             }

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: #2C3E50; /* dark blue/grey */
  color: white;
  border-radius: 50%;
  font-family: Arial, sans-serif;
  font-size: 16px;
}

.underline {
  margin-top: 4px;
  width: 36px;
  height: 4px;
  background: linear-gradient(to right, #8e2de2, #4a00e0); /* purple to blue gradient */
  border-radius: 2px;
}

          .nav {
            display: flex;
            justify-content: space-between;
          }

          .logo {
            display: flex;
            align-items: center;
            text-decoration: none;
          }

          .logo-img {
            width: 32px;
            height: 32px;
          }

          .logo-text {
            font-size: 20px;
            font-weight: 600;
            color: #333;
            margin-left: 8px;
          }

          .nav-items {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .icon {
            width: 24px;
            height: 24px;
            cursor: pointer;
            transition: transform 0.2s ease-in-out;
          }

          .icon:hover {
            transform: scale(1.1);
          }

          .btn {
            padding: 8px 16px;
            font-size: 14px;
            font-weight: 500;
            border-radius: 6px;
            border: 1px solid #ddd;
            cursor: pointer;
            transition: background 0.2s ease-in-out;
          }

          .login-btn {
            background: white;
            color: #333;
          }

          .login-btn:hover {
            background: #f5f5f5;
          }

          .signup-btn {
            background: #333;
            color: white;
          }

          .signup-btn:hover {
            background: #222;
          }
        `}
      </style>
    </>
  );
};

export default Header;
