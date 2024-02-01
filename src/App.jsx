import { useState } from 'react'
import ShowSummary from './components/ShowSummary'
import ShowList from './components/ShowList'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


function App() {
  

  return (
    <>
      <ToastContainer/>
      <Router>
      
      
        <Routes>
         
          

          <Route path='/' element={<ShowList/>}/>
          <Route path='/show/:id' element={<ShowSummary/>}/>

          
        </Routes>
    
    </Router>
    </>
  )
}

export default App
