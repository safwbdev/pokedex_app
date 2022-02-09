import { 
  useEffect, 
  // ChangeEvent, 
  // useState
 } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemon } from './redux/actions/allPokemonActions';
import { rootStore } from './redux/store';
import { TopNavbar, BottomNavbar, Pokemon, AllPokemon, UnderConstruction} from './components';
import { BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import { getPokemon } from './redux/actions/pokemonActions';


function App() {
  // const [pokemonName, setPokemonName] = useState("charizard");

  const allPokemonState = useSelector((state: rootStore) => state.allPokemon);
  const dispatch = useDispatch();

  // const handleChange =(event:ChangeEvent<HTMLInputElement>):void => setPokemonName(event.target.value);
  // const handleSubmit =():void=>{
  //   dispatch(getPokemon(pokemonName))
  // }

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
          <Route path="/search" element={<UnderConstruction title="Search Section" />} />
          <Route path="/caught" element={<UnderConstruction title="Caught Collection" />} />
        </Routes>
        <BottomNavbar/>
      </div>
      </div>
    </Router>
  
  
    //   <div className='flex items-center p-2'>
    //     <input className='shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" onChange={handleChange} />
    //     <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-r focus:outline-none focus:shadow-outline' onClick={handleSubmit}><FaSearch/></button>
    //   </div>
  );
}

export default App;
