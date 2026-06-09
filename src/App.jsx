import { useState } from 'react';
import HomePage from './components/HomePage';
import DestinationGallery from './components/DestinationGallery';
import ProposalPage from './components/ProposalPage';
import { destinations } from './data/destinations';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'gallery', 'proposal'
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handlePropose = () => {
    setCurrentPage('gallery');
  };

  const handleConfirm = (destination) => {
    setSelectedDestination(destination);
    setCurrentPage('proposal');
  };

  const handleRestart = () => {
    setSelectedDestination(null);
    setCurrentPage('home');
  };

  return (
    <div className="w-full min-h-screen">
      {currentPage === 'home' && (
        <HomePage onPropose={handlePropose} />
      )}
      
      {currentPage === 'gallery' && (
        <DestinationGallery 
          destinations={destinations}
          onConfirm={handleConfirm}
        />
      )}
      
      {currentPage === 'proposal' && selectedDestination && (
        <ProposalPage 
          destination={selectedDestination}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
