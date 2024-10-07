import { BrowserRouter as Router} from 'react-router-dom';
import RoutesIndex from '../utils/routes';

function App() {
  return (
    <Router>
      <div className="bg-gray-100">
        <RoutesIndex />
      </div>
    </Router>
  );
}

export default App