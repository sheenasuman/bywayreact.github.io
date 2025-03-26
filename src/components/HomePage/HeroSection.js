import modelImage1 from "../../assets/Group 8.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Unlock Your Potential with Byway</h1>
          <p className="hero-text">
            Welcome to Byway, where learning knows no bounds. We believe that
            education is the key to personal and professional growth, and we are
            here to guide you on your journey to success.
          </p>
          <Link to="/course">
            <button className="hero-button">Start your instructor journey</button>
          </Link>
        </div>

        <div className="hero-image-container">
          <img src={modelImage1} alt="Model 1" className="hero-image" />
        </div>
      </div>

      <style>
        {`
          .hero-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 32px;
            margin-left: 20px;
          }

          @media (min-width: 768px) {
            .hero-container {
              flex-direction: row;
            }
          }

          .hero-content {
            max-width: 600px;
            margin-bottom: 20px;
          }

          .hero-title {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 16px;
          }

          @media (min-width: 768px) {
            .hero-title {
              font-size: 3rem;
            }
          }

          .hero-text {
            color: #334155;
            font-size: 1rem;
            margin-bottom: 16px;
          }

          @media (min-width: 768px) {
            .hero-text {
              font-size: 1.125rem;
            }
          }

          .hero-button {
            background-color: #3b82f6;
            color: white;
            padding: 10px 24px;
            border-radius: 6px;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.3s ease-in-out;
          }

          .hero-button:hover {
            background-color: #2563eb;
          }

          .hero-image-container {
            display: flex;
            justify-content: center;
            width: 100%;
          }

          .hero-image {
            width: 60%;
            transition: transform 0.3s ease-in-out;
          }

          .hero-image:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </>
  );
};

export default HeroSection;
