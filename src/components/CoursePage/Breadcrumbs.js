import React from "react";

const Breadcrumbs = () => {
  return (
    <>
      <style>
        {`
          .breadcrumbs {
            font-size: 0.875rem;
            color: #4b5563; /* Tailwind's text-gray-600 */
            padding: 2rem 2rem;
            margin: 0 1rem;
          }

          .breadcrumbs-list {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 0.5rem;
          }

          .breadcrumbs-link {
            font-weight: 500;
            text-decoration: none;
            color: inherit;
          }

          .breadcrumbs-link:hover {
            text-decoration: underline;
          }

          .breadcrumbs-separator {
            color: #9ca3af; /* Tailwind's text-gray-400 */
          }

          .breadcrumbs-current {
            font-weight: 500;
            color: #3b82f6; /* Tailwind's text-blue-500 */
          }

          @media (max-width: 640px) {
            .breadcrumbs {
              padding: 0.5rem 1rem;
            }
          }
        `}
      </style>
      <nav className="breadcrumbs">
        <ul className="breadcrumbs-list">
          {/* Home Link */}
          <li>
            <a href="/" className="breadcrumbs-link">
              Home
            </a>
          </li>
          <li className="breadcrumbs-separator">›</li>
          {/* Categories Link */}
          <li>
            <a href="/categories" className="breadcrumbs-link">
              Categories
            </a>
          </li>
          <li className="breadcrumbs-separator">›</li>
          {/* Current Page */}
          <li>
            <span className="breadcrumbs-current">
              Introduction to User Experience Design
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Breadcrumbs;
