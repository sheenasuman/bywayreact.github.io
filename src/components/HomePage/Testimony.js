import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftarr from "../../assets/short-arrow-left.svg";
import rightarr from "../../assets/short-arrow-right.svg";

const Testimony = () => {
  const [testimonies, setTestimonies] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetch("/data/testimony.json")
      .then((res) => res.json())
      .then((data) => setTestimonies(data))
      .catch((error) =>
        console.error("Error fetching testimonies data:", error)
      );
  }, []);

  // React Slick settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <>
      <div className="testimony-container">
        <div className="testimony-header">
          <h2 className="testimony-title">
            What Our Customers <br /> Say About Us
          </h2>
          <div className="navigation-buttons">
            <div onClick={handlePrev} className="nav-button">
              <img src={leftarr} alt="Previous" />
            </div>
            <div onClick={handleNext} className="nav-button">
              <img src={rightarr} alt="Next" />
            </div>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {testimonies.map((testimony) => (
            <div key={testimony.id} className="testimonial-card">
              <div className="testimonial-content">
                <img src={testimony.image} alt="quotes" className="quote-icon" />
                <p className="testimonial-text">{testimony.text}</p>
                <div className="testimonial-profile">
                  <img
                    src={testimony.profile}
                    alt={testimony.name}
                    className="profile-pic"
                  />
                  <div>
                    <h5 className="profile-name">{testimony.name}</h5>
                    <p className="profile-job">{testimony.job}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style>
        {`
          .testimony-container {
            padding: 32px 16px;
            background: #f9fafb;
          }

          .testimony-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 24px;
            margin-bottom: 24px;
            padding-left: 16px;
            padding-right: 16px;
          }

          .testimony-title {
            font-size: 1.75rem;
            font-weight: bold;
          }

          .navigation-buttons {
            display: flex;
            gap: 8px;
          }

          .nav-button {
            background: #4b5563;
            padding: 8px 16px;
            border-radius: 8px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: background 0.3s ease-in-out;
          }

          .nav-button:hover {
            background: #374151;
          }

          .testimonial-card {
            padding: 8px;
          }

          .testimonial-content {
            border-radius: 12px;
            padding: 16px;
            background: white;
            box-shadow: 0px 0px 8px 0px #3b82f61f;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }

          .testimonial-content:hover {
            transform: scale(1.03);
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          }

          .quote-icon {
            width: 24px;
          }

          .testimonial-text {
            font-size: 1rem;
            color: #374151;
            margin: 24px 0;
          }

          .testimonial-profile {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .profile-pic {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            object-fit: cover;
          }

          .profile-name {
            font-weight: bold;
            color: #1f2937;
          }

          .profile-job {
            font-size: 0.875rem;
            color: #6b7280;
          }
        `}
      </style>
    </>
  );
};

export default Testimony;
