import { useState, useEffect } from 'react';
import Portfolio from './pages/Portfolio';
import Preloader from './components/Preloader/Preloader';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev === 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      {loading ? <Preloader progress={progress} /> : <Portfolio />}
    </div>
  );
}

export default App;
