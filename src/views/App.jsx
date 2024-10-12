import { BrowserRouter as Router} from 'react-router-dom';

import RoutesIndex from '../utils/routes';
import AuthGuard from '../utils/hooks/AuthGuard';
import { AppProvider } from '../utils/hooks/AppContext';

function App() {
  return (
    <div className="bg-gray-100">
      <Router>
        <AppProvider>
          <AuthGuard>
            <RoutesIndex />
          </AuthGuard>
        </AppProvider>
      </Router>
    </div>
  );
}

export default App