import { BrowserRouter as Router} from 'react-router-dom';
import RoutesIndex from '../utils/routes';

function App() {
  return (
    <Router>
      <RoutesIndex />
    </Router>
  );
}

export default App