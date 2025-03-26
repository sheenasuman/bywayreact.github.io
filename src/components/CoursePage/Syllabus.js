import { useState, useEffect } from "react";
import down from "../../assets/arrow-down.svg";
import axios from "axios";

const Syllabus = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/data/syllabus.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching syllabus data:", error);
      });
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style>
        {`
          .syllabus-container {
            padding: 2rem 0;
            width: 100%;
            max-width: 75%;
          }

          .syllabus-title {
            font-size: 1.75rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }

          .syllabus-item {
            border: 2px solid #ccc;
            border-radius: 8px;
            margin-bottom: 10px;
            cursor: pointer;
            transition: background 0.3s ease-in-out;
          }

          .syllabus-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            background: #fff;
          }

          .syllabus-header:hover {
            background: #f3f4f6;
          }

          .syllabus-header-left {
            display: flex;
            align-items: center;
          }

          .syllabus-icon {
            margin-right: 10px;
            transition: transform 0.3s ease-in-out;
          }

          .syllabus-icon.open {
            transform: rotate(180deg);
          }

          .syllabus-title-text {
            font-weight: 500;
          }

          .syllabus-meta {
            color: #6b7280;
          }

          .syllabus-content {
            padding: 1rem;
            background: #f9fafb;
            color: #4b5563;
            border-top: 1px solid #ddd;
          }

          .syllabus-empty {
            color: #6b7280;
            text-align: center;
          }
        `}
      </style>

      <div className="syllabus-container">
        <h2 className="syllabus-title">Syllabus</h2>

        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="syllabus-item" onClick={() => toggleAccordion(index)}>
              <div className="syllabus-header">
                <div className="syllabus-header-left">
                  <img
                    src={down}
                    alt="dropdown"
                    className={`syllabus-icon ${openIndex === index ? "open" : ""}`}
                  />
                  <span className="syllabus-title-text">{item.title}</span>
                </div>
                <span className="syllabus-meta">{item.lessons} Lessons · {item.duration}</span>
              </div>
              {openIndex === index && (
                <div className="syllabus-content">
                  <p>Lesson details go here...</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="syllabus-empty">No data</p>
        )}
      </div>
    </>
  );
};

export default Syllabus;
