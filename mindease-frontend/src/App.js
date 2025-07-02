import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MoodTracker from './pages/MoodTracker';
import Journal from './pages/Journal';
import CBT from './pages/CBT';
import Breathing from './pages/Breathing';
import Dashboard from './pages/Dashboard';
import Affirmation from './pages/Affirmation';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mood" element={<MoodTracker />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/cbt" element={<CBT />} />
        <Route path="/breathing" element={<Breathing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/affirmation" element={<Affirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
