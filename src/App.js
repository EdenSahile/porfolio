import React from 'react';

import profil from './profil.png';
import {Routes,Route, Link} from 'react-router-dom'
import './App.css';
import './Styles/resume.css'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Formation from './components/Formation/Formation'


function App() {




  return (

    <div>

      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-block d-lg-none">Eden Sahilé</span>
          <span class="d-none d-lg-block">
            <img class="img-fluid img-profile mx-auto mb-2" src={profil} alt="" />
          </span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" class="nav-link js-scroll-trigger">About</Link>
            </li>
             <li class="nav-item">
              <Link to ="/formation" class="nav-link js-scroll-trigger">Formation</Link>
            </li>
            <li class="nav-item">
              <Link to="/experience" class="nav-link js-scroll-trigger">Expérience</Link>
            </li>
           

          </ul>
        </div>
      </nav>


      <div class="container-fluid p-0">

        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/formation' element={<Formation/>}/>
        </Routes>
       
      </div>

    </div>

  )
}
export default App;

