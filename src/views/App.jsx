import { BrowserRouter as Router} from 'react-router-dom';

import RoutesIndex from '../utils/routes';
import AuthGuard from '../utils/hooks/AuthGuard';
import { AuthProvider } from '../utils/hooks/AuthContext';

function App() {
  return (
    <div className="bg-gray-100">
      <Router>
        <AuthProvider>
          <AuthGuard>
            <RoutesIndex />
          </AuthGuard>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App