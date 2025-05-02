import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CoursePage from "./Pages/CoursePage";
import Header from "./components/HomePage/Header";
import Footer from "./components/HomePage/Footer";
import Wrapper from "./components/HomePage/Wrapper";

function App() {
  return (
   
    <>
      <Router>
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course/" element={<CoursePage />} />
            <Route path="/course/:id" element={<CoursePage />} />
          </Routes>
        </Wrapper>
        <Footer />
      </Router>
    </>
  );
}

export default App;