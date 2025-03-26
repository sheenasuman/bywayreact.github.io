import { Link, Element } from "react-scroll";
import { useState } from "react";

import Description from "./Description";
import Instructor from "./Instructor";
import Syllabus from "./Syllabus";
import Reviews from "./Reviews";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const tabStyle = {
    cursor: "pointer",
    padding: "30px 10px",
    width:"230px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    textAlign: "center",
    
  };

  const activeTabStyle = {
    backgroundColor: "#ebf8ff",
    borderColor: "#4299e1",
  };

  return (
    <>
      {/* Tab Navigation */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8 , 1fr)",
          gap: "10px",
          padding: "16px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {["Description", "Instructor", "Syllabus", "Reviews"].map((tab) => (
          <Link
            key={tab}
            to={tab}
            smooth={true}
            duration={500}
            style={{
              ...tabStyle,
              ...(activeTab === tab ? activeTabStyle : {}),
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Link>
        ))}
      </div>

      {/* Sections */}
      <div style={{ padding: "16px" }}>
        <Element name="Description" style={{ marginTop: "16px" }}>
          <Description />
        </Element>

        <Element name="Instructor" style={{ marginTop: "16px" }}>
          <Instructor />
        </Element>

        <Element name="Syllabus" style={{ marginTop: "16px" }}>
          <Syllabus />
        </Element>

        <Element name="Reviews" style={{ marginTop: "16px" }}>
          <Reviews />
        </Element>
      </div>
    </>
  );
};

export default Tab;
