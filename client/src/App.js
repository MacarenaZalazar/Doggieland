import './App.css';
import { Route } from 'react-router-dom'
import Breeds from './components/Breeds/Breeds'
import BreedsDetail from './components/Breeds/BreedsDetail';
import NavBar from './components/NavBar/NavBar';
import CreateBreed from './components/Breeds/CreateBreed'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'


function App() {
  console.log('anda app!')
  

  return (
    <div className="App">
        <Route component={NavBar} />
        <Route exact path='/breeds'>
            <Breeds/>
        </Route> 
        <Route path='/breedsDetail/:id' component={BreedsDetail}/>
        <Route path='/createBreed'>
          <CreateBreed/>
        </Route>
    </div>
  );
}

export default App;
