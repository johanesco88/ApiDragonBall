import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import CustomCard from './Components/CustomCard/CustomCard';
import NavBar from './Components/NavBar/NavBar'

import HomePage from './Pages/HomePage/HomePage'
import FilterPage from './Pages/FilterPage/FilterPage'
import DetailsPage from './Pages/DetailsPage/DetailsPage'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import AcercaDePage from './Pages/AcercaDePage/AcercaDePage'

const App = () => {

  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);



  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters?page=1&limit=10')
      .then(response => response.json())
      .then(data => {
        setData(data.items);
        setTotalPages(data.meta.totalPages);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);



  const handlePagination = (event, page) => {
    setCurrentPage(page);
    fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=10`)
      .then(response => response.json())
      .then(data => setData(data.items))
      .catch(error => console.error('Error fetching page:', error));
  };


  return (
    <>
      <Header />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage data={data} />} />

          <Route path='/filter/:gender' element={<FilterPage />} />
          <Route path='/details/:id' element={<DetailsPage />} />
          <Route path='/AcercaDePage' element={<AcercaDePage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      
      {totalPages > 1 && (
        <div className='pagination'>
          <Pagination className="pagination-container"

            onChange={handlePagination}
            count={totalPages}
            page={currentPage}
            variant="outlined"
            shape="rounded"
            size="large"

            renderItem={(item) => (
              <PaginationItem className='pagination-item'
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </div>
      )}




      <Footer />
    </>
  )
}

export default App