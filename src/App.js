import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MythRoutes from './routes/MythRoutes';

const App = () => {
  return (
    <Router>
      <MythRoutes />
    </Router>
  );
};

export default App;
