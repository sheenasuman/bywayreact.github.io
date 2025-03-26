import React from "react";
import star from "../../assets/star.svg";
import profile from "../../assets/span-8.svg";
import achive from "../../assets/language.svg";
import promo from "../../assets/img.jpg";

import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaMicrosoft,
} from "react-icons/fa";

const Introduction = () => {
  const links = [
    { id: 1, href: "https://facebook.com", Icon: FaFacebook, color: "#4267B2" },
    { id: 2, href: "https://github.com", Icon: FaGithub, color: "#333" },
    { id: 3, href: "https://google.com", Icon: FaGoogle, color: "#DB4437" },
    { id: 4, href: "https://x.com", Icon: FaTwitter, color: "#1DA1F2" },
    { id: 5, href: "https://microsoft.com", Icon: FaMicrosoft, color: "#F25022" },
  ];

  return (
    <>
      {/* CSS in JSX */}
      <style>
        {`
      
          .introduction-container {
            padding: 1rem 2rem;
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            background-color: #f9fafb;
            position: relative;
          }

          @media (min-width: 1024px) {
            .introduction-container {
              flex-direction: row;
            }
          }

          .course-title {
            font-family: Inter;
            font-weight: 700;
            font-size: 40px;
            line-height: 56px;
            letter-spacing: -2%;
          }

          .course-description {
            padding: 0.5rem 0;
            font-size: 1.5rem;
            color: #374151;
          }
            

          .rating-section {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            color: #4b5563;
          }

          .rating-star {
            display: flex;
            align-items: center;
          }

          .course-instructor {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .course-language {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            color: #6b7280;
          }

          .price-box {
            padding: 2rem;
            border-radius: 0.5rem;
            background: #fff;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            
          }
          .w-full{
            width: 430px;
          }

          .price {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 25px;
            font-size: 1.25rem;
            font-weight: bold;
            color: #374151;
          }

          .discount {
            text-decoration: line-through;
            color: #9ca3af;
          }

          .discount-off {
            color: #10b981;
            font-weight: bold;
          }

          .button {
            display: block;
            text-align: center;
            padding: 1rem;
            border-radius: 0.5rem;
            font-size: 1rem;
            font-weight: bold;
            width: 100%;
            margin-bottom: 0.5rem;
          }

          .button-primary {
            background: #000;
            color: #fff;
          }

          .button-secondary {
            border: 1px solid #000;
            color: #000;
          }

          .share-container {
            border-top: 1px solid #d1d5db;
            padding-top: 1rem;
            margin-top: 1rem;
          }

          .social-icons {
            display: flex;
            justify-content: space-between;
            margin-top: 0.5rem;
          }

          .social-icons a {
            background: #fff;
            border-radius: 50%;
            padding: 0.5rem;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
          }
            .course-instructor{
             border-radius:50%;
            }

        `}
      </style>

      <div className="introduction-container">
        <div className="lg:w-1/2">
          <h3 className="course-title">Introduction to User Experience Design</h3>
          <p className="course-description">
            This course is meticulously crafted to provide you with a
            foundational understanding of the principles, methodologies, and
            tools that drive exceptional user experiences in the digital
            landscape.
          </p>

          <div className="py-4 space-y-4">
            <div className="rating-section">
              <span className="text-yellow-500 font-bold">4.6</span>
              <div className="rating-star">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <img key={i} src={star} alt="star" />
                  ))}
              </div>
              <span>(651651 ratings)</span>
              <span>|</span>
              <span>22 Total Hours</span>
              <span>155 Lectures</span>
              <span>All levels</span>
            </div>

            <div className="course-instructor">
              <img src={profile} alt="Instructor" className="roundimage" />
              <span>
                Created by{" "}
                <a href="#" className="text-blue-500">
                  Ronald Richards
                </a>
              </span>
            </div>

            <div className="course-language">
              <img src={achive} alt="Languages" />
              <span>English, Spanish, Italian, German</span>
            </div>
          </div>
        </div>

        <div className="price-box lg:w-1/3">
          <div className="rounded overflow-hidden">
            <img src={promo} alt="Course Promo" className="w-full" />
          </div>

          <div className="price">
            <span>$49.5</span>
            <span className="discount">$99.5</span>
            <span className="discount-off">50% Off</span>
          </div>

          <a href="#">
            <button className="button button-primary">Add To Cart</button>
          </a>
          <a href="#">
            <button className="button button-secondary">Buy Now</button>
          </a>

          <div className="share-container">
            <p className="font-semibold text-lg my-2">Share</p>
            <div className="social-icons">
              {links.map((link) => (
                <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.Icon color={link.color} size={32} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
