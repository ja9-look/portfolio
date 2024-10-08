import './App.css';
import Header from './components/Header/Header';
import PortfolioGrid from './components/PortfolioGrid/PortfolioGrid';
import Timeline from './components/Timeline/Timeline';

function App() {
  return (
    <div className="App">
      <Header />
      <Timeline />
      <PortfolioGrid />
    </div>
  );
}

export default App;
