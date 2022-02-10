import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemon } from './redux/actions/allPokemonActions';
import { rootStore } from './redux/store';
import { TopNavbar, BottomNavbar, Pokemon, AllPokemon, UnderConstruction} from './components';
import { toggleMode } from './redux/actions/modeAction';
import { BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const allPokemonState = useSelector((state: rootStore) => state.allPokemon);
  const dispatch = useDispatch();
  const {classicMode} = useSelector((state: rootStore) => state.mode);
  const toggleSwitch = (curr:boolean):void => {
    dispatch(toggleMode(curr))
  };

  const trimName =(name:string):string=> name.replace("-"," ");

  useEffect(() => {
    dispatch(getAllPokemon())
  }, [dispatch]);



  return (
    <Router>
      <div className="App">
        <TopNavbar 
        toggleSwitch={toggleSwitch}
        mode={classicMode}
         />
        <div className='lg:container lg:mx-auto'>
          <Routes>
            <Route path="/" element={<AllPokemon data={allPokemonState} mode={classicMode} trimName={trimName} />}  />
            <Route path="/pokemon/:id" element={<Pokemon mode={classicMode} trimName={trimName}  />} />
            <Route path="/caught" element={<UnderConstruction title="Caught Collection" />} />
          </Routes>
          <BottomNavbar 
            toggleSwitch={toggleSwitch}
            mode={classicMode}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
