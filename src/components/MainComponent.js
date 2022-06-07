import React, {useState} from 'react'
import LandingPage from '../pages/LandingPage';
import MainNav from "./MainNav"
export default function MainComponent() {

    const [currentPage, setCurrentPage] = useState('landingPage');

  const renderPage = () => {
    if (currentPage === 'landingPage') {
      return <LandingPage />;
    }
   
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <MainNav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
     
    </div>
  )
}
