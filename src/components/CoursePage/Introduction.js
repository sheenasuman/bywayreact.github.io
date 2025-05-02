import React from "react";
import "./Introduction.css";
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
    { id: 1, href: "https://facebook.com", Icon: FaFacebook, color: "#4267B2", alt: "Facebook" },
    { id: 2, href: "https://github.com", Icon: FaGithub, color: "#333", alt: "GitHub" },
    { id: 3, href: "https://google.com", Icon: FaGoogle, color: "#DB4437", alt: "Google" },
    { id: 4, href: "https://x.com", Icon: FaTwitter, color: "#1DA1F2", alt: "X" },
    { id: 5, href: "https://microsoft.com", Icon: FaMicrosoft, color: "#F25022", alt: "Microsoft" },
  ];

  return (
    <div className="intro-wrapper">
      <div className="intro-content">
        <div className="intro-left">
          <h3 className="intro-title">Introduction to User Experience Design</h3>
          <p className="intro-description">
            This course is meticulously crafted to provide you with a foundational understanding
            of the principles, methodologies, and tools that drive exceptional user experiences
            in the digital landscape.
          </p>

          <div className="intro-details">
            <div className="intro-rating">
              <span className="rating-value">4.6</span>
              <div className="stars">
                {Array(5).fill().map((_, i) => (
                  <img key={i} src={star} alt="star" />
                ))}
              </div>
              <span>(651651 ratings)</span>
              <span>|</span>
              <span>22 Total Hours</span>
              <span>155 Lectures</span>
              <span>All levels</span>
            </div>

            <div className="intro-creator">
              <img src={profile} alt="Instructor profile" className="profile-pic" />
              <span>
                Created by <a href="#">Ronal Richards</a>
              </span>
            </div>

            <div className="intro-languages">
              <img src={achive} alt="Languages" />
              <span>English, Spanish, Italian, German</span>
            </div>
          </div>
        </div>

        <div className="intro-right">
          <img src={promo} alt="Buy course" className="promo-img" loading="lazy" />

          <div className="price-section">
            <span className="price-current">$49.5</span>
            <span className="price-old">$99.5</span>
            <span className="price-discount">50% Off</span>
          </div>

          <a href="#"><button className="btn-cart">Add To Cart</button></a>
          <a href="#"><button className="btn-buy">Buy Now</button></a>

          <div className="share-section">
            <p>Share</p>
            <div className="share-icons">
              {links.map(link => (
                <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.Icon
                    color={link.color}
                    size={32}
                    className="share-icon"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
