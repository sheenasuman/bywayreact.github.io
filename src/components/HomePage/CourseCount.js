import axios from "axios";
import { useEffect, useState } from "react";

const CourseCount = () => {
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    axios
      .get("/data/coursecount.json")
      .then((response) => {
        setCounts(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <style>
        {`
          .wrapper {
               margin:0 auto;
               padding: 16px; 
                width:95%;
           }
          .course-container {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f9fafb;
            padding: 1.5rem 0;
      
          }

          .course-item {
            text-align: center;
            padding: 1rem 1.5rem;
            width: 100%;
          }

          @media (min-width: 640px) {
            .course-container {
            
              border-left: none;
            }

            .course-item {
              width: 50%;
              border-left: 1px solid #d1d5db;
              border-top: none;
            }
          }

          @media (min-width: 1024px) {
            .course-item {
              width: 25%;
            }
          }

          .course-count {
            font-size: 1rem;
            font-weight: bold;
            color: #1f2937;
            font-family: Inter;


          }

          .course-text {
            color: #6b7280;
            font-size: 1rem;
          }

          // @media (min-width: 1024px) {
          //   .course-count {
          //     font-size: 1.5rem;
          //   }

          //   .course-text {
          //     font-size: 1.125rem;
          //   }
          // }

          .no-courses {
            color: #6b7280;
            font-size: 1rem;
            text-align: center;
          }
        `}
      </style>

      <div className="course-container">
        {counts && counts.length > 0 ? (
          counts.map((count, index) => (
            <div key={index} className="course-item">
              <h2 className="course-count">{count.course}</h2>
              <p className="course-text">{count.text}</p>
            </div>
          ))
        ) : (
          <p className="no-courses">No courses available</p>
        )}
      </div>
    </>
  );
};

export default CourseCount;
