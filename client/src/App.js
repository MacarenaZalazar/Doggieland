import './App.css';
import { Route, Switch } from 'react-router-dom'
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
      <Switch>
      <Route exact path='/doggieland'>
        <Home/>
      </Route>
        <Route exact path='/doggieland/create'>
          <CreateBreed/>
        </Route>
        <Route path='/doggieland/:id' component={BreedDetail}/>
      </Switch>
    </div>
  );
}

export default App;
