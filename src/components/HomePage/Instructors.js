import { useState, useEffect, useRef } from "react";
import star from "../../assets/star.svg";
import { Link } from "react-router-dom";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const linkRef = useRef(null);

  useEffect(() => {
    fetch("/data/instructor.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .catch((error) =>
        console.error("Error fetching instructors data:", error)
      );
  }, []);

  const seeAll = () => {
    window.scrollTo(0, 0);
  };

  const handleClick = () => {
    linkRef.current.click();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="instructors-container">
        <div className="header">
          <h4 className="title">Top Instructors</h4>
          <p className="see-all">
            <Link to="/course" onClick={seeAll}>
              See All
            </Link>
          </p>
        </div>

        <div className="instructors-grid">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="instructor-card"
              onClick={handleClick}
            >
              <div className="card">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="instructor-image"
                />
                <div className="card-content">
                  <h3 className="instructor-name">{instructor.name}</h3>
                  <p className="instructor-work">{instructor.work}</p>
                  <div className="instructor-info">
                    <div className="rating">
                      <img src={star} alt="stars" className="star-icon" />
                      <span>{instructor.star_ratings}</span>
                    </div>
                    <p className="students">{instructor.students} students</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Link ref={linkRef} to="/course" />
        </div>
      </div>

      <style>
        
         {`
        .instructors-container {
             padding: 2rem 1rem;
            
        }

        .instructors-header {
            display: flex;
            justify-content: space-between;
            flex-wrap:wrap;
            padding-bottom: 1rem;
        }
         
          .title {
            margin: 8px;
            font-size: 1.5rem;
            font-weight: bold;
          }

          .see-all {
            color: #3b82f6;
            font-weight: 600;
            cursor: pointer;
          }

          .instructors-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap:164px;
          }

          .instructor-card {
            display: flex;
            flex-direction: column;
            justify-content:space-evenly;
            cursor: pointer;
            box-shadow: 0px 0px 8px 0px #3B82F61F;
          }

          .card {
            border-radius: 8px;
            overflow: hidden;
            background: white;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }

          .card:hover {
            transform: scale(1.05);
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          }

          .instructor-image {
            width: 100%;
            height: 180px;
            object-fit: cover;
            width: 177;
            height: 132;
            border-radius: 8px;
            


          }

          .card-content {
            padding: 16px;
            text-align: center;
          }

          .instructor-name {
            font-size: 1.125rem;
            font-weight: bold;
          }

          .instructor-work {
            color: #6b7280;
            padding-bottom: 8px;
          }

          .instructor-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 8px;
            border-top: 1px solid #e5e7eb;
          }

          .rating {
            display: flex;
            align-items: center;
          }

          .star-icon {
            margin-right: 4px;
          }

          .students {
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
};

export default Instructors;
