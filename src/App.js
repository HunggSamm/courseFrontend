import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Course from './Course';
import Section from './Section';
import Lesson from './TextLesson';  // TextLesson sẽ là trang Lesson

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Course />} />  {/* Trang Course sẽ là trang mặc định */}
        <Route path="/course" element={<Course />} />
        <Route path="/section" element={<Section />} />
        <Route path="/lesson" element={<Lesson />} />
      </Routes>
    </Router>
  );
}

export default App;
