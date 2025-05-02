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
        <div className="headers">
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
                      <img src={star} alt="stars" className="star-icon" />60%
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
             width:100%;
            
        }

        .headers {
            display: flex;
            justify-content: space-between;
            padding-bottom: 1rem;
        }
         
          
          .title {
            margin: 0.5rem;
            font-size: 1.5rem;
            font-weight: bold;
            margin-left:-29px;
          }
          
         .see-all a {
                 font-weight: 600;
                  cursor: pointer;
                   text-decoration: undeline;
                    color: #2563eb
                 
           
          }
           .instructors-grid {
              display:flex;
              flex direction :column;
              justify-content:space-around;
               gap:50px;
               flex-wrap:wrap;
             
               
         }
                
       

          .instructor-card {
            display: flex;
            flex-direction: column;
            justify-content:space-around;
            cursor: pointer;
           
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
        width: 239px;
        height: 182px;
        border-radius: 8px;
        border-bottom: none;
        box-shadow: none;
        object-fit: cover;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
    }

          .card-content {
            padding: 16px;
            text-align: center;
          }

          .instructor-name {
            font-size: 1.125rem;
            font-weight: bold;
            display:flex;
            justify-content:center;
          }

          .instructor-work {
            color: #6b7280;
            padding-bottom: 8px;
            display:flex;
            justify-content:center;
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
         @media a
         
        `}
      </style>
    </>
  );
};

export default Instructors;
