import Categories from "../components/HomePage/Categories";
import Courses from "../components/HomePage/Courses";
import CourseCount from "../components/HomePage/CourseCount";
import HeroSection from "../components/HomePage/HeroSection";
import Instructors from "../components/HomePage/Instructors";
import Testimony from "../components/HomePage/Testimony";
import Checkout from "../components/HomePage/Checkout";


const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <HeroSection />
        <CourseCount />
        <Categories />
        <Courses />
        <Instructors />
        <Testimony />
        <Checkout />
      </div>
    </>
  );
};

export default Home;