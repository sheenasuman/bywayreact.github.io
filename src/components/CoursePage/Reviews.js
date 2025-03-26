import { useEffect, useState } from "react";
import star from "../../assets/star.svg";
import span6 from "../../assets/span-6.svg";

const styles = `
  .reviews-container {
    padding-bottom: 32px;
  }
  .reviews-title {
    font-size: 20px;
    font-weight: 600;
    margin-top: 24px;
    margin-bottom: 16px;
  }
  .reviews-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 32px;
  }
  .ratings-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 25%;
  }
  .overall-rating {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }
  .rating-breakdown {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .rating-row {
    display: flex;
    align-items: center;
  }
  .stars {
    display: flex;
  }
  .star-filled {
    font-size: 18px;
    color: #facc15;
  }
  .star-empty {
    font-size: 18px;
    color: #d1d5db;
  }
  .rating-percentage {
    margin-left: 16px;
    width: 40px;
    color: #4b5563;
  }
  .reviews-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 75%;
  }
  .review-card {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
  }
  .review-header {
    display: flex;
    align-items: center;
  }
  .profile-pic {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  .reviewer-name {
    margin-left: 8px;
    font-weight: bold;
  }
  .review-rating {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .review-score {
    font-weight: bold;
  }
  .review-date {
    font-size: 14px;
    color: #6b7280;
  }
  .review-feedback {
    color: #374151;
    line-height: 1.5;
    font-size:19px;
    
  }
  .view-more-container {
    margin: 0 auto;
  }
  .view-more-button {
    border: 1px solid black;
    padding: 8px 16px;
    color: black;
    border-radius: 6px;
  }
`;

const RatingBreakdown = ({ ratings }) => {
  return (
    <div className="rating-breakdown">
      {ratings.map((rating, index) => (
        <div key={index} className="rating-row">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < rating.stars ? "star-filled" : "star-empty"}>★</span>
            ))}
          </div>
          <span className="rating-percentage">{rating.percentage}%</span>
        </div>
      ))}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <img src={span6} alt="Profile Picture" className="profile-pic" />
        <div className="reviewer-name">Mark Doe</div>
      </div>
      <div className="review-content">
        <div className="review-rating">
          {[...Array(review.star)].map((_, i) => (
            <img key={i} src={star} alt="star" />
          ))}
          <span className="review-score">{review.star}</span>
          <p className="review-date">Reviewed on {review.date}</p>
        </div>
        <p className="review-feedback">{review.feedback}</p>
      </div>
    </div>
  );
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [ratingsData, setRatingsData] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState(1);

  useEffect(() => {
    fetch("/data/reviews.json")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.reviews);
        setRatingsData(data.ratingsData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="reviews-container">
        <h2 className="reviews-title">Learner Reviews</h2>

        <div className="reviews-content">
          <div className="ratings-section">
            <div className="overall-rating">
              <img src={star} alt="star" />
              <span className="overall-score">4.6</span>
              <p className="total-reviews">146,951 reviews</p>
            </div>
            <RatingBreakdown ratings={ratingsData} />
          </div>

          <div className="reviews-list">
            {reviews.length > 0 ? (
              reviews.slice(0, visibleReviews).map((review, index) => <ReviewCard key={index} review={review} />)
            ) : (
              <p>Loading reviews...</p>
            )}

            {visibleReviews < reviews.length && (
              <div className="view-more-container">
                <button className="view-more-button" onClick={() => setVisibleReviews(reviews.length)}>
                  View more Reviews
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;