import './sass-global/index.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MallHome from './global-components/MallHome';
import Mall from './mall-home/Mall';
import Gothic from './gothic-rex/Gothic';
import Dad from './just-dad/Dad';
import Pancake from './pancake-cat/Pancake';
import Sarcasim from './suddenly-sarcasim/Sarcasim';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<MallHome />}>
              <Route index element={<Mall />} />
              <Route path="mall-home" element={<Mall />} />
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
