import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import Admin from './Components/Admin/Admin';
import CreateForm from './Components/CreateForm/CreateForm';
import Team from './Components/Team/Team';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

const App = () => {
  return (
    <>
    
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/team' element={ <Team/> }/>
          <Route path='/admin' element={ <Admin/> } />
          <Route path='/createform' element={ <CreateForm/> } />
          <Route path='/profile/:id' element={ <Profile/> } />
        </Routes>
        <Footer/>
      </BrowserRouter>
    
    </>
  )
}

export default App;