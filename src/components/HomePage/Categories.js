import { Link } from "react-router-dom";
import astrologyIcon from "../../assets/astrology.svg";
import devIcon from "../../assets/devlopment.svg";
import marIcon from "../../assets/marketing.svg";
import phyIcon from "../../assets/physics.svg";

const categoriesData = [
  { id: 1, icon: astrologyIcon, name: "Astrology", course: 11 },
  { id: 2, icon: devIcon, name: "Development", course: 12 },
  { id: 3, icon: marIcon, name: "Marketing", course: 12 },
  { id: 4, icon: phyIcon, name: "Physics", course: 14 },
];

const handleScroll = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Categories = () => {
  return (
    <>
      <style>
        {`
          .categories-container {
            padding: 2rem 1rem;
          }

          .categories-header {
            display: flex;
            justify-content: space-between;
            padding-bottom: 1rem;
          }

          .categories-title {
            margin: 0.5rem;
            font-weight: bold;
            font-size: 1.25rem;
          }

          .categories-link {
            color: #2563eb;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
          }

          .categories-link:hover {
            text-decoration: underline;
          }

          .categories-grid {
            display: grid;
            gap: 1.5rem;
            grid-template-columns: repeat(2, 1fr);
          }

          @media (min-width: 768px) {
            .categories-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          .category-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: white;
            text-align: center;
            border-radius: 12px;
            padding: 1.5rem;
            cursor: pointer;
            transition: transform 0.2s ease-in-out;
            box-shadow: 0px 0px 8px 0px rgba(59, 130, 246, 0.12);
            text-decoration: none;
            color: inherit;
          }

          .category-card:hover {
            transform: scale(1.05);
          }

          .category-icon {
            background-color: #bfdbfe;
            border-radius: 50%;
            padding: 1rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .category-icon img {
            width: 3rem;
            height: 3rem;
          }

          .category-name {
            font-size: 1.125rem;
            font-weight: bold;
          }

          .category-course {
            font-size: 0.875rem;
            color: gray;
          }
        `}
      </style>

      <div className="categories-container">
        {/* Header */}
        <div className="categories-header">
          <h4 className="categories-title">Top Categories</h4>
          <p>
            <Link to="/course" onClick={handleScroll} className="categories-link">
              See All
            </Link>
          </p>
        </div>

        {/* Categories Grid */}
        <div className="categories-grid">
          {categoriesData.map(({ id, icon, name, course }) => (
            <Link to={`/courses/${name.toLowerCase()}`} key={id} className="category-card">
              <div className="category-icon">
                <img src={icon} alt={`${name} icon`} />
              </div>
              <h2 className="category-name">{name}</h2>
              <p className="category-course">Courses: {course}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
