import React from "react";


const Breadcrumb = () => {
  return (
    <>
        <style>
          {`.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 14px;
  color: #374151; /* Tailwind gray-700 */
  background-color: #f9fafb; /* Tailwind gray-50 */
  padding: 1rem;
}
  .wrapper {
    margin:0 auto;
    padding: 16px; 
    width:95%;
  }

.breadcrumb a {
  color: #374151;
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb a:hover {
  color: #1d4ed8; /* Tailwind blue-700 */
}

.breadcrumb .separator {
  color: #9ca3af; /* Tailwind gray-400 */
}

.breadcrumb .active {
  color: #2563eb; /* Tailwind blue-600 */
  font-weight: 500;
}  `}
        </style>
    <nav className="breadcrumb">
      <a href="/">Home</a>
      <span className="separator">›</span>
      <a href="/categories">Categories</a>
      <span className="separator">›</span>
      <a href="#" className="active">
        Introduction to User Experience Design
      </a>
    </nav>
    </>
    );
  };
export default Breadcrumb;