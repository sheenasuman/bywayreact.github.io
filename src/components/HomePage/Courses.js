import { useState, useEffect } from "react";
import star from "../../assets/star.svg";
import { useNavigate, Link } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  const handleClick = (id) => {
    navigate(`/course/${id}`);
    window.scrollTo(0, 0);
  };

  const seeAll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetch("/data/courses.json")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses data:", error));
  }, []);

  return (
    <>
      <style>
        {`
          .courses-container {
            padding: 2rem 1rem;
          }

          .courses-header {
            display: flex;
            justify-content: space-between;
            padding-bottom: 1rem;
          }

          .courses-title {
            margin: 0.5rem;
            font-size: 1.5rem;
            font-weight: bold;
          }

          .see-all {
            color: #2563eb;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
          }

          .see-all:hover {
            text-decoration: underline;
          }

          .courses-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 1.5rem;
          }

          @media (min-width: 640px) {
            .courses-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 768px) {
            .courses-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .courses-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          .course-card {
            padding: 1rem;
            border-radius: 12px;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            background: white;
            box-shadow: 0px 0px 8px 0px rgba(59, 130, 246, 0.12);
          }

          .course-card:hover {
            transform: scale(1.03);
            box-shadow: 0px 4px 12px rgba(59, 130, 246, 0.2);
          }

          .course-image {
            object-fit: cover;
            width: 100%;
            height: 10rem;
            border-radius: 8px 8px 0 0;
          }

          .course-info {
            padding: 0.5rem 0;
          }

          .course-info .course-title {
            font-size: 1rem;
            font-weight: bold;
          }

          .course-subtitle {
            color: #6b7280; 
            font-size: 0.875rem;
          }

          .course-ratings {
            display: flex;
            align-items: center;
            margin-top: 0.25rem;
          }

          .course-ratings img {
            width: 1rem;
            height: 1rem;
          }

          .ratings-count {
            color: #6b7280;
            margin-left: 0.25rem;
            font-size: 0.875rem;
          }

          .course-status {
            color: #6b7280;
            font-size: 0.875rem;
            margin-top: 0.25rem;
          }

          .course-price {
            margin-top: 0.5rem;
            font-weight: bold;
          }
        `}
      </style>

      <div className="courses-container">
        <div className="courses-header">
          <h4 className="courses-title">Top Courses</h4>
          <p className="see-all">
            <Link to="/course" onClick={seeAll}>
              See All
            </Link>
          </p>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <div
              key={course.id}
              className="course-card"
              onClick={() => handleClick(course.id)}
            >
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-info">
                <h4 className="course-title">{course.title}</h4>
                <p className="course-subtitle">{course.subtitle}</p>
                <div className="course-ratings">
                  {[...Array(course.star_ratings)].map((_, i) => (
                    <img key={i} src={star} alt="Star" />
                  ))}
                  <p className="ratings-count">({course.star_ratings} Ratings)</p>
                </div>
                <p className="course-status">{course.status}</p>
                <p className="course-price">${course.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
