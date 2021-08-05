import './App.css';
import { Route } from 'react-router-dom'
import BreedDetail from './components/Breeds/BreedDetail';
import NavBar from './components/NavBar/NavBar';
import CreateBreed from './components/Breeds/CreateBreed'
import LandingPage from './components/LandingPage/LandingPage'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import Home from './components/Home/Home';


function App() {

  return (
    <div className="App">
        <Route component={NavBar} />
      <Route exact path= '/'>
        <LandingPage />
      </Route>
      <Route exact path='/home'>
        <Home/>
      </Route>
        <Route path='/breedDetail/:id' component={BreedDetail}/>
        <Route path='/createBreed'>
          <CreateBreed/>
        </Route>
    </div>
  );
}

export default App;
