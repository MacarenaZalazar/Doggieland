import './App.css';
import { Route } from 'react-router-dom'
import BreedDetail from './components/BreedDetail/BreedDetail';
import NavBar from './components/NavBar/NavBar';
import CreateBreed from './components/CreateBreed/CreateBreed'
import LandingPage from './components/LandingPage/LandingPage'
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
        <Route path='/create'>
          <CreateBreed/>
        </Route>
    </div>
  );
}

export default App;
