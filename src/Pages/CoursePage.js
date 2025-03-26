
import Introduction from "../components/CoursePage/Introduction";
import Testimony from "../components/HomePage/Testimony";
import Courses from "../components/HomePage/Courses";
import Tab from "../components/CoursePage/Tab";
import Breadcrumbs from "../components/CoursePage/Breadcrumbs";

const CoursePage = () => {


  return (
    <>
      <div className="overflow-hidden">
        <Breadcrumbs className="bg-black" />
        <Introduction />
        <Tab />
        <Testimony />
        <Courses />
      </div>
    </>
  );
};

export default CoursePage;