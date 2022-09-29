import './sass-global/index.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Mall from './mall-home/Mall';
import Gothic from './gothic-rex/Gothic';
import Dad from './just-dad/Dad';
import Pancake from './pancake-cat/Pancake';
import Sarcasim from './suddenly-sarcasim/Sarcasim';

function App() {
  return (
    <div className="App">
        <Router>
          <nav>Nav Bar Here</nav>
          <Routes>
            <Route path="/" element={<Mall />}>
              <Route path="gothic-rex" element={<Gothic />} />
              <Route path="thats-just-dad" element={<Dad />} />
              <Route path="pancake-cat" element={<Pancake />} />
              <Route path="suddenly-sarcasim" element={<Sarcasim />} />
            </Route>
          </Routes>
          <footer>Footer Here</footer>
        </Router>
    </div>
  );
}

export default App;
