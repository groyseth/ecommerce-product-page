import React, {useState} from 'react'
import About from '../pages/About';
import Collections from '../pages/Collections';
import Contact from '../pages/Contact';
import LandingPage from '../pages/LandingPage';
import Ships from "../pages/Ships"
import Travel from '../pages/Travel';
import MainNav from "./MainNav"
export default function MainComponent() {

    const [currentPage, setCurrentPage] = useState('landingPage');

  const renderPage = () => {
    if (currentPage === 'landingPage') {
      return <LandingPage />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Collections') {
      return <Collections />;
    }
    if (currentPage === 'Ships') {
      return <Ships />;
    }
    if (currentPage === 'Travel') {
      return <Travel />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
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
