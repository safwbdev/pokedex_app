import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemon } from './redux/actions/allPokemonActions';
import { rootStore } from './redux/store';
import { TopNavbar, BottomNavbar, Pokemon, AllPokemon, UnderConstruction} from './components';
import { BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const allPokemonState = useSelector((state: rootStore) => state.allPokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemon())
  }, [dispatch]);



  return (
    <Router>
      <div className="App">
        <TopNavbar />
        <div className='lg:container lg:mx-auto'>
          <Routes>
            <Route path="/" element={<AllPokemon data={allPokemonState}/>} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
            <Route path="/caught" element={<UnderConstruction title="Caught Collection" />} />
          </Routes>
          <BottomNavbar/>
        </div>
      </div>
    </Router>
  );
}

export default App;
