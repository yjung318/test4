import {HashRouter as Router, Routes, Route} from 'react-router-dom';

//Components
import HomePage from './Components/HomePage';
import ProjectPage from './Components/ProjectPage';

function App() {
  return (
    <div class="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/projects" element={<ProjectPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
