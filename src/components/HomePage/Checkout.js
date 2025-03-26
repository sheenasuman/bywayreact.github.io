import learner from "../../assets/model-6.jpg";
import instructor from "../../assets/model-4.jpg";
import rightarr from "../../assets/arrow-right.svg";
import { Link } from "react-router-dom";

const handleClick = () => {
  window.scrollTo(0, 0);
};

const Checkout = () => {
  return (
    <>
      <style>
        {`
          .checkout-container {
            padding: 2rem;
          
          }

          .checkout-section {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          @media (min-width: 768px) {
            .checkout-section {
              flex-direction: row;
              gap: 2rem;
            }
          }

          .checkout-image {
            width: 100%;
            max-width: 40%;
            object-fit: cover;
          }

          .checkout-content {
            width: 100%;
            max-width: 60%;
            line-height: 1.75;
            gap:20px;
          }

          .checkout-title {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
          }

          .checkout-text {
            font-size: 1rem;
            margin-bottom: 1rem;
          }

          .checkout-button {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background-color: black;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            color: white;
            text-decoration: none;
            width: fit-content;
            transition: transform 0.2s;
          }

          .checkout-button:hover {
            transform: scale(1.05);
          }

          .checkout-button p {
            margin: 0;
          }

          .checkout-button img {
            width: 1.5rem;
          }
        `}
      </style>

      <div className="checkout-container">
     
        <div className="checkout-section">
          <img src={instructor} alt="Instructor" className="checkout-image" />
          <div className="checkout-content">
            <h4 className="checkout-title">Become an Instructor</h4>
            <p className="checkout-text">
              Instructors from around the world teach millions of students on
              Byway. <br />
              We provide the tools and skills to teach what you love.
            </p>
            <Link to="/course" onClick={handleClick} className="checkout-button">
              <p>Start Your Instructor Journey</p>
              <img src={rightarr} alt="Arrow" />
            </Link>
          </div>
        </div>

    
        <div className="checkout-section" style={{ marginTop: "2rem" }}>
          <div className="checkout-content">
            <h4 className="checkout-title">Transform your life through education</h4>
            <p className="checkout-text">
              Learners around the world are launching new careers, advancing in
              <br />
              their fields, and enriching their lives.
            </p>
            <Link to="/course" onClick={handleClick} className="checkout-button">
              <p>Checkout Courses</p>
              <img src={rightarr} alt="Arrow" />
            </Link>
          </div>
          <img src={learner} alt="Learner" className="checkout-image" />
        </div>
      </div>
    </>
  );
};

export default Checkout;
