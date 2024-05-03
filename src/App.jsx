import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import HtmlCourse from "./pages/HtmlCourse.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/html-course" element={<HtmlCourse />} />
      </Routes>
    </Router>
  );
}

export default App;
